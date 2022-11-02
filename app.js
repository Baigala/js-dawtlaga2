// Бидний 1 сарын хугацаанд үзэх сэдвүүд:
// 1. Var, datatype, git, coersion
// 2. Нөхцөл шалгах if statement, ternary operator, switch case
// 3. Давталт буюу loop
// 4. Фунц(function)
// 5. Массив
// 6. Object
// 7. es6 нэмэлт
// 8. bodloguud
// 9. bodloguud
// 10. DOM
// 11. DOM
// 12. Module
// 13. OOP
// 14. OOP

/*2022.10.23*/
// Өнөөдрийн сэдэв: git, var, datatype, coersion
// datatype - 2 төрөлтөй байна
// 1. primitive datatype ==> number, string, boolean, undefined, null
// 2. non-primitive ==> massiv, object
// number өгөгдлийн төрөл - 123456789
// string өгөгдлийн төрөл - "blabla", 'blabla'
// boolean - true, false
// undefined - Хувьсагчийг анх зарлаж өгөх үед defaultaar анхны утга нь undefined утгатай байна.
// null - Зориудаар хоосон гэж тэмдэглэж өгөх.

// Variable буюу хувьсагч
// Variable буюу хувьсагч бол ямар нэгэн өгөгдөл хадгалдаг сав гэж ойлгож болно.
// 1. Зарлаж өгөх үедээ урдаа var эсвэл let эсвэл const түлхүүр үг авна.
// 2. Javascript түлхүүр үгс буюу reserved words-р хувьсагчийг нэрлэж болохгүй .
// 3. Хувьсагчийн нэр тоогоор эхэлж болохгүй.
// 4. Олон үгээс тогтох нэрийг CamelCase ашиглан бичнэ.

// coersion - автомат төрөл хувиргалт
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
// var hariu = 3 > 2 > 1 ==> false гэсэн хариутай

/*2022.10.26*/
// Өнөөдрийн сэдэв: if statement, ternary operator, switch case, alert, prompt, operater-уудтай ажиллах

// {} - (block)
// <, >, =<, =>, =, ! - not, && - and, || - or

// var too = +prompt("Toog oruulna uu?");
// alert(typeof too);

// parseInt(), +

// if statement ===>
// var nas = +prompt("Насаа оруул");
// if (nas < 18) {
//   console.log("huuhed");
// } else {
//   console.log("huuhed");
// }
//
// if (nas >= 0 && nas <= 12) {
//   console.log("baga nas");
// } else if (nas >= 13 && nas < 18) {
//   console.log("osvor nas");
// } else {
//   console.log("adult");
// }

// ternary operator ===>
// promptoos тоон утга аваад num хувьсагчинд хадгалж өгөөд тухайн тоог сөрөг, бүхэл, бутархай эсэхийг шалгах программ бич.
// var num;
// num = +prompt("Too oruulna uu?");
// num < 0
//   ? console.log("sorog too baina.")
//   : num % 1 == 0
//   ? console.log("buhel too.")
//   : console.log("butarhai too bn.");

// nas >= 0 && nas <= 12
//   ? console.log("baga nas")
//   : nas >= 13 && nas <= 17
//   ? console.log("osvor nas")
//   : console.log("adult");

// switch case ===>
// var fruits;
// fruits = "grapes";
// switch (fruits) {
//   case "orange":
//     console.log("jurj bna.");
//     break;
//   case "banana":
//     console.log("gadil bna");
//     break;
//   case "grapes":
//     console.log("usan uzem bna.");
//     break;
//   default:
//     console.log("Iim jims medehgui ee.");
// }

// switch (true) {
//   case nas >= 0 && nas < 13:
//     console.log("child");
//     break;
//   case nas >= 12 && nas < 18:
//     console.log("osvor nas");
//     break;
//   default:
//     console.log("adult");
// }

/* Дасгал №1:
Гараас радиус авж тухайн радиустай тойргийн урт, талбайг тус тусад нь олдог програм бичээрэй.
urt = PI * 2 * r;
talbai = PI * r * r; */

