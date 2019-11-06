const assert = require('assert');
const exampleClass = require('./exampleClass');

/**
 * Tests that 5 and 2 make 7
 */
it('addIntegers_5_2_returns_7', () => {
    // 1) Arrange
    const value1 = 5;
    const value2 = 2;
    const expected = 7;

    // 2) Act
    const actual = exampleClass.addIntegers(value1, value2);

    // 3) Assert
    assert.equal(actual, expected);
});

/**
 * Tests the "Hot" condition of getTemperatureLevel
 */
it('getTemperatureLevel_100_returns_hot', () => {
    // 1) Arrange
    const temperature = 100;
    const expected = 'Hot';

    // 2) Act
    const actual = exampleClass.getTemperatureLevel(temperature);

    // 3) Assert
    assert.equal(actual, expected);
});

/**
 * Tests the "Pleasant" condition of getTemperatureLevel
 */
it('getTemperatureLevel_72_returns_pleasant', () => {
    // 1) Arrange
    const temperature = 72;
    const expected = 'Pleasant';

    // 2) Act
    const actual = exampleClass.getTemperatureLevel(temperature);

    // 3) Assert
    assert.equal(actual, expected);
});

/**
 * Tests if a student passed if they had a grade of 80 ad 2 absences
 */
it('didStudentPassClass_80_grade_2_absences_returns_true', () => {
    // 1) Arrange
    const grade = 80;
    const numAbsences = 2;

    // 2) Act
    const actual = exampleClass.didStudentPassClass(grade, numAbsences);

    // 3) Assert
    assert.equal(actual, true);
});

/**
 * Makes sure the function doesn't postpend "[out of stock]" when not out of stock
 */
it('processItemName_6_quantity_does_not_return_outOfStock', () => {
    // 1) Arrange
    const itemName = 'Widget';
    const quantity = 6;

    // 2) Act
    const actual = exampleClass.processItemName(itemName, quantity);

    // 3) Assert
    assert.equal(actual, itemName);
});

/**
 * Makes sure function postpends "[out of stock]" when out of stock
 */
it('processItemName_0_quantity_returns_outOfStock', () => {
    // 1) Arrange
    const itemName = 'Widget';
    const quantity = 0;
    const expected = itemName + ' [out of stock]';

    // 2) Act
    const actual = exampleClass.processItemName(itemName, quantity);

    // 3) Assert
    assert.equal(actual, expected)
});