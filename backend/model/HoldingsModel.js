const mongoose = require('mongoose');
const { HoldingsSchema } = require('../Schema/HoldingsSchema');

// Correcting the usage of mongoose.model
const HoldingModel = mongoose.model("holding", HoldingsSchema);

module.exports = { HoldingModel };
