const express = require('express')
const Projects = require('./projectmodel.js')
const router = express.Router()

router.get('/', (req, res) => {
    Projects.getAllProjects()
    .then()
    .catch()
})

// router.post('/', (req, res) => {
//     Projects.getAllProjects()
//     .then()
//     .catch()
// })

// router.get('/resources', (req, res) => {
//     Projects.getAllProjects()
//     .then()
//     .catch()
// })

// router.post('/resources', (req, res) => {
//     Projects.getAllProjects()
//     .then()
//     .catch()
// })

// router.get('/tasks', (req, res) => {
//     Projects.getAllProjects()
//     .then()
//     .catch()
// })
// router.post('/tasks', (req, res) => {
//     Projects.getAllProjects()
//     .then()
//     .catch()
// })


module.exports = router;