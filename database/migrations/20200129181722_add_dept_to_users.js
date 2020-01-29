
exports.up = function(knex) {
  return knex.schema.table('users', tbl => {
    tbl.string('department', 128);
  })
};

exports.down = function(knex) {
  return knex.schema.table('users', tbl => {
    tbl.dropColumn('department');
  })
};
