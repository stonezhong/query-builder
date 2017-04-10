const Expression = require('../expression');
const { getExpression } = require('../utils');

class BinaryExpression extends Expression {
    constructor(op, a, b) {
        super();
        this._op = op;
        this._a = getExpression(a);
        this._b = getExpression(b);
    }

    toString() {
        return `(${this._a}) ${this._op} (${this._b})`;
    }
}

module.exports = BinaryExpression;