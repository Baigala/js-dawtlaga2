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

/*2022.10.25*/
// Өнөөдрийн сэдэв: if statement, ternary operator, switch case, alert, prompt, operater-уудтай ажиллах

// var x = 5;
// var y = 6;

// x = x + y; // += 11
// x += y; // 17
// x -= y; // 11

// x++; // x = x + 1;
// x--; // x = x - 1;

// {} - (block)
// <, >, =, !-not, &&, ||
// toString()
// parseInt() && +

var nas = +prompt("Насаа оруул");
// if statement ===>
if (nas >= 18) {
  // true
  alert("Adult");
} else {
  // false
  alert("Child");
}

if (nas >= 0 && nas <= 12) {
  console.log("baga nas");
} else if (nas >= 13 && nas < 18) {
  console.log("osvor nas");
} else {
  console.log("adult");
}

// ternary operator ===>
var num = 5;
num < 0
  ? console.log("sorog")
  : num % 1 == 0
  ? console.log("buhel")
  : console.log("butarhai");

nas >= 0 && nas <= 12
  ? console.log("baga nas")
  : nas >= 13 && nas <= 17
  ? console.log("osvor nas")
  : console.log("adult");

// switch case ===>
var fruits = "Banana";
switch (fruits) {
  case "Banana":
    alert("Banana");
    break;
  case "Apple":
    alert("Apple");
    break;
}

switch (true) {
  case nas >= 0 && nas < 13:
    console.log("child");
    break;
  case nas >= 12 && nas < 18:
    console.log("osvor nas");
    break;
  default:
    console.log("adult");
}

/* Дасгал:
Гараас радиус авж тухайн радиустай тойргийн урт, талбайг тус тусад нь ол..
urt = PI * 2 * r;
talbai = PI * r * r; */
