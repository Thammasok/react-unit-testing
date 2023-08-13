import { describe, expect } from '@jest/globals'
import * as aService from '../app/services/sum.function'
import { addAndMinus } from '../app/services/math.function'

jest.mock('../app/services/sum.function')

describe('Math service', () => {
  afterEach(() => {
    // restore the spy created with spyOn
    jest.restoreAllMocks()
  })

  it('ทดสอบการ Stub Function โดยใช้ SpyOn Fuction', () => {
    // Arrange
    const numberOne = 1
    const numberTwo = 2
    const expected = 9

    // ใช้ spyOn ในการทำ Mock / Stub ได้
    const spy = jest.spyOn(aService, 'add').mockReturnValue(10)
    const isSum = addAndMinus(numberOne, numberTwo)

    // Assert
    expect(spy).toHaveBeenCalled()
    expect(isSum).toBe(expected)
  })
  
  it('ทดสอบการคำนวน บวกลบ ข้อมูล โดยใช้ Mock Fuction', () => {
    // Arrange
    const numberOne = 1
    const numberTwo = 2
    const expected = 19

    const addMock = aService.add as jest.Mock

    addMock.mockReturnValue(20)

    const total = addAndMinus(numberOne, numberTwo)
    
    expect(addMock).toHaveBeenCalledTimes(1)
    expect(total).toBe(expected)
  })

})
