const {Schema} = require("mongoose");

const OrdersSchema = ({
  name: String,
  price: Number,
  percent: String,
  mode: String,
});

module.exports = {OrdersSchema};