/* Дасгал №2:
Гараас насаа оруулах үед Imgs folder доторх насны үечлэл зургийн дагуу өнөөдрийн хичээлээр үзсэн if statement, ternary operator, switch case -ийг нь тус тусад нь ашиглаж тухайн настай хүнийг аль үечлэлд хамрагдаж байгааг олох програм бичиж ирээрэй.
*/

/*2022.10.28*/
// Өнөөдрийн сэдэв: loops буюу давталт
// i++ i-- ===> i = i - 1 i = i + 1
// // 0 ees 10 hurtel toonuudiig console-d hewleh.
// for (var i = 0; i <= 10; i++) {
//   console.log(i);
// }
// 1-ees 100 hurtel toonuudaas zowhon tegsh toonuudiig hewlii.
// for (var i = 1; i <= 1000; i++) {
//   if (i % 7 == 0) {
//     console.log(i);
//   }
// }

/* Дасгал №3:
10 хүртэл давталт хийж, тоо тус бүрийг өмнөх тооны нийлбэртэй консолд хэвлэнэ үү. */
// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//   sum += i;
//   console.log(`${i} hurtelh toonii niilber: ${sum}`);
// }

/* Дасгал №4:
*
**
***
****
*****

*/
// var num = 5;
// var string = "";
// for (var i = 1; i <= num; i++) {
//   for (var j = 0; j < i; j++) {
//     string += "*";
//   }
//   string += "\n";
// }
// console.log(string);

/*2022.10.31*/
// Өнөөдрийн сэдэв: function
// void function буюу зөвхөн үйлдэл хийдэг function
// function nemeh1(too1, too2) {
//   var hariu = too1 + too2;
//   console.log(hariu);
// }
// nemeh1(4, 6);

// return хийдэг буюу утга буцаадаг функц.
// function nemeh2(too1, too2) {
//   var hariu = too1 + too2;
//   return hariu;
// }
// console.log(2 * nemeh2(12, 3));

// backtick - `${} aa aa    aaa`
// overring
// var ner = "Baigal";
// var mergejil = "bagsh";
// if (mergejil == "marketing manager") {
//   console.log(ner + " poster hdg");
// } else if (mergejil == "bagsh") {
//   console.log(`${ner} hicheel zaadag.`);
// } else {
//   console.log("iim mergejil medehgui.");
// }

// var name = "Zoloo";
// var job = "marketing manager";
// if (job == "marketing manager") {
//   console.log(name + " poster hdg");
// } else if (job == "bagsh") {
//   console.log(`${name} hicheel zaadag.`);
// } else {
//   console.log("iim job medehgui.");
// }

// function mergejilShalgah(ner, mergejil) {
//   if (mergejil == "marketing manager") {
//     console.log(ner + " poster hdg");
//   } else if (mergejil == "bagsh") {
//     console.log(`${ner} hicheel zaadag.`);
//   } else {
//     console.log("iim mergejil medehgui.");
//   }
// }
// mergejilShalgah("Baigal", "bagsh");
// mergejilShalgah("Zoloo", "marketing manager");
// mergejilShalgah("Болд", "marketing manager");

/* Дасгал №5:
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үрвэрийг буцааж, 1000-с бага бол нийлбэрийг буцаа */
// function ex5(num1, num2) {
//   var urjwer = num1 * num2;
//   if (urjwer > 1000) {
//     return urjwer;
//   }
//   return num1 + num2;
// }
// console.log(ex1(2, 501));

/* Дасгал №6:
 Гараас тоо өгөгдсөн бол тухайн тоо хүртэлх нийлбэрүүүдийг олж буцаа. */
// function ex6(too) {
//   var sum = 0;
//   for (var i = 0; i <= too; i++) {
//     sum += i;
//   }
//   return sum;
// }
// console.log(ex6(3));

/* Дасгал №7:
Гурвалжны суурь болон өндөр өгөгдсөн бол тухайн гурвалжны талбайг олж буцаа. 
томьёо: (суурь * өндөр) / 2 */
// function ex7(suuri, ondor) {
//   var hariu = (suuri * ondor) / 2;
//   return hariu;
// }
// console.log(ex7(4, 3));
// console.log(ex7(2, 3));
// console.log(ex7(2, 5));

