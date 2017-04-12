const _ = require('lodash');
const Expression = require('./expression');
const StringLiteral = require('./expressions/string-literal');
const NumberLiteral = require('./expressions/number-literal');
const BooleanLiteral = require('./expressions/boolean-literal');

class ArgList {
    constructor() {
        this._value = '';
    }

    add(segment) {
        if (this._value.length === 0) {
            this._value = `${segment}`;
            return this;
        }

        this._value += `, ${segment}`;
        return this;
    }

    toString() {
        return `${this._value}`;
    }
}

/**
 * Get an expression
 * @param {*} subject
 * @returns Expression
 */
function getExpression(subject) {
    if (subject instanceof Expression) {
        return subject;
    }
    if (_.isNumber(subject)) {
        return new NumberLiteral(subject);
    }
    if (_.isBoolean(subject)) {
        return new BooleanLiteral(subject);
    }
    if (_.isString(subject)) {
        return new StringLiteral(subject);
    }
    console.log(subject);
    throw "getExpression: unrecognized subject";
}

module.exports = {
    ArgList,
    getExpression,
}
