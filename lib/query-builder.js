const _ = require('lodash');
const { ArgList, getExpression } = require('./utils');
const table = require('./table');
const ColumnDef = require('./column-def');
const Expression = require('./expression');
const NamedQueriable = require('./named-queriable');

class Join {
    constructor(type, query, expr) {
        this.type = type;          // required
        this.query = query;        // required
        this.expr = expr;          // optional
    }
}

class QueryBuilder {
    constructor() {
        this._columnDefs = [];          // required
        this._from = null;              // required
        this._where = null;             // optional
        this._limit = null;             // optional
        this._groupByColumns = [];      // optional
        this._joins = [];
    }

    as(name) {
        return new NamedQueriable(this, name);
    }

    getName() {
        return null;
    }

    /**
     *
     * @param {(ColumnDef|Expression)} column
     */
    select(...columns) {
        _.forEach(columns, (column) => {
            if (column instanceof ColumnDef) {
                this._columnDefs.push(column);
                return;
            }
            if (column instanceof Expression) {
                this._columnDefs.push(new ColumnDef(column, null));
                return;
            }
            throw new Error('select argument must be Cxpression or ColumnDef');
        });
        return this;
    }

    from(fromAble) {
        this._from = fromAble;
        return this;
    }

    where(expr) {
        this._where = expr;
        return this;
    }

    limit(num) {
        this._limit = num;
        return this;
    }

    groupBy(...columns) {
        _.forEach(columns, (column) => {
            this._groupByColumns.push(column);
        });
        return this;
    }

    join(query, expr) {
        this._joins.push(new Join('JOIN', query, expr));
        return this;
    }

    leftJoin(query, expr) {
        this._joins.push(new Join('LEFT JOIN', query, expr));
        return this;
    }

    // use this query as from statement
    query() {
        return `(${this})`;

    }

    toString() {
        let statement = '';

        {
            // handle select
            let argList = new ArgList();
            _.forEach(this._columnDefs, (columnDef) => {
                argList.add(columnDef);
            });
            statement = `SELECT ${argList} FROM ${this._from.query()}`;
            const name = this._from.getName();
            if (name) {
                statement += ` as ${name}`;
            }
        }

        if (this._joins) {
            let temp = '';
            _.forEach(this._joins, (join) => {
                temp = `${join.type} ${join.query.query()}`;
                const name = join.query.getName();
                if (name) {
                    temp += ` AS ${name}`;
                }
                if (join.expr) {
                    temp += ` ON ${join.expr}`;
                }
                statement += ` ${temp}`;
            });
        }

        // handle where clause
        if (this._where) {
            statement += ` WHERE ${this._where}`;
        }

        let groupBy = new ArgList();
        if (this._groupByColumns.length > 0) {
            _.forEach(this._groupByColumns, (column) => {
                groupBy.add(column);
            });
            statement += ` GROUP BY ${groupBy}`;
        }

        if (this._limit) {
            statement += ` LIMIT ${this._limit}`;
        }
        return statement;
    }
}

module.exports = QueryBuilder;
