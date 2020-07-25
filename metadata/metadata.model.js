const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    versions:[{name:String,code:String}],
    applications: [{name:String,code:String,version:[String]}],
    productLines: [{name:String,code:String,version:[String],applications:[String]}],
    addons: [{name:String,code:String,version:[String],applications:[String],productLines:[String]}],
    hash: { type: String,unique: true, required: true }
});

schema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: function (doc, ret) {
        delete ret._id;
        delete ret.hash;
    }
});

module.exports = mongoose.model('metadata', schema);