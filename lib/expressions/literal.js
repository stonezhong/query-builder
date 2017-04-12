const Expression = require('../expression');

class Literal extends Expression {
    isSimple() {
        return true;
    }
}

module.exports = Literal;
