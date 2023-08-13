import {
  calculatePointByPrice,
  calculatePointRateByPrice
} from '../app/services/lotalty'
import * as pointService from '../app/services/lotalty/point.func'

jest.mock('../app/services/lotalty/point.func')

describe('1: Loyalty service: ทดสอบฟังก์ชันคำนวนแต้มจากราคาสินค้า Point Rate แบบ Fix', () => {
  it('1.1. ราคาสินค้าที่ซื้อเท่ากับ 50 บาท ได้แต้ม 0 แต้ม', () => {
    // Arrange
    const price = 50.0
    const pointExpected = 0

    // Act
    const point = calculatePointByPrice(price)

    // Assert
    expect(point).toBe(pointExpected)
  })

  it('1.2. ราคาสินค้าที่ซื้อเท่ากับ 100 บาท ได้แต้ม 1 แต้ม', () => {
    // Arrange
    const price = 100.0
    const pointExpected = 1

    // Act
    const point = calculatePointByPrice(price)

    // Assert
    expect(point).toBe(pointExpected)
  })

  it('1.3. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท ได้แต้ม 9 แต้ม', () => {
    // Arrange
    const price = 999.0
    const pointExpected = 9

    // Act
    const point = calculatePointByPrice(price)

    // Assert
    expect(point).toBe(pointExpected)
  })
})

describe('2: Loyalty service: ทดสอบฟังก์ชันคำนวนแต้มจากราคาสินค้า Point Rate แบบ Dynamic', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('2.1. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท (50:1 แต้ม) ได้แต้ม 19 แต้ม Mocking', () => {
    // Arrange
    const price = 999.0
    const pointRate = 50
    const pointExpected = 19

    // Act
    // Mock
    const pointRateConfigMock = pointService.pointRateConfig as jest.Mock
    pointRateConfigMock.mockReturnValue(pointRate)

    // Call
    const point = calculatePointRateByPrice(price)

    // Assert
    expect(pointRateConfigMock).toHaveBeenCalledTimes(1)
    expect(point).toBe(pointExpected)
  })

  it('2.2. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท (10:1 แต้ม) ได้แต้ม 99 แต้ม SpyOn', () => {
    // Arrange
    const price = 999.0
    const pointRate = 10
    const pointExpected = 99

    // Act
    // Spy
    const pointRateConfigSpy = jest.spyOn(pointService, 'pointRateConfig')
    pointRateConfigSpy.mockReturnValue(pointRate)

    // Call
    const point = calculatePointRateByPrice(price)

    // Assert
    expect(pointRateConfigSpy).toHaveBeenCalled()
    expect(point).toBe(pointExpected)
  })
})
