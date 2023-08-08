# Unit Testing

Code พื้นฐาน Unit Testing ใช้สำหรับสอนทีม

## เริ่มต้นทดสอบ

หลังจาก install แล้ว เราสามารถ Run Test โดยใช้คำสั่ง

```bash
npm run test
```

## โจทย์

1. Calculate
   1.1 คำนวนหาจำนวนรวมของ 2 จำนวน
   1.2 Two Sum หาค่ารวม 2ค่า ใน Array ที่ตรงกับ Target

   ```text
    Code File: app/services/calculate.ts

    Test Files: app/__test__/calculate.ts
   ```

2. Loyalty Points
  ![alt text for screen readers](/public/loyalty-point.png "Text to show on mouseover")

   จะทำ 2 แบบ คือ
   2.1. Loyalty Points แบบ Simple
   2.2. Loyalty Points แบบ Dynamic Point Rate (ใช้ Stub/Mock)
  
   ```text
    Code File: app/services/loyalty.ts

    Test Files: app/__test__/loyalty.ts
   ```
