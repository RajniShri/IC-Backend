const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    version:String,
    applications: [],
    productLines: [],
    addons: [],
    productid: { type: String,unique: true, required: true }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('productdetails', schema);