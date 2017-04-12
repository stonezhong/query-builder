const _ = require('lodash');
const Expression = require('../expression');
const { getExpression, ArgList } = require('../utils');

class VariableArgExpression extends Expression {
    constructor(...args) {
        super();
        this._args = [];
        _.forEach(args, (arg) => {
            this._args.push(getExpression(arg));
        });
    }

    toString() {
        const argList = new ArgList();
        _.forEach(this._args, (arg) => {
            argList.add(arg);
        });
        return `${argList}`;
    }
}

module.exports = VariableArgExpression;