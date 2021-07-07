
exports.seed = function(knex) {
  return knex('tasks').insert([
    {task_description: 'fork and clone the sprint repo', task_notes: 'dont forget to create your own branch', task_complete: true, project_id:1},
    {task_description: 'complete mvp', task_notes: 'read READ ME carefully and follow instructions', task_complete: false, project_id:1},
    {task_description: 'submit sprint on canvas', task_notes: 'as pull request', task_complete: false, project_id:1},
    {task_description: 'Brainstorm', task_notes: 'discuss with team ideas for company', task_complete: false, project_id:2},
    {task_description: 'Add beers', task_notes: 'create a component to render current list of beers', task_complete: false, project_id:3},
  ]);
};
