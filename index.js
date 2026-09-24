// ============================================================= //
// ============================================================= //
// 30.Framelar sonini hisoblaydigan funksiya yarating. Frame bu
// 1 sekundda necha marta ko’rinishlar soni aylanishi. Funksiya
// minutlar va 1 sekundda nechta framelar soni aylanishini ar-
// gument sifatida qabul qiladi. Funksiya jami framelar sonini
// qaytarsin.
// ============================================================= //
// function frameSoni(durationMinute, frames) {
//     return (durationMinute * 60) * frames;
// }
// console.log(frameSoni(10,30));
// ============================================================= //
// ============================================================= //
// 31.Oddiy matematik amallar ketma-ketligi string ko’rinishida
// funksiyaga argument sifatida beriladi. Ushbu funksiya matem-
// atik ifodani bajarib natijani qaytarsin.
// ============================================================= //
// function calc(str) {
//     return eval(str);
// };
// console.log(calc("22+22"));
// ============================================================= //
// ============================================================= //
// 32.Shunday funksiya yasangki, unda 2ta butun son argument
// qilib beriladi. Agar ushbu sonlardan birontasi 10ga teng bo’lsa
// yoki ularning yig’indisi 10ga teng bo’lsa funksiya rost qiymat
// qaytaradi. Aks hold yolg’on.
// ============================================================= //
// function teng10(x,y) {
//     if(x+y===10) return true;
//     else return false;
// }
// console.log(teng10(10,0));
// ============================================================= //
// ============================================================= //
// 33.Mashina kilometriga 10litr benzin ichadi. Mashina doim
// yo’lga chiqishdan oldin kamida 100litr benzin bilan chiqadi.
// Agar masofa funksiyaga argument sifatida berilsa, ushbu ma-
// sofaga chiqish uchun Mashina necha litr benzin bilan chiqishi
// keraglini funksiya qaytarib bersin.
// ============================================================= //
// function litrMasofa(km) {
//     return `Mashina kamida ${10*(km?km:100)} litr benzin bilan yo'lga chiqishi kerak`; 
// };
// console.log(litrMasofa(12));
// ============================================================= //
// ============================================================= //
// 34.Quyidagi namunaga nazar tashlagan holda funksiya yasang.
// Namuna:
// fun(3, 7) ᔍ 7
// fun(-1, 0) ᔍ 0
// fun(1000, 400) ᔍ 1000
// ============================================================= //
// function fun(x,y) {
//     return Math.max(x,y);
// };
// console.log(fun(1000,1500));
// ============================================================= //
// ============================================================= //
// 35.Funksiya 2ta argument berilsa, funksiya anashu 2ta argu-
// mentdan iborat massiv qaytarsin.
// ============================================================= //
// function arr(a,b) {
//     return [a,b];
// }
// console.log(arr(1,[]));
// ============================================================= //
// ============================================================= //
// 36.Funksiyaga 2ta argument sifatida string ko’rinishidagi ma’lu-
// motlar beriladi. Agar ushbu ikkala stringdagi belgilar soni bir-birinikiga teng bo’lsa funksiya rost qiymat qaytarsin, aks holda
// yolg’on.
// ============================================================= //
// function tengStrings (x,y) {
//     if(typeof x === "string" && typeof y === "string" && x.length === y.length) return true;
//     else return false; 
// };
// console.log(tengStrings("AB","CD"));
// ============================================================= //
// ============================================================= //
// 37.Shunday funksiya yasangki, unga string argument qilib
// beriladi, agar ushbu string bo’sh bo’lsa funksiya true qaytaradi,
// aks holda false.
// ============================================================= //
// function boshStr(str) {
//     return (str==="");
// }
// console.log(boshStr(""));
// ============================================================= //
// ============================================================= //
// 38.Shunday funksiya yasang.Unda butun son argument qilib beriladi. Agar ushbu butun son 5ga bo’linsa, funksiya true
// qaytarsin, aks holda false.
// ============================================================= //
// function bolinsin5(son) {
//     return (son%5==0);
// };
// console.log(bolinsin5(25));
// ============================================================= //
// ============================================================= //
// 39.Shunday funksiya yasang.Unda butun son argument qilib
// beriladi. Agar ushbu butun son 100ga bo’linsa, funksiya true
// qaytarsin, aks holda false.
// ============================================================= //
// function bolinsin100(son) {
//     return (son%100==0);
// };
// console.log(bolinsin100(300));
// ============================================================= //
// ============================================================= //
// 40.Shunday funksiya yasangki, ushbu funksiya stringni ichida nechta belgi borligini aytsin. Bunda length propertisidan foydalan-
// mang va rekursiv funksiya ishlating.
// ============================================================= //
// function uzunlik(str,inx=0) {
//     if(str[0]==undefined) return 0;
//     if(str[inx]==undefined) return inx; 
//     else return uzunlik(str,inx+1); 
// };
// console.log(uzunlik("abc"));
// ============================================================= //
// ============================================================= //
// 41.Funksiya 2ta argument qabul qiladi. Birinchi argument
// ikkinchi argumentdan katta emas. Agar birinchi argumentni
// ikkinchisiga bo’linsa, funksiya true qaytaradi aks holda false
// ============================================================= //
// function bolinsin(x,y) {
//     if(x>!y&&(x/y%2===0)) return true; 
//     else return false;
// }
// console.log(bolinsin(98,7));
// ============================================================= //
// ============================================================= //
// 42.Funksiyaga raqam string ko’rinishida berilsa, funksiya ushbu
// ma’lumotni yana raqam ma’lumot turi ko’rinishida qaytarib
// bersin.
// ============================================================= //
// function raqam(str) {
//     return Number(str);
// }
// console.log(raqam("123"));
// ============================================================= //
// ============================================================= //
// 43.To’rtburchakning yuzini hisoblaydigan funksiya yasang.
// Bunda funksiyaga to’rtburchakning(ya’ni to’g’ri turtburchak)
// tomonlari beriladi. Funksiya uning yuzini qaytarishi kerak,
// agar tomonlar xato kiritilgan bo’lsa funksiya -1 qaytarsin.
// ============================================================= //
// function tortYuzi(x,y) {
//     if(x>0&&y>0) return x*y;
//     else return -1;
// }
// console.log(tortYuzi(3,4));
// ============================================================= //
// ============================================================= //
// 44.Funksiyaga ism va familiya argument qilib berilsa, funksiya
// “ism, familiya” formatdagi string qaytarsin.
// ============================================================= //
// function ismFam (ism,familiya) {
//     return `${ism}, ${familiya}`;
// } 
// console.log(ismFam("John","Doe"));
// ============================================================= //
// ============================================================= //
// 45.Quyidaga namunani kuzatgan holda funksiya yasang.
// Namuna:
// bug(true) ᔍ "sad days"
// bug(false) ᔍ "it's a good day"
// ============================================================= //
// function bug(bool) {
//     if(bool) "sad days";
//     else return "it's a good day";
// };
// ============================================================= //
// ============================================================= //
// 46.Shunday funksiya yasangki, ushbu funksiya 2ta argument
// qabul qiladi. Birinchi argument massive, ikkinchi argument
// ushbu massivni boshidan boshlab nechta elementni tushurib qoldirish. Tushirib qoldirilgandan so’ng funksiya natijani
// qaytarsin.
// ============================================================= //
// function tushirMassiv (array, tushurishSoni) {
//     for(let i=0;i<tushurishSoni+1;i++) {
//         if(i>!(tushurishSoni)) array.shift();
//     };
//     return array;
// }
// console.log(tushirMassiv([1, 2, 3], 2));
// ============================================================= //
// ============================================================= //
// 47.Funksiya argument sifatida ovoz berib qo’llab quvvatlashlar
// soni va ovoz berib qo’llamaganlar sonini qabul qiladi. Funksiya
// natijani qaytarsin.
// ============================================================= //
// function ovozlar(ovozObj) {
//    if(typeof ovozObj.upvotes === 'number' && typeof ovozObj.downvotes === 'number') return ovozObj.upvotes-ovozObj.downvotes;
   
