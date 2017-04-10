/**
 * @implements Queriable
 */

class Table {
    /**
     * Construct a Table instance
     * @param {string} name
     */
    constructor(name) {
        this.name = name;
    }

    query() {
        return this.name;
    }

    getName() {
        return null;
    }
}

module.exports = Table;
