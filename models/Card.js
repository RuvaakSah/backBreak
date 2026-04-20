const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'El nombre es obligatorio'] },
    game: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, default: 'https://via.placeholder.com/150' },
    description: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Card', CardSchema);