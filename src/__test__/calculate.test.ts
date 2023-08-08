import {beforeAll, describe, expect, test} from '@jest/globals';
import { CalculateService } from '../app/services/calculate';

describe('Calculate service', () => {
  let calculateService: CalculateService;

  beforeAll(() => {
    calculateService = new CalculateService();
  });

  test('ทดสอบการบวกเลข 2 จำนวน', () => {
    // Arrange
    const numberOne = 1;
    const numberTwo = 2;
    const expected = 3;

    // Act
    const result = calculateService.sum(numberOne, numberTwo);

    // Assert
    expect(result).toEqual(expected);
  });

  it('ทดสอบการโจทย์ two sum แล้วเจอค่า', () => {
    // Arrange
    const number = [2, 7, 11, 15];
    const target = 9;
    const expected: Array<number> = [0, 1];

    // Act
    const result = calculateService.twoSum(number, target);

    // Assert
    // expect(result).toEqual(expect.arrayContaining(expected));
    expect(result).toEqual(expected);
  });

  it('ทดสอบการโจทย์ two sum แล้ว ไม่เจอค่า', () => {
    // Arrange
    const number = [3, 7, 11, 5];
    const target = 9;
    const expected: Array<number> = [];

    // Act
    const result = calculateService.twoSum(number, target);

    // Assert
    expect(result).toEqual(expected);
  });
});