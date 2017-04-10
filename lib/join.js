class Join {
    constructor(query) {
        this._query = query;        // required
        this._expr = null;          // optional
    }

    on(expr) {
        return this.name;
    }
}

function Join(name) {
    return null;
}

module.exports = Join;
