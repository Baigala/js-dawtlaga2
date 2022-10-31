// Бидний 1 сарын хугацаанд үзэх сэдвүүд:
// 1. Var, datatype, git, coersion
// 2. Нөхцөл шалгах if statement, ternary operator, switch case
// 3. Давталт буюу loop
// 4. Фунц(function)
// 5. Массив
// 6. Object
// 7. es6 нэмэлт
// 8. DOM
// 9. DOM
// 10. DOM
// 11. Module
// 12. OOP

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

/* Дасгал №2
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

/* Дасгал №3
10 хүртэл давталт хийж, тоо тус бүрийг өмнөх тооны нийлбэртэй консолд хэвлэнэ үү. */
// var sum = 0;
// for (var i = 0; i <= 10; i++) {
//   sum += i;
//   console.log(`${i} hurtelh toonii niilber: ${sum}`);
// }
/* Дасгал №4
*
**
***
****
*****


*****
****
***
**
*

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

function mergejilShalgah(ner, mergejil) {
  if (mergejil == "marketing manager") {
    console.log(ner + " poster hdg");
  } else if (mergejil == "bagsh") {
    console.log(`${ner} hicheel zaadag.`);
  } else {
    console.log("iim mergejil medehgui.");
  }
}
mergejilShalgah("Baigal", "bagsh");
mergejilShalgah("Zoloo", "marketing manager");
mergejilShalgah("Болд", "marketing manager");

/* Дасгал №5
Гараас 2ш тоо өгөгдсөн ба, хэрэв тэдгээрийн үржвэр 1000-с их бол үрвэрийг буцааж, 1000-с бага бол нийлбэрийг буцаа */

/* Дасгал №6
 Гараас тоо өгөгдсөн бол тухайн тоо хүртэлх нийлбэрүүүдийг олж буцаа. */

/* Дасгал №7
Гараас стринг өгөгдсөн бол тэгш индекс дээрх тэмдэгтүүдийг хэвлэх функц бич. */
function ex7(text) {
  for (var i = 0; i < text.length; i++) {
    if (i % 2 == 0) {
      console.log(text[i]);
    }
  }
}
ex7("asdfxc");

// Өгөгдсөн массив дотор сондгой element болгон сондгой index агуулж, тэгш index болгон тэгш утга агуулж байвал тухайн massiv нь онцгой массив болно. Хэрэв онцгой массив таарвал true эсрэг тохиолдолд тэгш утга буцаа.
// [2, 1, 2, 1, 2]; ==> ontsgoi massiv
