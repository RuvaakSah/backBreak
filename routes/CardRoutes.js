const express = require('express');
const router = express.Router();
const Card = require('../models/Card');

// 1. Obtener todas las cartas (READ)
router.get('/', async (req, res) => {
    try {
        const cards = await Card.find().sort({ createdAt: -1 });
        res.status(200).json(cards);
    } catch (err) {
        res.status(500).json({ message: "Error al obtener cartas" });
    }
});

// 2. Crear una carta (CREATE)
router.post('/', async (req, res) => {
    try {
        const newCard = new Card(req.body);
        const savedCard = await newCard.save();
        res.status(201).json(savedCard);
    } catch (err) {
        res.status(400).json({ message: "Error al crear: datos inválidos" });
    }
});

// 3. Borrar una carta (DELETE)
router.delete('/:id', async (req, res) => {
    try {
        const deletedCard = await Card.findByIdAndDelete(req.params.id);
        if (!deletedCard) return res.status(404).json({ message: "Carta no encontrada" });
        res.status(200).json({ message: "Carta eliminada" });
    } catch (err) {
        res.status(500).json({ message: "Error al eliminar" });
    }
});

module.exports = router;