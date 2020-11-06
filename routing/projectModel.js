const { select } = require('../data/db-config.js')
const db = require('../data/db-config.js')

module.exports = {
    getAllProjects() {
        return db('projects')
    },
    getAllResources(){
        return db('resources')
    },
    getAllTasks(){
        //include project name
        //include project description
        return db('tasks')
        .join('projects', 'projects.id', 'tasks.project_id')
        .select('projects.project_name', 'projects.project_description', 'tasks.task_description', 'tasks.task_notes', 'tasks.task_complete')
    },
    addProject(project){
        return db('projects')
        .insert(project)
        .then((id) => {
            return db('projects')
            .where({ id : id }).first();
        })
    },
    addResource(resource){
        return db('resources')
        .insert(resource)
        .then((id) => {
            return db('resources')
            .where({ id : id }).first();
        })
    },
    addTask(task){
        return db('tasks')
        .insert(task)
        .then((id) => {
            return db('tasks')
            .where({ id : id }).first();
        })
    },
    removeProj(id) {
        return db('projects')
        .where({ id : id })
        .del()
    },
    //STRETCH
    getProjectResources(project_id) {
        return db('projects')
        .join('projects_resources', 'projects.id', 'projects_resources.project_id')
        .join('resources', 'resources.id', 'projects_resources.resource_id')
        .select('projects.project_name', 'resources.resource_name')
        .where({ 'project_id': project_id })
    },

    getProjectResources(resource) {
        return db('projects_resources')
        .insert(resource)
        .where({ 'project_id': project_id })
    },

    // [ ] Add an endpoint to get a list of project resources.
}