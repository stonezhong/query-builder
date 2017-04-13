const Expression = require('../expression');

const Duration = {
    YEAR:       Symbol('YEAR'),
    MONTH:      Symbol('MONTH'),
    DAY:        Symbol('DAY'),
    HOUR:       Symbol('HOUR'),
    MINUTE:     Symbol('MINUTE'),
    SECOND:     Symbol('SECOND'),
};

const DurationToStringMap = new Map(
    [
        [Duration.YEAR,   'YEAR'],
        [Duration.MONTH,  'MONTH'],
        [Duration.DAY,    'DAY'],
        [Duration.HOUR,   'HOUR'],
        [Duration.MINUTE, 'MINUTE'],
        [Duration.SECOND, 'SECOND'],
    ]
);

class DurationExpression extends Expression {
    constructor(number, unit) {
        super();
        this._number = number;
        this._unitString = DurationToStringMap.get(unit);

        if (!this._unitString) {
            throw new Error(`unut ${unut} is illegal`);
        }
    }

    toString() {
        return `INTERVAL ${this._number} ${this._unitString}`;
    }
}


DurationExpression.Duration = Duration;

module.exports = DurationExpression;
