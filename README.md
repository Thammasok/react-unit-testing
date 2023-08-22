# Unit Testing for React

Code พื้นฐาน Unit Testing ใช้สำหรับสอนทีม

## Table Content

- [Unit Testing for React](#unit-testing-for-react)
  - [Table Content](#table-content)
  - [เริ่มต้นทดสอบ](#เริ่มต้นทดสอบ)
  - [โจทย์](#โจทย์)
    - [Calculate](#calculate)
    - [Loyalty Points](#loyalty-points)

---

## เริ่มต้นทดสอบ

หลังจาก install แล้ว เราสามารถ Run Test โดยใช้คำสั่ง

```bash
npm run test
```

## โจทย์

### Calculate

โจทย์ตัวอย่างสำหรับ Simple Unit Testing

1. คำนวนหาจำนวนรวมของ 2 จำนวน
2. Two Sum หาค่ารวม 2ค่า ใน Array ที่ตรงกับ Target

```text
 Code File: app/services/calculate.ts

 Test Files: app/__test__/calculate.ts
```

---

### Loyalty Points

โจทย์ตัวอย่างสำหรับ Simple Unit Testing โดยเริ่มต้นจากการออกแบบ Test โดยใช้ Test design techniques (BVA)

![alt text for screen readers](/public/loyalty-point.png "Text to show on mouseover")

จะทำ 2 แบบ คือ

1. Loyalty Points แบบ Simple
2. Loyalty Points แบบ Dynamic Point Rate (ใช้ Stub/Mock)

  ```text
  Code File: app/services/loyalty.ts

  Test Files: app/__test__/loyalty.ts
  ```
