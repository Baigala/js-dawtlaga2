// Бидний 1 сарын хугацаанд үзэх сэдвүүд:
// 1. Var, datatype, git, coersion
// 2. Нөхцөл шалгах if statement, ternary operator, switch case
// 3. Давталт буюу loop
// 4. Фунц(function)
// 5. Массив
// 6. Object
// 7. bodloguud
// 8. es6 нэмэлт
// 9. DOM
// 10. regex
// 11. localstorage
// 12. OOP
// 13. Promise
// 14. Module

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

// ternary operator ==>
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
var sum = 0;
for (var i = 0; i <= 10; i++) {
  sum += i;
  console.log(`${i} hurtelh toonii niilber: ${sum}`);
}

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
// function ex6(too){
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
// "1234"
// function ex12(str) {
//   var tegshToonuud = 0;
//   var sondgoiToonuud = 0;
//   var hariu;
//   for (var i = 0; i < str.length; i++) {
//     if (str[i] % 2 == 0) {
//       tegshToonuud += +str[i];
//     }
//     if (str[i] % 2 == 1) {
//       sondgoiToonuud += +str[i];
//     }
//   }
//   if (tegshToonuud > sondgoiToonuud) {
//     hariu = "tegsh ni ih bn.";
//   } else if (sondgoiToonuud > tegshToonuud) {
//     hariu = "sondgoi ni ih bn.";
//   } else {
//     hariu = "tentsuu bna.";
//   }
//   return hariu;
// }
// console.log(ex12("1234"));

