import { beforeAll, describe, expect, test } from '@jest/globals'
import { CalculateService } from '../app/services/calculate'

describe('Calculate service', () => {
  let calculateService: CalculateService

  beforeAll(() => {
    calculateService = new CalculateService()
  })

  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks()
  })

  test('ทดสอบการบวกเลข 2 จำนวน', () => {
    // Arrange
    const numberOne = 1
    const numberTwo = 2
    const expected = 3

    // Act
    const result = calculateService.sum(numberOne, numberTwo);

    // Assert
    expect(result).toEqual(expected)
  })

  it('ทดสอบการ Return 2 จำนวน', () => {
    // Arrange
    const expected = {
      msg: 'ok'
    }


    
    // Act
    const result = calculateService.twoRetrun()


    // Assert
    expect(result).toMatchObject(expected)
  })

  it('ทดสอบการคำนวน บวกลบ ข้อมูล โดยใช้ Mock Class', () => {
    // Arrange
    const numberOne = 1
    const numberTwo = 2
    const expected = 9
    
    const mockSumData = 10
    const mockSum = jest.fn()

    mockSum.mockReturnValue(mockSumData)

    CalculateService.prototype.sum = mockSum

    const result = calculateService.sumAndMinus(numberOne, numberTwo)
    
    expect(result).toEqual(expected)
  })

  it('ทดสอบการ Stub Function โดยใช้ SpyOn', () => {
    // Arrange
    const numberOne = 1
    const numberTwo = 2
    const expected = 9

    const calculateServiceSpy = new CalculateService()

    // ใช้ spyOn ในการทำ Mock / Stub ได้
    const spy = jest.spyOn(calculateServiceSpy, 'sum').mockReturnValue(10)
    const isSum = calculateServiceSpy.sumAndMinus(numberOne, numberTwo)

    // Assert
    expect(spy).toHaveBeenCalled()
    expect(isSum).toBe(expected)
  })

})
