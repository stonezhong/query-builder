const VariableArgExpression = require('./variable-arg-expression');

class FunctionExpression extends VariableArgExpression {
    constructor(name, ...args) {
        super(...args);
        this._name = name;
    }

    isSimple() {
        return true;
    }

    toString() {
        return `${this._name}(${super.toString()})`;
    }
}

module.exports = FunctionExpression;