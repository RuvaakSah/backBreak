const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "Error al obtener tareas", error });
    }
});

// Crear una tarea
router.post('/', async (req, res) => {
    try {
        const newTask = new Task(req.body);
        await newTask.save();
        res.status(201).json(newTask);
    } catch (error) {
        res.status(400).json({ message: "Error al crear tarea", error });
    }
});

// Borrar una tarea
router.delete('/id/:id', async (req, res) => {
    try {
        await Task.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Tarea eliminada correctamente" });
    } catch (error) {
        res.status(404).json({ message: "Tarea no encontrada" });
    }
});

module.exports = router;