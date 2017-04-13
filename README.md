# Make it easy to write Google BigQuery query

## Expressions & Functions
```
function            example                            output
--------------------------------------------------------------------------------
literal             literal('abc')                     'abc'
column              column('time')                     time
eq                  eq(expr1, expr2)                   expr1 = expr2
like                like(expr1, expr2)                 expr1 LIKE expr2
div                 div(expr1, expr2)                  expr1 / expr2
and                 and(expr1, expr2, expr3)           expr1 AND expr2 AND expr3
or                  or(expr1, expr2, expr3)            expr1 OR expr2 OR expr3
not                 not(expr)                          NOT expr
iff                 iff(condition, expr1, expr2)       IF(condition, expr1, expr2)
between             between(expr1, expr2, expr3)       expr1 BETWEEN expr2 AND expr3
within              within(subject, expr1, expr2)      subject IN (expr1, expr2)
g                   g(expr1, expr2)                    expr1 > expr2
ge                  ge(expr1, expr2)                   expr1 >= expr2
l                   l(expr1, expr2)                    expr1 < expr2
le                  le(expr1, expr2)                   expr1 <= expr2
count               count(expr)                        COUNT(expr)
date                date(expr)                         DATE(expr)
sum                 sum(expr)                          SUM(expr)
timestamp_millis    timestamp_millis(expr)             TIMESTAMP_MILLIS(expr)
timestamp           timestamp(expr)                    TIMESTAMP(expr)
unix_millis         unix_millis(expr)                  UNIX_MILLIS(expr)
```
