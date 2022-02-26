// const db = require("../models");
// const Contacts = db.contacts;

exports.create = async (req, res) => {
   try {
      res.status(200).json({ message: 'Contact created' })
   } catch (err) {
      res.status(500).json({
         message: err.message || "Some error occurred while creating the Contact."
      });
   }
 };

exports.findOne = (req, res) => {
  
};