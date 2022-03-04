module.exports = app => {
   const contact = require("../controllers/contacts.controller.js");
   var router = require("express").Router();

   router.post("/", contact.create);
   router.get("/counter", contact.counter)

   app.use('/api/contacts', router);
};