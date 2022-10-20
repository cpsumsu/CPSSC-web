const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sharingSchema = new Schema({
    username:{type: String, required: true},
    title: {type: String, required: true},
    date: {type: Date, required: true},
    time: {type: String, required: true}
}, {
    timestamps: true
}
);

const Sharing = mongoose.model('Sharing', sharingSchema);

module.exports = Sharing;