// function 1

// function power(a, n) {
//     let result = 1;

//     for (let i = 0; i < n; i++) {
//         result *= a;
//     }

//     return result;
// }

// // Test qilish
// let base = 2;  // O'zlashtirilayotgan son
// let exponent = 3;  // Daraja
// let result = power(base, exponent);

// console.log(`${base} ning ${exponent}-darajasi: ${result}`);


// function 2

// function mean(a, b) {
//     // O'rta arifmetigi (mean)
//     let arithmeticMean = (a + b) / 2;

//     // O'rta geometrigi (geometric mean)
//     let geometricMean = Math.sqrt(a * b);

//     return [arithmeticMean, geometricMean];
// }

// // Test qilish
// let result = mean(12, 48);
// console.log(`O'rta arifmetigi: ${result[0]}, O'rta geometrigi: ${result[1]}`);

// function 3

// function sign(n) {
//     if (n > 0) {
//         return 1;
//     } else if (n < 0) {
//         return -1;
//     } else {
//         return 0;
//     }
// }

// // Test qilish
// let result = sign(10);
// console.log(`Natija: ${result}`);


// function 4

// function numberOfRoots(A, B, C) {
//     // Diskriminantni hisoblash
//     let D = B * B - 4 * A * C;

//     if (D > 0) {
//         // D > 0 bo'lsa 2 ta ildiz mavjud
//         return 2;
//     } else if (D === 0) {
//         // D = 0 bo'lsa 1 ta ildiz mavjud
//         return 1;
//     } else {
//         // D < 0 bo'lsa 0 ta ildiz mavjud
//         return 0;
//     }
// }

// // Test qilish
// let result = numberOfRoots(1, -6, 9);
// console.log(`Ildizlar soni: ${result}`);

// function 5

// function areaCircle(R) {
//     // Doiraning yuzini hisoblash formula
//     let S = Math.PI * Math.pow(R, 2);
    
//     return S;
// }

// // Test qilish
// let radius = 5;  // Doira radiusi
// let result = areaCircle(radius);
// console.log(`Doira yuzi: ${result}`);

// function 6

// function sumRange(A, B) {
//     // Agar A > B bo'lsa, 0 qiymat qaytarish
//     if (A > B) {
//         return 0;
//     }

//     let sum = 0;

//     // A dan B gacha bo'lgan sonlar yig'indisi
//     for (let i = A; i <= B; i++) {
//         sum += i;
//     }

//     return sum;
// }

// // Test qilish
// let result = sumRange(8, 10);
// console.log(`Sonlar yig'indisi: ${result}`);



// function 7   

// function calc(A, B, S) {
//     // Arifmetik amalni bajarish
//     switch (S) {
//         case '+':
//             return A + B;
//         case '-':
//             return A - B;
//         case '*':
//             return A * B;
//         case '/':
//             // Bo'lishni tekshirish
//             return B !== 0 ? A / B : 0;
//         default:
//             return 0;
//     }
// }

// // Test qilish
// let result1 = calc(10, 15, '*');
// let result2 = calc(7, 8, '+');

// console.log(`10 * 15 = ${result1}`);
// console.log(`7 + 8 = ${result2}`);

// function 8

// function isEven(K) {
//     // Sonni 2 ga bo'lib qoldiqsiz bo'lishni tekshirish
//     return K % 2 === 0;
// }

// // Test qilish
// let result = isEven(10);
// console.log(result);  // true

//function 9

// function sortABC(a, b, c) {
//     // Sonlarni tartiblash
//     let sortedNumbers = [a, b, c].sort((x, y) => x - y);

//     // Eng kichigi, o'rtachasi va eng kattasi
//     let smallest = sortedNumbers[0];
//     let middle = sortedNumbers[1];
//     let largest = sortedNumbers[2];

//     // Natijalarni konsolga chiqarish
//     console.log(${smallest}, ${middle}, ${largest});
// }

// // Test qilish
// sortABC(10, 5, 8);


// function 10

