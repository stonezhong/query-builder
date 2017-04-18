const Expression = require('../expression');
const Types = require('../types');
const { getExpression } = require('../utils');

const TypeToStringMap = new Map(
    [
        [Types.INT64,   'INT64'],
        [Types.STRING,  'STRING'],
    ]
);

// expr between lowerBound upperBound
class CastExpression extends Expression {
    constructor(subject, newType) {
        super();
        this._subject = getExpression(subject);
        this._newType = newType;
    }

    toString() {
        return `CAST(${this._subject.asChild()} AS ${TypeToStringMap.get(this._newType)})`;
    }
}

module.exports = CastExpression;
