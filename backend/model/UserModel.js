const {model}=require('mongoose');
const {userSchema}=require("../Schema/UserSchema");
const bcrypt = require("bcryptjs");

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });
  
  module.exports = new model("User", userSchema);