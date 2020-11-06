const express = require('express')
const Projects = require('./projectmodel.js')
const router = express.Router()

router.get('/', (req, res) => {
    Projects.getAllProjects()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

router.post('/', (req, res) => {
    Projects.addProject(req.body)
    .then(newProject => {
        res.status(200).json(newProject)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

router.get('/resources', (req, res) => {
    Projects.getAllResources()
    .then(projects => {
        res.status(200).json(projects)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
    })
})
})

router.post('/resources', (req, res) => {
    Projects.addResource(req.body)
    .then(newResource => {
        res.status(200).json(newResource)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

router.get('/tasks', (req, res) => {
    Projects.getAllTasks()
    .then(tasks => {
        res.status(200).json(tasks)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({
            message: err.message
        })
    })
})

router.post('/tasks', (req, res) => {
    Projects.addTask(req.body)
    .then(newTask => {
        res.status(200).json(newTask)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Projects.removeProj(id)
    .then(deletedProj => {
        console.log(deletedProj)
        res.status(200).json("Deleted")
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

router.get('/:id/resources', (req, res) => {
    const { id } = req.params
    Projects.getProjectResources(id)
    .then(test => {
        res.status(200).json(test)
    })
    .catch(err => {
        res.status(500).json({
            message: err.message
        })
    })
})

module.exports = router;