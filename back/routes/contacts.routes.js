module.exports = app => {
   const contact = require("../controllers/contacts.controller.js");
   var router = require("express").Router();

   router.get("/", contact.create);
   router.get("/:contact", contact.findOne);

   app.use('/api/contacts', router);
};