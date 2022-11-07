const getPercents = (number, percent) => {
    if (typeof number != 'number' || typeof percent != 'number') {
        return 'Percent or num must be a number';
    }
    if (number <= 0 || percent <= 0) {
        return 'Percent or num must be a positive number';
    }
    return number * (percent / 100);
}

module.exports = getPercents;