// function isPowerN(K, N) {
//     // K va N sonlarining 1 dan katta bo'lishini va K sonining N sonining darajasi bo'lishini tekshirish
//     return K > 0 && N > 0 && Math.pow(N, Math.round(Math.log(K) / Math.log(N))) === K;
// }

// // Test qilish
// let result1 = isPowerN(8, 2); // true
// let result2 = isPowerN(27, 3); // true
// let result3 = isPowerN(10, 2); // false

// console.log(result1);
// console.log(result2);
// console.log(result3);

// function 11

// function isPrime(N) {
//     if (N <= 1) {
//         return false; // 1 dan kichik sonlar tub emas
//     }

//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false; // N soni bo'linib qolmasa, false qaytarish
//         }
//     }

//     return true; // Agar yuqoridagi shartlar barchasi bajarilsa, true qaytarish
// }

// // Test qilish
// let result = isPrime(7);
// console.log(result); // true

// function 12
// function isPrime(N) {
//     if (N <= 1) {
//         return false;
//     }

//     for (let i = 2; i <= Math.sqrt(N); i++) {
//         if (N % i === 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function numberOfPrime(limit) {
//     let count = 0;

//     for (let i = 2; i <= limit; i++) {
//         if (isPrime(i)) {
//             count++;
//         }
//     }

//     return count;
// }

// // Test qilish
// let result = numberOfPrime(10);
// console.log(result); // 4

// function 13
// function findNthDigit(K, N) {
//     if (K <= 0 || N <= 0) {
//         console.log("N va K sonlari musbat butun sonlari bo'lishi kerak.");
//         return;
//     }

//     let count = digitCount(K);
//     if (count < N) {
//         console.log(`K soni raqamlari N dan kichik. -1 qaytarilmoqda.`);
//         return -1;
//     }

//     let digit = Math.floor((K % Math.pow(10, N)) / Math.pow(10, N - 1));
//     return digit;
// }

// function digitCount(number) {
//     return String(number).length;
// }

// // Test
// let K = parseInt(prompt("K sonini kiriting:"));
// let N = parseInt(prompt("N raqamini kiriting:"));
// let result = findNthDigit(K, N);

// if (result !== undefined) {
//     console.log(`${K} sonining ${N}-raqami: ${result}`);
// }

// function 14
// function inverseNumber(N) {
//     if (N < 0) {
//         console.log("N soni musbat bo'lishi kerak.");
//         return;
//     }

//     let reversedNumber = parseInt(String(N).split('').reverse().join(''));
//     return reversedNumber;
// }

// // Test
// let N = parseInt(prompt("Sonni kiriting:"));
// let result = inverseNumber(N);

// if (result !== undefined) {
//     console.log(`${N} sonining teskari tartibdagi soni: ${result}`);
// }


// function 15
// function isPalindrom(N) {
//     if (N <= 0) {
//         console.log("N soni musbat butun son bo'lishi kerak.");
//         return false;
//     }

//     // inverseNumber funksiyasidan foydalanamiz
//     let reversedN = inverseNumber(N);

//     // N va teskari tartibdagi N ni solishtiramiz
//     return N === reversedN;
// }

// // inverseNumber funksiyasini oling
// function inverseNumber(N) {
//     return parseInt(String(N).split('').reverse().join(''));
// }

// // Test
// let N = parseInt(prompt("Sonni kiriting:"));
// let result = isPalindrom(N);

// console.log(`${N} soni palindrommi? ${result}`);

// function 16

// function factorial(N) {
//     if (N < 0) {
//         console.log("N soni manfiy bo'lishi mumkin emas. 1 qaytarilmoqda.");
//         return 1;
//     }

//     let result = 1;
//     for (let i = 1; i <= N; i++) {
//         result *= i;
//     }

//     return result;
// }

// // Test
// let N = parseInt(prompt("N sonini kiriting:"));
// let result = factorial(N);

// console.log(`${N} sonlar ko'paytmasi: ${result}`);

// function 17
// function getSum3(N) {
//     let sum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 3 === 0) {
//             sum += i;
//         }
//     }

//     return sum;
// }

// // Test
// let N = parseInt(prompt("N sonini kiriting:"));
// let result = getSum3(N);