// }
// console.log(ovozlar({ upvotes: 13, downvotes: 0 }));
// ============================================================= //
// ============================================================= //
// 48.Funksiya son qabul qilsa, ushbu sonning negativini qay-
// tarsin.
// ============================================================= //
// function negativ(num) {
//     if(Math.sign(num)!=0&&Math.sign(num)!=-1) return num-num-num;
//     else return num;
// }
// console.log(negativ(114));
// ============================================================= //
// ============================================================= //
// 49.Massivni elementlarini o’rnin almashtiradigan funksiya
// yasang. Reverse metodi siz ham urinib ko’ring.
// ============================================================= //
// function almash(arr) {
//     const newArr = [];
//     for(let i = 0; i<arr.length;i++) newArr[i]=arr[arr.length-(i+1)];
//     return newArr;
// }
// console.log(almash([0,1,2,3,4,5]));
// ============================================================= //
// ============================================================= //
// 50.Kinoteatrga bollar kino ko’rgani kirmoqchi bunda 2ta talab
// mavjud. Shunda funksiya 2ta argument qabul qiladi. Bolaning
// yoshini va ota-onasi bilan birgami degan boolean qiymat. Agar
// bolaning yoshi kamida 15 bo’lsa va ota-onasi bilan birga bo’lsa
// funksiya true qaytarsin aks holda false.
// ============================================================= //
// function kinogaKirish(yosh,otaOna) {
//     if(yosh>=15 && otaOna) return true;
//     else return false; 
// }
// console.log(kinogaKirish(16,true));
// ============================================================= //
// ============================================================= //
// 51.Quyidagi namunalarda kamchilik bor funksiya aslida har
// bir massivning elementiga 1 qo’shishi kerak. Funksiya to’g’ri
// yasang.
// Namuna:
// oshir1ga([0, 1, 2, 3]) ᔍ [1, 2, 3, 4]
// oshir1ga([2, 4, 6, 8]) ᔍ [3, 5, 7, 9]
// oshir1ga([-1, -2, -3, -4]) ᔍ [0, -1, -2, -3]
// ============================================================= //
// function oshir1ga(arr) {
//     if(Array.isArray(arr)) arr.unshift((arr[0]+1));
//     return arr;
// }
// console.log(oshir1ga([-1, -2, -3, -4]));
// ============================================================= //
// ============================================================= //
// 52.Template string yordamida ya’ni backticlar orqali “ ushbu
// formatdagi stringni hosil qiling.
// var ism = "Donyor";
// var familiya = "Olimov";
// var natija = `${ism} ${familiya}`;
// console.log(familiya);
// ============================================================= //
// ============================================================= //
// 53.Quyidagi namunani ternary operator ko’rinishida yozing.
// Ternary operatorga misol:
// 2===2 ?
// 'teng' : 'tengemas'
// Namuna:
// var holatiYaxshimi = true
// var holati;
// if (holatiYaxshimi)
// holati = "yaxshi"
// else
// holati = "yaxshi emas"
// ============================================================= //
// let holatiYaxshimi = true;
// let holati = null;
// holatiYaxshimi ? holati = "yaxshi" : holati = "yaxshi emas";
// console.log(holati);
// ============================================================= //
// 54.Funksiya string qabul qiladi. Agar ushbu stringning uzunligi.
// juft bo’lsa funksiya true qaytarsin, aks holda false
// ============================================================= //
// function sozUzunligi(str) { 
//     if(typeof str === "string") return (str.length%2===0);
// }
// console.log(sozUzunligi('AB'))
// ============================================================= //
// ============================================================= //
// 55.Funksiya 2ta argument qabul qiladi. Ikkala argument ham
// son, funksiya 1-sonni 2-songa darajaga ko’tarilgan qiymatni
// qaytarsin.
// ============================================================= //
// function daraja(x, y) {
//     return x ** y;
// }
// console.log(daraja(5,5))
// ============================================================= //
// ============================================================= //
// 56.Funksiya massiv qabul qiladi. Ushbu funksiya massivning
// so’nggi elementini qaytarib bersin.
// ============================================================= //
// function songiElement(arr) {
//     return arr[arr.length-1];
// }
// console.log(songiElement([1,2,3]));
// ============================================================= //
// ============================================================= //
// 57.Kabisa yilini aniqlaydigan funksiya yasang. Agar kiritilgan
// yil kabisa bo’lsa funksiya true qaytaradi, aks holda false. Kabisa
// yili 4ga bo’linadigan yil bo’lib, lekin 100ga bo’linsa u holda
// 400ga ham bo’linganidagina kabisa hisoblanadi.
// ============================================================= //
// ============================================================= //
// function kabisa(yil) {
//     if( yil/4%2==0 || yil%400/100==0 ) return true;
//     else return false;
// }
// console.log(kabisa(2000));
// ============================================================= //
// ============================================================= //
// 58.Funskiyaga so’z kiritilsa funksiya ushbu so’zni birinchi
// harfisiz qaytarib bersin.
// ============================================================= //
// function soz(str) {
//    if(typeof str === "string") return str.slice(1);
// };
// console.log(soz("apple"));
// ============================================================= //
// ============================================================= //
// 59.Boolen qiymatini teskarisini qaytarib beradigan funksiya
// yasang.
// ============================================================= //
// function teskariBool(bool) {
//     return !bool;
// }
// console.log(teskariBool(true));
// ============================================================= //
// ============================================================= //
// 60.Funskiya son qabul qiladi, agar son juft bo’lsa funskiya “juft”
// qaytaradi, agar toq bo’lsa “toq” qaytarsin.
// ============================================================= //
// function juftMiToqmi(son) {
//     return (son%2==0?"juft":
// console.log(juftMiToqmi(2));
// ============================================================= //
// ============================================================= //
// 61.Quyidagi rasmga muvofiq qutilar teriladi. Qutilarning
// qavatiga qarab ularning soni oshib boradi
// [Rasm]
// Agar funskiyaga qutilarning qavati berilsa, nechta quti turganini
// qaytarsin.
// Namuna:
// qutilar(1) ᔍ 1
// qutilar(2) ᔍ 4
// qutilar(0) ᔍ 0
// ============================================================= //
// function qutilar(x) {
//     return x*x;
// }
// console.log(qutilar(0));
// ============================================================= //
// ============================================================= //
// 62.Funskiya massiv qabul qiladi, ushbu massivni ichida yoki
// stringlar yoki numberlar joyshlashgan bo’ladi. funksiya massiv
// elementlarini bitta string qilib qaytarsin.
// ============================================================= //
// function arrayToString(array) {
//     let res = "";
//     for(let i = 0; i < array.length; i++) {
//         res+=array[i];
//     }
//     return res;
// }
// console.log(arrayToString([1, 2, 3, 4, 5, 6]));
// ============================================================= //
// ============================================================= //
// 63.Funksia 2ta sonlardan iborat massiv qabul qilsa, ularni
// birlashtirib bitta massiv ko’rinishida qaytarib bersin.
// ============================================================= //
// function birlash (a,b) {
//     return [...a,...b];
// }
// console.log(birlash([1, 3, 5], [2, 6, 8]));
// ============================================================= //
// ============================================================= //
// 64.Funskiya 2ta argument qabul qiladi. 1-argument massiv,
// 2-argument ushbu massivning biron elementi. Funksiya ushbu
// elementning massiv ichida nechinchi indexda turishini qaytarib
// bersin.
// ============================================================= //
// function topIndex(arr, str) {
//     for(let i = 0; i<arr.length;i++) {
//         if(arr[i]===str) return i;
//     }
// }
// console.log(topIndex(["hi", "edabit", "fgh", "abc"], "fgh"));
// ============================================================= //
// ============================================================= //
// 65.Funksiya massive bilan index qabul qilsa, ushbu indexdagi
// massiv elementini qaytarsin.
// !!! Indexni eng kichik qiymatga qarab yaxlitlang.
// ============================================================= //
// function arrElement(arr, index) {
//     return arr[Math.round(index)];
// }
// console.log(arrElement([1, 2, 3, 4, 5, 6], 10 / 2));
// ============================================================= //
// ============================================================= //
// 66.Quyidagi namunani kuzatgan holda funksiya yasang.
// Namuna:
// namuna([1, 2, 3, 4, 5]) ᔍ 15
// namuna([-1, 0, 1]) ᔍ 0
// namuna([0, 4, 8, 12]) ᔍ 24
// ============================================================= //
// function namuna(array) {
//     let t = 0;
//     for(let i = 0;i<array.length;i++) t+=array[i];
//     return t;
// }
// console.log(namuna([1, 2, 3, 4, 5]))
// ============================================================= //
// 67.Funksiyaga son so’z ko’rinishida kiritilsa, raqam ko’rinishida
// qaytarilsin
// “bir” -> 1
// “ikki” -> 2
// “uch” -> 3
// “to’rt” -> 4
// “besh” -> 5
// “olti” -> 6
// “yetti” -> 7
// “sakkiz” -> 8
// “to’qqiz” -> 9
// “nol” -> 0
// Namuna:
// sozSon("bir") ᔍ 1
// sozSon("ikki") ᔍ 2
// sozSon("uch") ᔍ 9
// ============================================================= //
// function sozSon(str) {
//     switch(str) {
//         case "bir": return 1;
//         case "ikki": return 2;
//         case "uch": return 3;
//         case "to'rt": return 4;
//         case "besh": return 5;
//         case "olti": return 6;
//         case "yetti": return 7;
//         case "sakkiz": return 8;
//         case "to'qqiz": return 9;
//         case "nol": return 0;
//     };
// }
// console.log(sozSon("nol"))
// ============================================================= //
// ============================================================= //
// 68.Funskiyaga sonlar massivi beriladi, va 2-argument sifatida
// bitta son beriladi agar ushbu son massivni ichida bo’lsa funksiya
// true qaytarsin, aks holda false
// ============================================================= //
// function bormi(arr, son) {
//     let res = null;
//     for(let i = 0; i<arr.length;i++) {
//         if(arr[i]===son) res = true;
//         else if(res!=true) res = false;
//     }
//     return res;
// };
// console.log(bormi([1, 2, 3, 4, 5], 3));
// ============================================================= //
// ============================================================= //
// 69.Funskiya sonlar va stringlar massivi berilsa, massivning
// ichidagi sonlarni stringga o’girib, ushbu massivni funksiya yana
// qaytarib bersin.
// ============================================================= //
// function sonString(array) {
//     for(let i = 0; i<array.length;i++) {
//         if(typeof array[i] !== "string") array[i] = String(array[i]);
//     }
//     return array;
// }
// console.log(sonString([1, 2, "a", "b"]));
// ============================================================= //
// ============================================================= //
// 70.Kubik rubik yasash uchun kubikchalar kerak bo’ladi.
// Funksiya kubik rubikni necha qatorligiga qarab turib,
// kubikchalar sonini qaytasin.
// ============================================================= //
// function kubikchalar(n) {
//     return n*n*6;
// }
// console.log(kubikchalar(3))
// ============================================================= //
// ============================================================= //
