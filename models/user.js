const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    userName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },
    isVarified: {
      type:Boolean,
      required: true,
    },
    otp: {
        type: Number,
        required: true,
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim: true,
    },
    about: {
        type: String,
        required: false,
        unique: false,
    },
    publications: {
        type:Array
    }
}
);

const User = mongoose.model("User", userSchema, "Users");

module.exports = User;