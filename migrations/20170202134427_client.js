exports.up = function (knex, Promise) {
    return Promise.all([
        knex
            .schema
            .createTableIfNotExists('company', (table) => {
                table
                    .increments('id')
                    .primary()
                table.string('company')
                table.string('NoU')
                table.string('cost')
                table.enu('payment', ['paid', 'notPaid'])
                table.timestamps()
            }),

        knex
            .schema
            .createTableIfNotExists('client', (table) => {
                table
                    .increments('id')
                    .primary()
                table.string('full_name', 50)
                table.string('email', 100)
                table.string('password')
                table.enu('sex', ['Male', 'Female'])
                table.text('work_phone')
                table.text('mobile')
                table.text('address')
                table
                    .integer('country_id')
                    .unsigned()
                table
                    .integer('company_id')
                    .unsigned()

                table.enu('status', ['valid', 'invalid'])

                /*ForeignKey*/
                table
                    .foreign('country_id')
                    .references('id')
                    .inTable('country')

                table
                    .foreign('company_id')
                    .references('id')
                    .inTable('company')
            })
    ])
};

exports.down = function (knex, Promise) {};
exports.config = {
    transaction: true
}
