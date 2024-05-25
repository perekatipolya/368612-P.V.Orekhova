function isLuckyTicket(number) {
    const first = number.slice(0, number.length / 2);
    const second = number.slice(number.length / 2, number.length);

    const sum = (stringNumber) => stringNumber.split('').reduce((acc, cur) => acc+=Number(cur), 0);
    return sum(first) === sum(second)
}
