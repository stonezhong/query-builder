const VariableArgExpression = require('./variable-arg-expression');
const { getExpression } = require('../utils');

class InExpression extends VariableArgExpression {
    constructor(subject, ...args) {
        super(...args);
        this._subject = getExpression(subject);
    }

    toString() {
        return `${this._subject} IN (${super.toString()})`;
    }
}

module.exports = InExpression;
