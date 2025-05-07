const Task = require('../models/taskModels');

// Create a new task
const createTask = async (req, res) => {
    try {
        console.log('Request body:', req.body);
        console.log('User from token:', req.user);

        if (!req.body || !req.body.name) {
            return res.status(400).json({ 
                message: 'Task name is required',
                receivedBody: req.body 
            });
        }

        if (!req.user || !req.user.userId) {
            return res.status(401).json({ 
                message: 'User authentication failed',
                user: req.user 
            });
        }

        const { name } = req.body;
        const task = new Task({
            name,
            user: req.user.userId
        });

        await task.save();
        res.status(201).json({
            message: 'Task created successfully',
            task
        });
    } catch (error) {
        console.error('Error in createTask:', error);
        res.status(500).json({ 
            message: 'Error creating task', 
            error: error.message,
            stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }
};

// Get all tasks for the logged-in user
const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find({ user: req.user.userId });
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching tasks', error: error.message });
    }
};

// Update a task
const updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        const task = await Task.findOneAndUpdate(
            { _id: id, user: req.user.userId },
            { name },
            { new: true }
        );

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({
            message: 'Task updated successfully',
            task
        });
    } catch (error) {
        res.status(500).json({ message: 'Error updating task', error: error.message });
    }
};

// Delete a task
const deleteTask = async (req, res) => {
    try {
        const { id } = req.params;
        const task = await Task.findOneAndDelete({ _id: id, user: req.user.userId });

        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }

        res.status(200).json({
            message: 'Task deleted successfully',
            task
        });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting task', error: error.message });
    }
};

module.exports = {
    createTask,
    getTasks,
    updateTask,
    deleteTask
};
