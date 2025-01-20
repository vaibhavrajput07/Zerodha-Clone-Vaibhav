const {model}=require('mongoose');
const {OrderSchema}=require('../Schema/OrdersSchema');

const OrderModel=new model("Order",OrderSchema);

module.exports={OrderModel};