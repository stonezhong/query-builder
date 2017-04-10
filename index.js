const QueryBuilder = require('./lib/query-builder');
const ColumnDef = require('./lib/column-def');
const ColumnExpression = require('./lib/expressions/column-expression');
const Table = require('./lib/table');
const Expression = require('./lib/expression');
const { getExpression } = require('./lib/utils');
const FunctionExpression = require('./lib/expressions/function-expression');
const BinaryExpression = require('./lib/expressions/binary-expression');
const BetweenExpression = require('./lib/expressions/between-expression');
const InExpression = require('./lib/expressions/in-expression');

/**
 *
 * @param {(ColumnDef|Expression)} column
 */
function select(...columns) {
    const qb = new QueryBuilder();
    return qb.select(...columns);
}

function column(name) {
    return new ColumnExpression(name);
}

function table(name) {
    return new Table(name);
}

// Operator
function eq(a, b) {
    return new BinaryExpression('=', a, b);
}

// SQL functions
function date(subject) {
    return new FunctionExpression('DATE', subject);
}

function timestamp_millis(subject) {
    return new FunctionExpression('TIMESTAMP_MILLIS', subject);
}

function sum(subject) {
    return new FunctionExpression('SUM', subject);
}

function div(a, b) {
    return new BinaryExpression('/', a, b);
}

function and(a, b) {
    return new BinaryExpression('AND', a, b);
}

function or(a, b) {
    return new BinaryExpression('OR', a, b);
}

function between(subject, lowerBound, upperBound) {
    return new BetweenExpression(subject, lowerBound, upperBound);
}

function timestamp(subject) {
    return new FunctionExpression('TIMESTAMP', subject);
}

function unix_millis(subject) {
    return new FunctionExpression('UNIX_MILLIS', subject);
}

function within(subject, ...args) {
    return new InExpression(subject, ...args);
}

module.exports = {
    table,
    select,
    column,
    // SQL operators
    eq,
    div,
    and,
    or,
    // SQL functions
    date,
    sum,
    timestamp_millis,
    timestamp,
    unix_millis,
}
