"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const name = "Nicolas", age = 24, gender = "Male";
// setting require type
const sayHi = (name, age, gender) => {
    //console.log(`Hello ${name}, your are ${age}, you are a ${gender}`);
    return `Hello ${name}, your are ${age}, you are a ${gender}`;
};
console.log(sayHi(name, age, gender));
console.log(sayHi("Nicolas", 444, "male"));
//# sourceMappingURL=index.js.map