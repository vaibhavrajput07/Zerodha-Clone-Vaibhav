const {model}=require('mongoose');
const {positionsSchema}=require('../Schema/PositionsSchema');

const PositionModel=new model("Position",positionsSchema);

module.exports={PositionModel};