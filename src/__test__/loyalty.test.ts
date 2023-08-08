import { calculatePointByPrice, calculatePointRateByPrice } from '../app/services/loyalty'

describe('1: Loyalty service: ทดสอบฟังก์ชันคำนวนแต้มจากราคาสินค้า Point Rate แบบ Fix', () => {
  it('1. ราคาสินค้าที่ซื้อเท่ากับ 50 บาท ได้แต้ม 0 แต้ม', () => {
    // Arrange
    const price = 50.0
    const pointExpected = 0

    // Act
    const point = calculatePointByPrice(price)

    // Assert
    expect(point).toBe(pointExpected)
  })

  it('2. ราคาสินค้าที่ซื้อเท่ากับ 100 บาท ได้แต้ม 1 แต้ม', () => {
    // Arrange
    const price = 100.0
    const pointExpected = 1

    // Act
    const point = calculatePointByPrice(price)

    // Assert
    expect(point).toBe(pointExpected)
  })

  it('3. ราคาสินค้าที่ซื้อเท่ากับ 999 บาท ได้แต้ม 9 แต้ม', () => {
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
  it('1. ราคาสินค้าที่ซื้อเท่ากับ 50 บาท ได้แต้ม 0 แต้ม', () => {
    // Arrange
    const price = 50.0
    const pointExpected = 0

    // Act
    const point = calculatePointRateByPrice(price)

    // Assert
    expect(point).toBe(pointExpected)
  })
})
