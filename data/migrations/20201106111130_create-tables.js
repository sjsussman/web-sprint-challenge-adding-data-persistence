
exports.up = function(knex) {
  return knex.schema
    .createTable('projects', tbl => {
        tbl.increments()
        tbl.string('project_name', 128)
            .notNullable();
        tbl.string('project_description', 128)
        tbl.boolean('project_complete')
            .defaultTo(false)
    })
    .createTable('resources', tbl => {
        tbl.increments()
        tbl.string('resource_name', 128)
            .notNullable()
            .unique()
        tbl.string('resource_description')
    })
    .createTable('tasks', tbl => {
        tbl.increments();
        tbl.string('task_description', 128)
            .notNullable()
        tbl.string('task_notes', 128)
        tbl.boolean('task_complete')
            .defaultTo(false)
        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
    .createTable('projects_resources', tbl => {
        tbl.integer('project_id')
            .unsigned()
            .references('id')
            .inTable('projects')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
        tbl.integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('CASCADE')
            .onUpdate('CASCADE')
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('projects_resources')
    .dropTableIfExists('tasks')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
};
