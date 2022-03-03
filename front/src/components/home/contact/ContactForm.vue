<template>
  <form>
    <div class="group">
      <div>
        <label for="firstName">Prénom</label>
        <input
          type="text"
          name="firstName"
          id="firstName"
          v-model="firstName.value"
          @input="
            (val) => {
              if (/\d/.test(val.target.value)) {
                this.firstName.error =
                  'Votre prénom ne peut pas contenir de chiffres.';
              } else this.firstName.error = '';
            }
          "
        />
        <p>{{ firstName.error }}</p>
      </div>
      <div>
        <label for="lastName">Nom</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          v-model="lastName.value"
          @input="
            (val) => {
              if (/\d/.test(val.target.value)) {
                this.firstName.error =
                  'Votre nom ne peut pas contenir de chiffres.';
              } else this.firstName.error = '';
            }
          "
        />
        <p>{{ lastName.error }}</p>
      </div>
    </div>
    <div class="group">
      <div>
        <label for="address">Adresse (numéro + rue + ville)</label>
        <input
          type="text"
          name="address"
          id="address"
          v-model="address.value"
        />
        <p>{{ address.error }}</p>
      </div>
    </div>
    <div class="group">
      <div>
        <label for="bedCount">Nombre de lits</label>
        <input
          type="number"
          name="bedCount"
          id="bedCount"
          v-model="bedCount.value"
          @input="
            (val) => {
              // create error message if user inputs something that is not a number or less than 1 room
              if (isNaN(val.target.value) || val.target.value < 1) {
                this.bedCount.error =
                  'Veuillez entrer un nombre de lits valide.';
              } else this.bedCount.error = '';
            }
          "
        />
        <p>{{ bedCount.error }}</p>
      </div>
      <div>
        <label for="weekLength">Durée (en semaines)</label>
        <input
          type="number"
          name="weekLength"
          id="weekLength"
          v-model="weekLength.value"
          @input="
            (val) => {
              // create error message if user inputs something that is not a number or less than 1 week
              if (isNaN(val.target.value) || val.target.value < 1) {
                this.weekLength.error = 'Veuillez entrer une durée valide.';
              } else this.weekLength.error = '';
            }
          "
        />
        <p>{{ weekLength.error }}</p>
      </div>
    </div>
    <div class="group">
      <div>
        <label for="languages">Langues parlées</label>
        <input
          type="text"
          name="languages"
          id="languages"
          v-model="languages.value"
        />
        <p>{{ languages.error }}</p>
      </div>
      <div>
        <label for="phone">Téléphone</label>
        <input
          type="phone"
          name="phone"
          id="phone"
          v-model="phone.value"
          @input="
            (val) => {
              // create error message if user input is not a phone number (handling all formats)
              if (
                !/^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(
                  val.target.value
                )
              ) {
                this.phone.error =
                  'Veuillez entrer un numéro de téléphone valide.';
              } else this.phone.error = '';
            }
          "
        />
        <p>{{ phone.error }}</p>
      </div>
    </div>
    <div class="group">
      <div>
        <label for="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          v-model="email.value"
          @input="
            (val) => {
              // create error message if user input is not an email
              if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val.target.value)) {
                this.email.error = 'Veuillez entrer un email valide.';
              } else this.email.error = '';
            }
          "
        />
        <p>{{ email.error }}</p>
      </div>
    </div>
    <div class="group">
      <div>
        <label for="message">Message (facultatif)</label>
        <textarea
          type="message"
          name="message"
          id="message"
          v-model="message.value"
          @input="
            (val) => {
              // prevent script injection
              val.target.value = val.target.value.replace(/[<>]/g, '');
              // create error is message is longer than 2000 characters
              if (val.target.value.length > 2000) {
                this.message.error =
                  'Votre message doit faire moins de 2000 caractères.';
              } else this.message.error = '';
            }
          "
        />
        <p>{{ message.error }}</p>
      </div>
    </div>
    <input
      v-if="this.loading === false"
      type="submit"
      value="Envoyer la proposition d'accueil"
      @click="(e) => submitForm(e)"
    />
    <input v-else type="submit" value="Envoi en cours..." />
    <p v-if="errorMessage">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      firstName: {
        value: "",
        error: null,
      },
      lastName: {
        value: "",
        error: null,
      },
      address: {
        value: "",
        error: null,
      },
      bedCount: {
        value: "",
        error: null,
      },
      weekLength: {
        value: "",
        error: null,
      },
      languages: {
        value: "",
        error: null,
      },
      phone: {
        value: "",
        error: null,
      },
      email: {
        value: "",
        error: null,
      },
      message: {
        value: "",
        error: null,
      },
      errorMessage: "",
      successMessage: "",
      loading: false,
    };
  },
  methods: {
    async submitForm(event) {
      // prevent form submission
      event.preventDefault();
      // check if there are any errors
      if (
        this.firstName.error ||
        this.lastName.error ||
        this.address.error ||
        this.bedCount.error ||
        this.weekLength.error ||
        this.languages.error ||
        this.phone.error ||
        this.email.error ||
        this.message.error
      ) {
        // display error message
        this.errorMessage =
          "Veuillez corriger les erreurs avant de soumettre le formulaire.";
      } else if (
        // if a value is not filled, then say that it must be filled
        this.firstName.value === "" ||
        this.lastName.value === "" ||
        this.address.value === "" ||
        this.bedCount.value === "" ||
        this.weekLength.value === "" ||
        this.languages.value === "" ||
        this.phone.value === "" ||
        this.email.value === ""
      ) {
        this.errorMessage =
          "Veuillez remplir tous les champs avant de soumettre le formulaire.";
      } else {
        this.loading = true;
        this.errorMessage = "";
        // submit form to API
        await axios
          .post(process.env.VUE_APP_API_HOST + "/api/contacts/", {
            firstName: this.firstName.value,
            lastName: this.lastName.value,
            address: this.address.value,
            bedCount: String(this.bedCount.value),
            weekLength: String(this.weekLength.value),
            languages: this.languages.value,
            phone: this.phone.value,
            email: this.email.value,
            message: this.message.value,
          })
          .then(() => {
            this.successMessage =
              "Votre demande d'accueil a bien été envoyée. Vous serez contacté dans les plus brefs délais.";
            // reset all fields once request is send successfully
            this.firstName.value = "";
            this.lastName.value = "";
            this.address.value = "";
            this.bedCount.value = "";
            this.weekLength.value = "";
            this.languages.value = "";
            this.phone.value = "";
            this.email.value = "";
            this.message.value = "";
          })
          .catch(() => {
            this.errorMessage =
              "Une erreur est survenue lors de l'envoi du formulaire. Veuillez réessayer plus tard.";
          });
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
form {
  width: calc(100% - 30px);
  max-width: 700px;
  background-color: white;
  margin: 40px auto 0 auto;
  border-radius: 20px;
  padding: 10px 15px;

  @media (max-width: 600px) {
    background-color: rgb(253, 542, 225);
    width: 100%;
    padding: 0;
  }

  .group {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: stretch;
    width: 100%;
    margin: 20px 0;

    div {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      flex-grow: 1;
      min-width: 200px;
      padding: 0 15px;
      font-size: 1.1rem;
      margin: 3px 0;
      overflow: hidden;

      @media (max-width: 600px) {
        padding: 0 5px;
      }

      input,
      textarea {
        width: calc(100% - 34px);
        border: none;
        margin: 5px 0;
        padding: 0;
        padding: 15px;
        border-radius: 7px;
        border: 2px solid rgb(220, 220, 220);
        font-size: 1.3rem;

        &:focus {
          outline: none;
          border: 2px solid rgb(57, 41, 143);
        }

        + p {
          margin: 0;
          color: red;
          font-size: 0.9rem;
          width: 100% !important;
        }

        @media (max-width: 600px) {
          margin: 0;
        }
      }
    }
  }

  input[type="submit"] {
    max-width: calc(100% - 80px);
    background-color: rgb(77, 56, 194);
    color: white;
    border: none;
    white-space: normal;
    padding: 20px 40px;
    border-radius: 7px;
    font-size: 1.1rem;
    margin-bottom: 10px;
    -webkit-appearance: none;

    + p {
      color: red;
      margin: 0;
    }

    + p.success {
      color: green;
      font-weight: 600;
      margin: 0;
    }
  }
}
</style>