// console.log(`1 dan ${N} gacha 3 ga bo'linadigan sonlar yig'indisi: ${result}`);


// function 18
// function sumOddEven(N) {
//     let sumOdd = 0;
//     let sumEven = 0;

//     for (let i = 1; i <= N; i++) {
//         if (i % 2 === 0) {
//             // Juft sonlar
//             sumEven += i;
//         } else {
//             // Toq sonlar
//             sumOdd += i;
//         }
//     }

//     console.log(`Toqlar sonlar yig'indisi: ${sumOdd}`);
//     console.log(`Juft sonlar yig'indisi: ${sumEven}`);
// }

// // Test
// let N = parseInt(prompt("N sonini kiriting:"));
// sumOddEven(N);

// function 19
// function invertTime(H, M, S) {
//     if (H < 0 || M < 0 || S < 0) {
//         console.log("Soat, minut va sekundlar musbat butun sonlari bo'lishi kerak.");
//         return;
//     }

//     // Berilgan vaqtni sekundga o'tkazish
//     let totalSeconds = H * 3600 + M * 60 + S;

//     console.log(`Berilgan vaqt: ${H}:${M}:${S}`);
//     console.log(`Vaqt sekundga o'tkazilganda: ${totalSeconds} sekund`);
// }

// // Test
// let H = parseInt(prompt("Soatni kiriting:"));
// let M = parseInt(prompt("Minutni kiriting:"));
// let S = parseInt(prompt("Sekundni kiriting:"));

// invertTime(H, M, S);

// function 20
// function decTime(H, M, S) {
//     if (H < 0 || M < 0 || S < 0) {
//         console.log("Soat, minut va sekundlar musbat butun sonlari bo'lishi kerak.");
//         return;
//     }

//     // Vaqt ni sekundga o'tkazamiz
//     let totalSeconds = H * 3600 + M * 60 + S;

//     // Agar totalSeconds 0 bo'lmasa, 1 sekundani ayirib qo'shamiz
//     if (totalSeconds > 0) {
//         totalSeconds -= 1;
//     }

//     // Yangi vaqt ko'rinishiga o'tkazamiz
//     let newH = Math.floor(totalSeconds / 3600);
//     let newM = Math.floor((totalSeconds % 3600) / 60);
//     let newS = totalSeconds % 60;

//     console.log(`Berilgan vaqt: ${H}:${M}:${S}`);
//     console.log(`Vaqt 1 sekund oldingi: ${newH}:${newM}:${newS}`);
// }

// // Test
// let H = parseInt(prompt("Soatni kiriting:"));
// let M = parseInt(prompt("Minutni kiriting:"));
// let S = parseInt(prompt("Sekundni kiriting:"));

// decTime(H, M, S);

// function 21

// function isLeapYear(Y) {
//     if ((Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0)) {
//         return true; // Kabisa yili
//     } else {
//         return false; // Kabisa yili emas
//     }
// }

// // Test
// let Y = parseInt(prompt("Yilni kiriting:"));
// let result = isLeapYear(Y);

// console.log(`${Y} yili kabisa yilimi? ${result}`);

