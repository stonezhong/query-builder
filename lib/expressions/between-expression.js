const Expression = require('../expression');
const { getExpression } = require('../utils');

// expr between lowerBound upperBound
class BetweenExpression extends Expression {
    constructor(subject, lowerBound, upperBound) {
        super();
        this._subject = getExpression(subject);
        this._lowerBound = getExpression(lowerBound);
        this._upperBound = getExpression(upperBound);
    }

    toString() {
        return `(${this._subject}) BETWEEN (${this._lowerBound}) AND (${this._upperBound})`;
    }
}

module.exports = BetweenExpression;
