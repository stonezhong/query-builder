# Make it easy to write Google BigQuery query

## Expressions & Functions
```
function            example                            output
--------------------------------------------------------------------------------
literal             literal('abc')                     'abc'

table               table('a.seo_visits')              a.seo_visits
column              column('time')                     time
select              select(column('foo'))              select foo

eq                  eq(expr1, expr2)                   expr1 = expr2
g                   g(expr1, expr2)                    expr1 > expr2
ge                  ge(expr1, expr2)                   expr1 >= expr2
l                   l(expr1, expr2)                    expr1 < expr2
le                  le(expr1, expr2)                   expr1 <= expr2
between             between(expr1, expr2, expr3)       expr1 BETWEEN expr2 AND expr3

and                 and(expr1, expr2, expr3)           expr1 AND expr2 AND expr3
or                  or(expr1, expr2, expr3)            expr1 OR expr2 OR expr3
not                 not(expr)                          NOT expr

div                 div(expr1, expr2)                  expr1 / expr2
count               count(expr)                        COUNT(expr)
sum                 sum(expr)                          SUM(expr)
like                like(expr1, expr2)                 expr1 LIKE expr2
max                 max(expr)                          MAX(expr)
min                 min(expr)                          MIN(expr)
distinct            distinct(expr)                     DISTINCT expr
within              within(subject, expr1, expr2)      subject IN (expr1, expr2)
iff                 iff(condition, expr1, expr2)       IF(condition, expr1, expr2)
date                date(expr)                         DATE(expr)
timestamp_millis    timestamp_millis(expr)             TIMESTAMP_MILLIS(expr)
timestamp           timestamp(expr)                    TIMESTAMP(expr)
timestamp_add       timestamp_add(expr, duration)      TIMESTAMP_ADD(expr, duration)
timestamp_sub       timestamp_sub(expr, duration)      TIMESTAMP_SUB(expr, duration)
unix_millis         unix_millis(expr)                  UNIX_MILLIS(expr)

duration            duration(number, unit)
                    duration(1, Duration.YEAR)         INTERVAL 1 YEAR
                    duration(10, Duration.MINUTE)      INTERVAL 10 MINUTE
cast                cast(expr, type)                   cast(expr as type)
                    cast(foo, Types.INT64)             cast(foo as INT64)
```

## Constants
```
Duration
    Duration.YEAR
    Duration.MONTH
    Duration.DAY
    Duration.HOUR
    Duration.MINUTE
    Duration.SECOND

Types
    Types.INT64
    Typpes.STRING
```
