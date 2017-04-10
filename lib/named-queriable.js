/**
 * @implements { Queriable, NamedObjectInterface }
 */
class NamedQueriable {
    constructor(queriable, name) {
        this._queriable = queriable;
        this._name = name;
    }

    query() {
        return this._queriable.query();
    }

    getName() {
        return this._name;
    }
}

module.exports = NamedQueriable;