class ColumnDef {
    /**
     * Construct a ColumnDef
     * @param {Expression} expr
     */
    constructor(expr, alias) {
        this._expr = expr;
        this._alias = alias;
    }

    /**
     * @returns {string}
     */

    toString() {
        if (!this._alias) {
            return `${this._expr}`;
        }

        return `${this._expr} as ${this._alias}`;
    }

    getAlias() {
        return this._alias;
    }
}

module.exports = ColumnDef;

