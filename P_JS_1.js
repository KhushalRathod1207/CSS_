wsceddddwsxdcex dsx
 ep2epd devicePixelRatio - DataType

// Single-line comments

/*
    Multi-line comments
*/

console.log("Hello World");

// 2️⃣ Data Types (Primitive + Non-Primitive)

/*
        DataType : There are servel data Types that you can use to store different type of data .
        Which types of data you want to store in varibale.

        1. Primitive Data Types -  not changeable (immutable) values.,  Stored directly in memory(Stack).
        store by value. 

        2.non- Primitive Data Types -   changeable (mmutable) values.,not Stored directly in memory(Heap). 
        store by reference.

*/

// 1. Primitive Data Types

// String

let student_name = "Khushal_Rathod";
console.log(student_name);
console.log(typeof student_name);

// Number

let student_rno = 669;
console.log(student_rno);
console.log(typeof student_rno);

// Boolean 
let student_pass = true;
console.log(student_pass);
console.log(typeof student_pass);

// Null
let student_income = null;
console.log(student_income);
console.log(typeof student_income);

// Undefined  : Variable declared but not assigned

let student_future;
console.log(student_future);
console.log(typeof student_future);

//BingInt
let student_future_income = 125412541254125412n;
console.log(student_future_income);
console.log(typeof student_future_income);

// Symbol

let id = Symbol("uniqueID");
console.log(id);
console.log(typeof id);


// 1. Non - Primitive Data Types

// Object

let student = {
    name: "Khushal",
    rno: 669,
    gender: "Male",
    learning: ["Data Science", "Full Stack devlopment", "DSA-JAVA"]
};

console.log(student);
console.log(typeof student);

// Array 

let fruit_name = ["Mango", "Kiwi", "Banana"];
console.log(fruit_name);
console.log(typeof fruit_name);

// Function

function Hello() {
    return "Hello World";
}
console.log(Hello());

// Type Coercion & Type Conversion

/*

Type Conversion(explicit) : You convert a value yourself. Example: Number('123'), String(10)

Type coercion (implicit): JS engine converts types automatically (often inside operators). Example: '5' - 2 → 3


*/

console.log('5' - 3);
console.log('5' + 3);