/* Дасгал №13: Массиваас element устгадаг функц бич. */
// function deleteElement(arr, ele) {
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == ele) {
//       arr.splice(i, 1);
//     }
//   }
//   return arr;
// }
// var arr = [23, 56, 4, 78];
// var newArr = deleteElement(arr, 56);
// console.log(newArr); //[23, 4, 78]

/*2022.11.04*/
// Өнөөдрийн сэдэв: обьект.
// primitive datatype, non-primitive datatype - massiv, object
// Дотроо олон төрлийн өгөгдөл ба функц агуулдаг.
// {key: value} төрлийн өгөгдлүүд хадгална.
// object dotorh functionii this objectiig ooriin zaadag.
// objectiin bish functionii this window objectiig zaadag.

// var shiree = {
//   une: 50000,
//   ongo: "tsagaan",
//   hemjee: {
//     urt: "1m",
//     orgon: "50cm",
//   },
// };
// console.log(shiree.hemjee.orgon);

// var hun1 = {
//   ner: "Baigal",
//   utas: 8888888,
//   geriinHayag: {
//     hot: "UB",
//     duureg: "BGD",
//   },
//   mendleh: function () {
//     console.log("hi " + this.ner);
//     function aa() {
//       console.log(this);
//     }
//     aa();
//   },
// };

// function aaaaa() {
//   console.log(this);
// }
// aaaaa();
// hun1.mendleh();
// console.log(hun1.utas);
// console.log(hun1.geriinHayag.hot);
// this tulhuur ug:
// console.log(this);
// hello();

// function hello() {
//   console.log("Hello function ajillalaa");
//   console.log("this ==>" + this);
//   console.log("window ==>" + window);
//   console.log("globalThis ==>" + globalThis);
// }

// for in ni massive object 2 uulan deer ni ajillana.
// for in
// var masss = [12, 13, 14];
// for (var el in masss) {
//   console.log(masss[el]);
// }

/* Дасгал №14:
Books object доторх номнуудаар for in давталт ашиглан давталт хийгээд read property ni false номнуудыг console-д хэвлэ. */
// var books = {
//   book1: {
//     author: "Preeti Shenoy",
//     bookName: "A Place Called Home",
//     read: false,
//   },
//   book2: {
//     author: "Geetanjali Shree’s",
//     bookName: "Tomb of Sand",
//     read: true,
//   },
//   book3: {
//     author: "Harish Mehta",
//     bookName: "The Maverick Effect",
//     read: false,
//   },
// };
// for (const key in books) {
//   if (books[key].read == false) {
//     console.log(books[key]);
//   }
// }

// Дасгал №15:
// ner, dugaar, email 3-н property-tai student1, student2, student3 geh met objectuud uusgeed massiv dotor hiine. promptoos email awj objectuudaa hadgalsan massiv dotorh objectuudaar dawtalt hiigeed oruulsan emailtai ali neg objectiin email taarj bhin bol tuhain emailtai objectiig consoled hewle.
// var student1 = {
//   ner: "a",
//   number: "99221111",
//   email: "a@gmail.com",
// };
// var student2 = {
//   ner: "b",
//   number: "90444444",
//   email: "b@gmail.com",
// };
// var student3 = {
//   ner: "c",
//   number: "95555555",
//   email: "c@gmail.com",
// };
// var student4 = {
//   ner: "d",
//   number: "96666666",
//   email: "d@gmail.com",
// };
// var student5 = {
//   ner: "e",
//   number: "99999999",
//   email: "e@gmail.com",
// };
// var mobiUsers = [];
// var students = [student1, student2, student3, student4, student5];
// var bool = false;
// var email = prompt("haih emailee oruulna u");
// for (var i = 0; i < students.length; i++) {
//   if (email == students[i].email) {
//     console.log(students[i]);
//     bool = true;
//   }

//   if (
//     students[i].number.slice(0, 2) == 99 ||
//     students[i].number.slice(0, 2) == 95
//   ) {
//     mobiUsers.push(students[i]);
//   }
// }
// if (bool == false) {
//   alert("oldsongui e.");
// }
// console.log(mobiUsers);

/*2022.11.07*/
/*Дасгал №16
Massiv дотор хамгийн сүүлийн element-ээс бусад бүх утгуудыг нэгтгэж, хамгийн сүүлийн element-тэй таарж байгаа эсэхийг тооцож boolean утга буцаа.*/
// function ex16(arr) {
//   var sum = "";
//   var bool = false;
//   for (var i = 0; i < arr.length - 1; i++) {
//     sum += arr[i];
//   }
//   if (sum == arr[arr.length - 1]) {
//     bool = true;
//   }
//   return bool;
// }
// console.log(ex16(["a", "b", "c", "abc"]));

/* Дасгал №17
 Массив дотор number болон string төрлийн тоонууд өгөгджээ. Зөвхөн number төрлийн тоонуудын нийлбэрийг олж буцаа. */
// function ex17(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (typeof arr[i] == "number") {
//       sum += arr[i];
//     }
//   }
//   return sum;
// }
// console.log(ex17([1, "3", 4]));
/* Дасгал №18 
Массив өгөдсөн бол element тус бүрийг харгалзах indexeer нь үржүүлж үржвэрүүдийн нийлбэрийг буцаа. */
// function ex18(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i] * i;
//   }

//   return sum;
// }
// console.log(ex18([3, 4, 2]));
/* Дасгал №19 
Хайрцагны урт, өргөн болон өндрийн хэмжээг агуулсан массив өгөгджээ... нийт хайрцагнуудын эзэлхүүнийг буцаа. */
// function ex19(boxes) {
//   var sum = 0;
//   var urjwer;
//   for (var i = 0; i < boxes.length; i++) {
//     urjwer = 1;
//     for (var j = 0; j < boxes[i].length; j++) {
//       urjwer *= boxes[i][j];
//     }
//     sum += urjwer;
//   }
//   return sum;
// }
// console.log(
//   ex19([
//     [1, 2, 3],
//     [3, 4, 2],
//     [4, 2, 1],
//   ])
// );
/* Дасгал №20
 Дан boolean утгууд агуулсан массив өгөгдсөн бол, дотор нь нийт хэдэн ширхэг true утга байгааг олж буцаа. */
// function ex20(arr) {
//   var countTrue = 0;
//   for (var i = 0; i < arr.length; i++) {
//     if (arr[i] == true) {
//       countTrue++;
//     }
//   }
//   return countTrue;
// }
// console.log(ex20([true, false, true, false, true, true]));
/* Дасгал №21 
Mассивийн эхний element болон уртын хэмжээ өгөгдсөн бол, эхний element-ийг уртын хэмжээ хүртэл үржүүлэн үлдсэн element-үүдийг тоосож массив буцаа. */
// function ex21(el, len) {
//   var arr = [];
//   for (var i = 1; i <= len; i++) {
//     arr.push(el * i);
//   }
//   return arr;
// }
// console.log(ex21(3, 4));

/*2022.11.09 Сэдэв: es6 нэмэлтүүд */

/*2022.11.09*/
/* №1. let, const */
/* let түлхүүр үг ашиглан зарласан хувьсагчийг нэг орчинд дахиж зарлаж өгж болохгүй. */
// var a = 5;
// var a = 6;
// let too = 4;
// let too = 3;
/* var түлхүүр үг ашиглан зарласан хувьсагч function дотроо хүчинтэй бол let -> block haalt дотроо хүчинтэй блокон хаалтнаас гадна дуудвал is not defined болсон байна. */
// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log("i===> " + i);
// }
// sayHello();
/* const түлхүүр үг ашиглан зарласан хувьсагч доторх анхны утгыг нь өөрчилж болохгүй. Жишээ нь: Хүний овог нэр хадгалах, html таг барьж авах.*/
// const ner = "Baigal";
// ner = "Zoloo";

/* №2. object дээрх нэмэлтүүд */
// object-ийн function-ийг method гэж дуудна.
// es6 дээр method-ийн : function түлхүүр үгийг нь хаяж бичнэ.
const person1 = {
  name: "Baigal",
  walk: function () {
    console.log(`${this.name} walking`);
  },
  talk() {
    console.log("talks");
  },
};

person1.walk();
person1.talk();
// console.log("hi " + person1.name);
// console.log(`hi ${person1.name}`);

// №3. arrow functions - суман функц нь es6-c гарж ирсэн функцыг бичих илүү товч хялбар бичиглэл юм.
// function-ийг зарлаж өгөхдөө ашигладаг function түлхүүр үгийг нь хасаад суман функц гэдгийн илэрхийлэхийн тулд => зааж өгнө. Хэрвээ ганц parameter-тай байхын бол () хаалтыг авахгүй байж болно. Мөн блокон хаалт дотор ганц мөртөй код байхаар бол return түлхүүр үг мөн {} ийг нь бичихгүй байж болно.
// Жишээ 1:
// const zeregtDewshuul = function (number) {
//   return number * number;
// };
const zeregtDewshuul = (number) => number * number;
console.log(zeregtDewshuul(5));
// Жишээ 2:
const books = [
  { id: 1, isRead: true },
  { id: 2, isRead: false },
  { id: 3, isRead: true },
  { id: 4, isRead: false },
];
// const unshsanNom = books.filter(function (book) {
//   return book.isRead;
// });
const unshsanNom = books.filter((book) => book.isRead);

// №4. arrow functions and this
// Callback functions оbject-ийн функцдээ орохгүй байгаа учир this нь window object-ийг зааж байна.
const person2 = {
  talk() {
    setTimeout(function () {
      console.log("----");
      console.log("this ===>", this);
    }, 1000);
  },
};
person2.talk();

// Callback function дотор гаднах обьектээ заадаг болгох нь:
const person3 = {
  talk() {
    var self = this;
    setTimeout(function () {
      console.log("----");
      console.log("self ===>", self);
    }, 1000);
  },
};
person3.talk();
// setTimeout function доторх callback function ийг arrow function-оор сольж үзье.
const person4 = {
  talk() {
    setTimeout(() => {
      console.log("----");
      console.log("arrow function доторх this ===>", this);
    }, 1000);
  },
};
person4.talk();

/* №5. Array-тай ажилладаг нэмэлт функцууд*/
// map
const colors = ["red", "green", "blue"];
const arr1 = colors.map(function (color) {
  return "<li>" + color + "</li>";
});
console.log(arr1);

// forEach
const arr2 = ["a", "b", "c"];
arr2.forEach((element) => console.log(element));

// filter
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
];
const result = words.filter((word) => word.length > 6);
console.log(result);

