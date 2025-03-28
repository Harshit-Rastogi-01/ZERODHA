const { model } = require("mongoose");

const { UsersSchema } = require('../schemas/UsersSchema.js');

const UsersModel = new model("user",UsersSchema);

module.exports = { UsersModel };