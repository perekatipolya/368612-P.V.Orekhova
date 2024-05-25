function isArmstrongNumber(number) {
    const stringNumber = String(number);
    const length = stringNumber.length;
    const sum = stringNumber.split('').reduce((acc, cur) => acc += Math.pow(cur, length), 0)
    return sum === number
}