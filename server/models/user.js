const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

let rolesValids = {
  values: ["ADMIN_ROLE", "USER_ROLE"],
  message: "{VALUE} no és un rol vàlid",
};

// nomUsuari,
//         email,
//         password: bcrypt.hashSync(password,10),
//         descripcio,
//         adreca,
//         telefon,

let Schema = mongoose.Schema;

let userSchema = new Schema({
  nomUsuari: {
    type: String,
    unique: true,
    required: [true, "El nom d'usuari és obligatori"],
  },
  email: {
    type: String,
    unique: true,
    required: [true, "El correu electrònic és obligatori"],
  },
  password: {
    type: String,
    required: [true, "La contrasenya és obligatoria"],
  },
  descripcio: {
    type: String,
    unique: true,
    required: [true, "El nom d'usuari és obligatori"],
  },
  preu: {
    type: Number,
    unique: true,
    required: [true, "El nom d'usuari és obligatori"],
  },
  telefon: {
    type: String,
    unique: true,
    required: [true, "El nom d'usuari és obligatori"],
  },
});

userSchema.methods.toJSON = function () {
  let user = this;
  let userObject = user.toObject();
  delete userObject.password;
  return userObject;
};

userSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });

module.exports = mongoose.model("User", userSchema);