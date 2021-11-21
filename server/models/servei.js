const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");

let Schema = mongoose.Schema;
// nomServei disponible quantitat ultimoPedido precio
let serveiSchema = new Schema({
    nomServei: {
      type: String,
      unique: true,
      required: [true, "El nom d'usuari és obligatori"],
    },
    disponible: {
      type: Boolean,
      unique: true,
      required: [true, "Disponible es obligatori"],
    },
    quantitat: {
      type: Number,
      required: [true, "La contrasenya és obligatoria"],
    },
    ultimoPedido: {
      type: String,
      required: [true, "La descripcio és obligatoria"],
    },
    precio: {
      type: String,
      required: [true, "El cognom es obligatori"],
    },
});

serveiSchema.methods.toJSON = function () {
    let user = this;
    let userObject = user.toObject();
    delete userObject.password;
    return userObject;
  };
  
  serveiSchema.plugin(uniqueValidator, { message: "{PATH} debe ser único" });
  
  module.exports = mongoose.model("Client", serveiSchema);