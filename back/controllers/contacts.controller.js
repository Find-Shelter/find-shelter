const db = require("../models");
const Contacts = db.contacts;
const validator = require("validator");

exports.create = async (req, res) => {
  try {
    // check that the request body contains the required fields from the frontend form
    if (
      !req.body.firstName ||
      !req.body.lastName ||
      !req.body.address ||
      !req.body.bedCount ||
      !req.body.weekLength ||
      !req.body.languages ||
      !req.body.phone ||
      !req.body.email
    ) {
      return res.status(400).send({
        message: "Please fill out the missing field(s)",
      });
    } else if (
      !validator.isAlpha(req.body.firstName, ["fr-FR"], { ignore: "' -" }) ||
      !validator.isAlpha(req.body.lastName, ["fr-FR"], { ignore: "' -" }) ||
      !validator.isNumeric(req.body.bedCount) ||
      !validator.isNumeric(req.body.weekLength) ||
      !validator.isMobilePhone(req.body.phone) ||
      !validator.isEmail(req.body.email)
    ) {
      return res.status(400).send({
        message: "One or more fields are invalid",
      });
    } else {
      // convert string containing languages to array (split with spaces and comma)
      req.body.languages = req.body.languages.split(/,| /);

      // add user to Contacts using mongodb
      const contact = await Contacts.create({
        ...req.body,
      });
      await contact.save();

      res.status(201).json({ message: "Contact created" });
    }
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while creating the Contact.",
    });
  }
};

exports.findOne = (req, res) => {};

exports.counter = async (req, res) => {
  try {
    const registeredPeople = await Contacts.count();
    const people = await Contacts.find();
    const registeredBeds = people.reduce((acc, val) => (acc += val.bedCount), 0);
    res.status(200).json({ data: { registeredPeople, registeredBeds } });
  } catch (err) {
    res.status(400).json({ message: `Error: ${err}` });
  }
};
