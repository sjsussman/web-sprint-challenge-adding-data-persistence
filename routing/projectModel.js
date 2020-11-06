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
}