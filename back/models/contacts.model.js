const validator = require('validator');

module.exports = mongoose => {
   const ObjectId = mongoose.Schema.ObjectId;
   const Contacts = mongoose.model(
      "contacts",
      mongoose.Schema(
         {
            firstName: {
               type: String,
               required: true,
               validate: (value) => {
                  if (!validator.isAlpha(value, ['fr-FR'], { ignore: "' -" })) {
                     throw new Error({ error: 'first name should only contain letters' })
                  }
               }
            },
            lastName: {
               type: String,
               required: true,
               validate: (value) => {
                  if (!validator.isAlpha(value, ['fr-FR'], { ignore: "' -" })) {
                     throw new Error({ error: 'first name should only contain letters' })
                  }
               }
            },
            address: {
               type: Object,
               required: true
            },
            bedCount: {
               type: Number,
               required: true
            },
            weekLength: {
               type: Number,
               required: true
            },
            languages: {
               type: [String],
               required: true
            },
            phone: {
               type: String,
               required: true,
               validate: (value) => {
                  if (!validator.isMobilePhone(value)) {
                     throw new Error({ error: 'invalid phone' })
                  }
               }
            },
            email: {
               type: String,
               required: true,
               validate: (value) => {
                  if (!validator.isEmail(value)) {
                     throw new Error({ error: 'invalid email' })
                  }
               }
            },
            message: {
               type: String,
               required: false
            }
         },
         { timestamps: true }
      )
   );

   return Contacts;
};