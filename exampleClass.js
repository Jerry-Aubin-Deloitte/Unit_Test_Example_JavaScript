/**
 * Adds together two integers
 * @param {number} int1 The first integer
 * @param {number} int2 The second integer
 * @returns {number} The sum
 */
const addIntegers = function(int1, int2) {
    return int1 + int2;
}

/**
 * A qualitative assessment of a quantitative temperature measurement
 * @param {number} degreesF The temperature in fahrenheit
 * @returns {string} What the temperature is like
 */
const getTemperatureLevel = function(degreesF) {
    if(degreesF <= 60)
        return 'Cold';
    else if(degreesF >= 85)
        return 'Hot';
    else
        return 'Pleasant';
}

/**
 * Determines whether or not the student passes the class
 * @param {number} grade The student's grade
 * @param {number} numAbsences The number of absences the student had
 * @returns {boolean} Whether or not they passed
 */
const didStudentPassClass = function(grade, numAbsences) {
    return grade >= 60 && numAbsences < 3;
}

/**
 * Postpends "[out of stock]" when item is out of stock
 * @param {string} name The item name
 * @param {number} quantity The quantity in stock
 * @returns {string} The processed item name
 */
const processItemName = function(name, quantity) {
    if(quantity == 0)
        name = name + ' [out of stock]';
    return name;
}

module.exports = {
    addIntegers,
    getTemperatureLevel,
    didStudentPassClass,
    processItemName
};