const ColumnDef = require('./column-def');

class Expression {
    as(alias) {
        return new ColumnDef(this, alias);
    }

    /**
     * Is it a simple expression?
     * A simple expression does not require parenthesis when used as child expression
     * For example you can do a + b since both a and b are simple expression
     * But you cannot do a + b / c + d, since a + b is not simple, it should be (a + b) / (c + d)
     */
    isSimple() {
        return false;
    }

    /**
     * Get this expression as a child expression
     * @returns {string}
     */
    asChild() {
        const ret = `${this}`;
        if (this.isSimple()) {
            return ret;
        }
        return `(${ret})`;
    }
}

module.exports = Expression;
