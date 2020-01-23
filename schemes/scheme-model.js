const db = require('../data/db-config.js');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove,
}

function find() {
  return db.select("*").from("schemes");
}

function findById(id){
  // return db.select("*").from("schemes").where({id})
  return db("schemes").where({id}).first();
}

function findSteps(id) {
  return db("steps as s")
  .join("schemes as sc", "s.scheme_id", "=", "sc.id")
  .where("sc.id", id)
  .select("s.id as id", "sc.scheme_name as postedBy", "s.step_number as step_number", "s.instructions as instructions" );
}

function add(scheme) {
  return db("schemes")
  .insert(scheme)
  .then(([id]) => { // Go rewatch today's lecture to better understand this.
    return findById(id);
  });
}

function update(changes, id) {
  return db("schemes")
  .where({id})
  .update(changes) // Why does {id} work but (id) doesn't and why isn't that reciprocated in changes as well?
}

function remove (id) {
  return db("schemes")
  .where({id})
  .del();
}