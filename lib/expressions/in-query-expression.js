const Expression = require('../expression');
const { getExpression } = require('../utils');

class InQueryExpression extends Expression {
    constructor(subject, query) {
        super();
        this._subject = getExpression(subject);
        this._query = query
    }

    toString() {
        return `${this._subject} IN ${this._query.query()}`;
    }
}

module.exports = InQueryExpression;
