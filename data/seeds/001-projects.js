
exports.seed = function(knex) {
  return knex('projects').insert([
    {project_name: 'Unit 4 Sprint 2', project_description: 'Complete second sprint on data persistence and SQL queries', project_complete: false},
    {project_name: 'New Social Media company', project_description: 'find a new spin to take social media by storm and compete with the biggest social media mogel', project_complete: false},
    {project_name: 'Brewery', project_description: 'Develop website for Sharon Springs Brewing', project_complete: false},
  ]);
};
