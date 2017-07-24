exports.up = function(knex, Promise) {

    return Promise.all([

        knex.schema.createTable('privileges', (table) =>  {
        table.increments('id').primary();
        table.string('privilege',100);
        table.string('accesses',100);
        }),

        knex.schema.createTable('employee', (table) => {
            table.increments('id').primary();
            table.string('username',100);
            table.string('password',100);
            table.string('name',100);
            table.string('email',100);
            table.text('address');
            table.timestamps();
        })


    ])
};

exports.down = function(knex, Promise) {

};

exports.config = {transaction: false}
