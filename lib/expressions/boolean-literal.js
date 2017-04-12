const Literal = require('./literal');

class BooleanLiteral extends Literal {
    constructor(value) {
        super();
        this._value = value;
    }

    toString() {
        return `${this._value}`;
    }
}

module.exports = BooleanLiteral;
