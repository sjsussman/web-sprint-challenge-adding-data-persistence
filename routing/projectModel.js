const db = require('../data/db-config.js')

module.exports = {
    getAllProjects() {
        return db('projects')
    },
    // getShoppingList(recipe_id){
    //     return db('Steps')
    //         .where({ "Steps.recipe_id" : recipe_id })
    //         .join('Ingredients', "Ingredients.id", "=", "Steps.Ingredient_id")
    //         .select('Steps.Quantities', 'Ingredients.Ingredient_Name')
    // },
    // getInstructions(recipe_id){
    //     return db('steps')
    //         .select('Steps.steps', 'Steps.Instructions')
    //         .where({ "Steps.recipe_id" : recipe_id })
    //         .orderBy("Steps.steps", "asc")
    // }
}