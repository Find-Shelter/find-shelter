module.exports = app => {
   const contact = require("../controllers/contacts.controller.js");
   var router = require("express").Router();

   router.post("/", contact.create);

   app.use('/api/contacts', router);
};