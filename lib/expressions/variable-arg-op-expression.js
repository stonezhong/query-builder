const _ = require('lodash');
const VariableArgExpression = require('./variable-arg-expression');

class VariableArgOpExpression extends VariableArgExpression {
    constructor(op, ...args) {
        super(...args);
        this._op = op;
    }

    toString() {
        let result = '';
        _.forEach(this._args, (arg) => {
            if (result.length === 0) {
                result = `(${arg})`;
            } else {
                result += ` ${this._op} (${arg})`;
            }
        });

        return result;
    }
}

module.exports = VariableArgOpExpression;