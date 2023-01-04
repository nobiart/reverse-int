module.exports = function reverse (n) {
    const stringFromNumber = n.toString();
    let result = '';

    for (let i = stringFromNumber.length - 1; i >= 0 ; i--) {
        if (!isNaN(+stringFromNumber[i])) {
            result += stringFromNumber[i];
        }
    }

    return Number(result);
}
