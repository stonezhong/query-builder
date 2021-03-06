const _ = require('lodash');
const Types = require('./lib/types');
const QueryBuilder = require('./lib/query-builder');
const ColumnDef = require('./lib/column-def');
const ColumnExpression = require('./lib/expressions/column-expression');
const Table = require('./lib/table');
const Expression = require('./lib/expression');
const { getExpression } = require('./lib/utils');
const FunctionExpression = require('./lib/expressions/function-expression');
const DurationExpression = require('./lib/expressions/duration-expression');
const UnaryExpression = require('./lib/expressions/unary-expression');
const BinaryExpression = require('./lib/expressions/binary-expression');
const BetweenExpression = require('./lib/expressions/between-expression');
const InExpression = require('./lib/expressions/in-expression');
const InQueryExpression = require('./lib/expressions/in-query-expression');
const VariableArgOpExpression = require('./lib/expressions/variable-arg-op-expression');
const StringLiteral = require('./lib/expressions/string-literal');
const NumberLiteral = require('./lib/expressions/number-literal');
const BooleanLiteral = require('./lib/expressions/boolean-literal');
const CastExpression = require('./lib/expressions/cast-expression');
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

function like(a, b) {
    return new BinaryExpression('LIKE', a, b);
}

// SQL functions
function count(subject) {
    return new FunctionExpression('COUNT', subject);
}

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

function g(a, b) {
    return new BinaryExpression('>', a, b);
}

function ge(a, b) {
    return new BinaryExpression('>=', a, b);
}

function l(a, b) {
    return new BinaryExpression('<', a, b);
}

function le(a, b) {
    return new BinaryExpression('<=', a, b);
}

function and(...operands) {
    return new VariableArgOpExpression('AND', ...operands);
}

function or(...operands) {
    return new VariableArgOpExpression('OR', ...operands);
}

function between(subject, lowerBound, upperBound) {
    return new BetweenExpression(subject, lowerBound, upperBound);
}

function timestamp(subject) {
    return new FunctionExpression('TIMESTAMP', subject);
}

function timestamp_add(subject, duration) {
    return new FunctionExpression('TIMESTAMP_ADD', subject, duration);
}

function timestamp_sub(subject, duration) {
    return new FunctionExpression('TIMESTAMP_SUB', subject, duration);
}

function duration(number, unit) {
    return new DurationExpression(number, unit);
}

function unix_millis(subject) {
    return new FunctionExpression('UNIX_MILLIS', subject);
}

function within(subject, ...args) {
    if ((args.length === 1) && args[0].query) {
        return new InQueryExpression(subject, ...args);
    }
    return new InExpression(subject, ...args);
}

function cast(subject, newType) {
    return new CastExpression(subject, newType);
}

function not(subject) {
    return new UnaryExpression('NOT', subject);
}

function distinct(subject) {
    return new UnaryExpression('DISTINCT', subject);
}

function max(expression) {
    return new FunctionExpression('MAX', expression);
}

function min(expression) {
    return new FunctionExpression('MIN', expression);
}

function iff(condition, trueReturn, falseReturn) {
    return new FunctionExpression('IF', condition, trueReturn, falseReturn);
}

// TODO: merge with getExpression, do not copy & paste
function literal(subject) {
    if (_.isNumber(subject)) {
        return new NumberLiteral(subject);
    }
    if (_.isBoolean(subject)) {
        return new BooleanLiteral(subject);
    }
    if (_.isString(subject)) {
        return new StringLiteral(subject);
    }
    throw "literal: unrecognized subject";
}

module.exports = {
    literal,
    table,
    select,
    column,
    // SQL operators
    eq,
    like,
    div,
    and,
    or,
    cast,
    not,
    distinct,
    max,
    min,
    between,
    within,
    g,
    ge,
    l,
    le,
    iff,
    duration,
    // SQL functions
    count,
    date,
    sum,
    timestamp_millis,
    timestamp,
    timestamp_add,
    timestamp_sub,
    unix_millis,
    Duration: DurationExpression.Duration,
    Types,
};

