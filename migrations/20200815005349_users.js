exports.up = function (knex) {
  return knex.schema.table("users", (table) => {
    table.renameColumn("nome", "name");
  });
};

exports.down = function (knex) {
  return knex.schema.table("users", (table) => {
    table.renameColumn("name", "nome");
  });
};
