const mongoose = require('mongoose');
const CardSchema = new mongoose.Schema({
    name: { type: String, required: true },
    game: { type: String, required: true }, // Ejemplo: Pokémon, Magic, Yu-Gi-Oh
    price: { type: Number, required: true },
    image: { type: String }, // URL de la imagen de la carta
    stock: { type: Number, default: 1 }
});
module.exports = mongoose.model('Card', CardSchema);