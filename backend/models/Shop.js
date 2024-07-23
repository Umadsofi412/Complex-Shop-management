const mongoose = require('mongoose');
const shopSchema = new mongoose.Schema({
    name:{type: String, required:true},
    description:{type: String, required:true},
    price: {type: Number, required: true},
    owner:{type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null},
    isAvailable:{type: Boolean, default: true},
});

const Shop = mongoose.model('Shop', shopSchema);
module.exports = Shop