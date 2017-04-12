const Expression = require('../expression');

class ColumnExpression extends Expression {
    constructor(name) {
        super();
        this._name = name;
    }

    isSimple() {
        return true;
    }

    toString() {
        return `${this._name}`;
    }
}

module.exports = ColumnExpression;