const ColumnDef = require('./column-def');

class Expression {
    query() {
        throw new Error('calling abstract method');
    }

    as(alias) {
        return new ColumnDef(this, alias);
    }
}

module.exports = Expression;