// function 22
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     if (M < 1 || M > 12) {
//         console.log("Oy raqami 1 dan 12 gacha bo'lishi kerak.");
//         return;
//     }

//     // Oyning kunlari soni
//     const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     // Kabisa yili bo'lsa va oy fevral bo'lsa, kunlarni 29 qilamiz
//     if (M === 2 && isLeapYear(Y)) {
//         return 29;
//     }

//     return daysInMonth[M];
// }

// // Test
// let Y = parseInt(prompt("Yilni kiriting:"));
// let M = parseInt(prompt("Oy raqamini kiriting:"));

// let result = monthDays(M, Y);

// if (result !== undefined) {
//     console.log(`${Y} yilining ${M}-oyida kunlar soni: ${result}`);
// }

// function 23
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     if (M < 1 || M > 12) {
//         console.log("Oy raqami 1 dan 12 gacha bo'lishi kerak.");
//         return;
//     }

//     const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     if (M === 2 && isLeapYear(Y)) {
//         return 29;
//     }

//     return daysInMonth[M];
// }

// function prevDate(D, M, Y) {
//     if (D < 1 || M < 1 || M > 12 || Y < 1) {
//         console.log("Kun, oy va yil musbat butun sonlar bo'lishi kerak.");
//         return;
//     }

//     // Kunlarni sanash uchun massiv
//     const daysInMonth = monthDays(M, Y);

//     if (D > 1) {
//         // Agar kiritilgan kun birinchi kun bo'lsa, oldingi oyning oxirgi kunini olib qo'yamiz
//         return [D - 1, M, Y];
//     } else {
//         // Agar kun birinchi kun bo'lmasa, oldingi oyni olib qo'yamiz
//         let prevMonth = M - 1;
//         let prevYear = Y;

//         if (prevMonth === 0) {
//             // Agar oy 1 dan kichik bo'lsa, oldingi oyning son kunlarini olishimiz kerak
//             prevMonth = 12;
//             prevYear -= 1;
//         }

//         let prevMonthDays = monthDays(prevMonth, prevYear);

//         return [prevMonthDays, prevMonth, prevYear];
//     }
// }

// // Test
// let D = parseInt(prompt("Kunni kiriting:"));
// let M = parseInt(prompt("Oy raqamini kiriting:"));
// let Y = parseInt(prompt("Yilni kiriting:"));

// let result = prevDate(D, M, Y);

// if (result !== undefined) {
//     console.log(`Berilgan sanadan oldingi sana: ${result[0]}-${result[1]}-${result[2]}`);
// }


// function 24
// function isLeapYear(Y) {
//     return (Y % 4 === 0 && Y % 100 !== 0) || (Y % 400 === 0);
// }

// function monthDays(M, Y) {
//     if (M < 1 || M > 12) {
//         console.log("Oy raqami 1 dan 12 gacha bo'lishi kerak.");
//         return;
//     }

//     const daysInMonth = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//     if (M === 2 && isLeapYear(Y)) {
//         return 29;
//     }

//     return daysInMonth[M];
// }

// function nextDate(D, M, Y) {
//     if (D < 1 || M < 1 || M > 12 || Y < 1) {
//         console.log("Kun, oy va yil musbat butun sonlar bo'lishi kerak.");
//         return;
//     }

//     // Kunlarni sanash uchun massiv
//     const daysInMonth = monthDays(M, Y);

//     if (D < daysInMonth) {
//         // Agar kiritilgan kun oyni tugatmagan bo'lsa, keyingi kunni olib qo'yamiz
//         return [D + 1, M, Y];
//     } else {
//         // Agar kun oyni tugatsa, keyingi oyni olib qo'yamiz
//         let nextMonth = M + 1;
//         let nextYear = Y;

//         if (nextMonth > 12) {
//             // Agar oy 12 dan katta bo'lsa, keyingi yilning 1-oyiga o'tkazamiz
//             nextMonth = 1;
//             nextYear += 1;
//         }

//         return [1, nextMonth, nextYear];
//     }
// }

// // Test
// let D = parseInt(prompt("Kunni kiriting:"));
// let M = parseInt(prompt("Oy raqamini kiriting:"));
// let Y = parseInt(prompt("Yilni kiriting:"));

// let result = nextDate(D, M, Y);

// if (result !== undefined) {
//     console.log(`Berilgan sanadan keyingi sana: ${result[0]}-${result[1]}-${result[2]}`);
// }


// function 25
// function getDividersNumberAndSum(N) {
//     if (N <= 0) {
//         console.log("N soni musbat butun soni bo'lishi kerak.");
//         return;
//     }

//     let dividers = [];
//     let sum = 0;

//     for (let i = 1; i <= N; i++) {
//         if (N % i === 0) {
//             dividers.push(i);
//             sum += i;
//         }
//     }

//     console.log(`${N} sonining bo'luvchilari: ${dividers.join(', ')}`);
//     console.log(`${N} sonining bo'luvchilari yig'indisi: ${sum}`);
// }

// // Test
// let N = parseInt(prompt("N sonini kiriting:"));
// getDividersNumberAndSum(N);


