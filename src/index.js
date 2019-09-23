module.exports = function check(str, bracketsConfig) {
    if (str.length % 2 == 1) {
        return false;
    }

    let brackets = [];
    for (let i = 0; i < bracketsConfig.length; i++) {
        brackets.push(bracketsConfig[i][0] + bracketsConfig[i][1]);
    }

    let length = str.length;
    for (let i = 0; i < length / 2; i++) {
        for (let j = 0; j < brackets.length; j++) {
            str = str.replace(brackets[j], "");
        }
        if (str.length == 0) {
            return true;
        }
    }

    return false;
}
