# 🇮🇷 iranian-bank-validator

![npm version](https://img.shields.io/npm/v/iranian-bank-validator.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue.svg)
![License](https://img.shields.io/npm/l/iranian-bank-validator)
![Tests](https://img.shields.io/badge/tests-100%25-brightgreen)

**A simple and reliable Node.js/TypeScript library for validating Iranian national codes, bank card numbers, and IBAN (Sheba) — with zero dependencies.**

---

## 🇮🇷 درباره این پکیج

📦‌ **iranian-validator** یک کتابخانه سبک، تست‌شده و بدون وابستگی برای اعتبارسنجی اطلاعات پرکاربرد در پروژه‌های ایرانی است. با استفاده از این پکیج می‌توانید به‌سادگی صحت موارد زیر را بررسی کنید:

- ✅ کد ملی ایران (Iranian National Code)
- 💳 شماره کارت بانکی ایران (Iranian Bank Card Number)
- 🏦 شماره شبا (Sheba / IBAN)

---

## ✨ ویژگی‌ها

- نوشته‌شده با **TypeScript**
- بدون هیچ‌گونه وابستگی (Zero Dependency)
- تست‌شده با پوشش کامل (100% Test Coverage)
- قابل استفاده در **Node.js** و محیط‌های **فرانت‌اند**

---

## 📦 نصب

```bash
npm install iranian-validator
```

یا با yarn:

```bash
yarn add iranian-validator
```

---

## 🚀 نحوه استفاده

```ts
import {
  isValidIranianNationalCode,
  isValidCardNumber,
  isValidSheba,
} from "iranian-validator";

isValidIranianNationalCode("0010853659"); // true
isValidCardNumber("6037991234567890"); // true
isValidSheba("IR820540102680020817909002"); // true
```

---

## 📌 موارد استفاده

- فرم ثبت‌نام کاربران ایرانی
- احراز هویت کاربران
- بررسی اطلاعات بانکی در فین‌تک‌ها
- اعتبارسنجی ورودی فرم‌ها در پنل‌های ادمین

---

## 🧪 تست

```bash
npm test
```

---

## 🤝 مشارکت

از هر نوع مشارکت استقبال می‌کنیم! اگر پیشنهادی برای بهبود دارید، یا باگ یا تستی پیدا کردید:

1. Fork کنید.
2. تغییراتتان را اعمال کنید.
3. Pull Request ارسال کنید.

یا Issue جدیدی باز کنید.

---

## 📄 مجوز

This project is licensed under the terms of the MIT license.

---

## 🙌 حمایت

اگر این پروژه برات مفید بود، با ⭐ دادن به ریپو ازش حمایت کن!
