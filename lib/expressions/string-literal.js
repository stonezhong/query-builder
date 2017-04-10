const Literal = require('./literal');

class StringLiteral extends Literal {
    constructor(value) {
        super();
        this._value = value;
    }

    toString() {
        return `'${this._value}'`;
    }
}

module.exports = StringLiteral;