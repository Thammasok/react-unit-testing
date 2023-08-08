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

  it('ทดสอบการ Return 2 จำนวน', () => {
    // Arrange
    const expected = {
      msg: 'ok',
    };

    // Act
    const result = calculateService.twoRetrun();

    // Assert
    expect(result).toMatchObject(expected);
  });
});