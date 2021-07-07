
exports.seed = function(knex) {
  return knex('resources').insert([
    {resource_name: 'laptop', resource_description: 'mobile computer to write code on the go '},
    {resource_name: 'calculator', resource_description: 'for calculating'},
    {resource_name: 'DbDesigner', resource_description: 'to map out and create tables for SQL queries'},
    {resource_name: 'Coffee', resource_description: 'keeps you awake'},
    {resource_name: 'pen', resource_description: 'to take notes'}
  ]);
};
