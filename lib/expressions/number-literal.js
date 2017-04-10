const Literal = require('./literal');

class NumberLiteral extends Literal {
    constructor(value) {
        super();
        this._value = value;
    }

    toString() {
        return `${this._value}`;
    }
}

module.exports = NumberLiteral;