// find
const arr3 = [5, 12, 8, 130, 44];
const found = arr3.find((element) => element > 10);
console.log(found);

// findIndex
const arr4 = [5, 12, 8, 130, 44];
console.log(arr4.findIndex((element) => element > 13));

// indexOf
const beasts = ["ant", "bison", "camel", "duck", "bison"];
console.log(beasts.indexOf("bison"));
console.log(beasts.indexOf("bison", 2));
console.log(beasts.indexOf("giraffe"));

//join
const elements = ["Fire", "Air", "Water"];
console.log(elements.join());
console.log(elements.join(""));
console.log(elements.join("+"));

// reduce
const arr5 = [1, 2, 3, 4];
const anhniiUtga = 0;
const niilber = arr5.reduce((a, b) => a + b, anhniiUtga);
console.log(niilber);

// some
const arr6 = [1, 2, 3, 4, 5];
const tegshToo = (element) => element % 2 === 0;
console.log(arr6.some(tegshToo));

//every
const tooo = (currentValue) => currentValue < 40;
const arr7 = [1, 30, 4, 29, 10, 13];
console.log(arr7.every(tooo));

// №6. object destructuring
const geriinHayag = {
  uls: "Монгол",
  hot: "УБ",
  duureg: "БГД",
};

// const uls = geriinHayag.uls;
// const hot = geriinHayag.hot;
// const duureg = geriinHayag.duureg;
// дээрх байдлаар хандаж хувьсагчинд хадгалсныг destructuring ашиглан доорх байдлаар бичнэ.
// const { duureg, hot, uls } = geriinHayag;
// object-ийн ганц утгыг авахаар бол:
// const { duureg } = geriinHayag;
// object-ийн ганц утгыг property-ний нэрнээс өөр нэр өгөх хэрэгтэй бол:
// const { hot: city } = geriinHayag;

// №7. Spread Operator
// const first = [1, 2, 3];
// const second = [4, 5, 6];
// const negtgesen = first.concat(second);
// console.log(negtgesen);
// const SpreadOperatorAshiglanNegtgesen = [...first, "a", "z", ...second, "b"];
// console.log(SpreadOperatorAshiglanNegtgesen);
// Object дээр spread operator хэрэглэх нь:
// const toirog = {
//   radius: 10,
//   zuzaan: "10cm",
// };

// const ongotoiToirog = {
//   ...toirog,
//   color: "black",
// };

// console.log(ongotoiToirog);

// Дараа үзэх es6 нэмэлтүүд
// Classes;
// Promise;
// Modules;
