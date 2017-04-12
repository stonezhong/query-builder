const Expression = require('../expression');
const { getExpression } = require('../utils');

class UnaryExpression extends Expression {
    constructor(op, a) {
        super();
        this._op = op;
        this._a = getExpression(a);
    }

    toString() {
        return `${this._op} ${this._a.asChild()}`;
    }
}

module.exports = UnaryExpression;