/*2022.11.02*/
// Өнөөдрийн сэдэв: массив.
// var arr1 = [1, 2, 3, 4, 5]; // length == 5
// var arr2 = [
//   [1, 2, 3],
//   [1, 1, 1],
// ];
// console.log(arr2[0][1]);
// push() - хамгийн сүүлд элемент нэмж өгнө.
// pop() - хамгийн сүүлийн элементийг устгах.
// shift() - хамгийн эхний элементийг устгах.
// unshift(44) - хамгийн эхэнд элемент нэмэх.
// slice() - тодорхой хэсгийг тасдаж авна.
// splice() - тодорхой хэсгийг устгах.
// reverse() - өгөгдлүүдийн байрлалыг урвуу болгоно.
// split("хаагуур салгах") - стринг өгөгдлийг салгаж массив болгоно;
// join("юу залгаж нийлүүлэх") - массивын элементүүдийг хооронд нь стринг болгон нийлүүлнэ.
// arr.concat(залгах массив); - 2 массивыг хооронд нь залгаад шинэ массив үүсгэнэ.
// ... - spread operator massive, object, fucntion дээр ашиглана.
// var mass = [123, 34, 56];
// var arr2 = [1, ...mass];
// var arr = [1, 2, 3, 4, 5];
// console.log(arr[2]); // hariu ni 3
// arr[arr.length-1] // hamgiin suuliin element

/*Дасгал №8:
 Өгөгдсөн массив дотроос 5-д хуваагддаг тоонуудын нийлбэрийг олж буцаа */
// function ex8(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] % 5 == 0) {
//       sum += arr[i]; // sum = sum + i;
//     }
//   }
//   return sum;
// }
// console.log(ex8([1, 5, 10, 5]));
/*Дасгал №9:
 Өгөгдсөн массивын эхний болон сүүлийн элемент тэнцүү бол true, үгүй бол false буцаа */
// function ex9(arr) {
//   if (arr[0] == arr[arr.length - 1]) {
//     return true;
//   }
//   return false;
// }
// console.log(ex9([1, 3, 4, 2]));
/* Дасгал №10:
Гараас стринг өгөгдсөн бол тэгш индекс дээрх тэмдэгтүүдийг хэвлэх функц бич. */
// function ex10(str) {
//   for (var i = 0; i < str.length; i++) {
//     if (i % 2 == 0) {
//       console.log(str[i]);
//     }
//   }
// }
// ex10("asdfgg");
/* Дасгал №11: 
Өгөгдсөн массив дотор сондгой element болгон сондгой index агуулж, тэгш index болгон тэгш утга агуулж байвал тухайн massiv нь онцгой массив болно. Хэрэв онцгой массив таарвал true эсрэг тохиолдолд false утга буцаа.
[2, 1, 2, 1, 2]; ==> онцгой массив */
// function ex11(arr) {
//   var countTrue = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if ((arr[i] % 2 == 0 && i % 2 == 0) || (arr[i] % 2 == 1 && i % 2 == 1)) {
//       countTrue++;
//     }
//   }
//   if (countTrue == arr.length) {
//     return true;
//   }
//   return false;
// }

// console.log(ex11([2, 1, 2, 1, 2]));
/* Дасгал №12: 
string төрлийн тоо өгөгджээ. Бүх тэгш цифрүүдийн нийлбэрийг сондгой цифрүүдийн нийлбэртэй харьцуулж тэгш цифрүүдийн нийлбэр их бол тэгш цифрүүдийн нийлбэр их байна харин сондгой цифрүүдийн нийлбэр нь их байвал сондгой цифрүүдийн нийлбэр нь их хэрвээ тэнцүү байвал цифрүүдийн нийлбэр тэнцүү байна гэсэн утга буцаа. 
string төрлийн тоо ==> "1258" */

/* Дасгал №13: Массиваас element устгадаг функц бич. */
