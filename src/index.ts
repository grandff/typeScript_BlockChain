// interface는 오직 ts에서만 가능
interface Human{
    name : string,
    age : number,
    gender : string
}

const name = "Nicolas",
    age = 24,
    gender = "Male";

const person = {
    name : "Temp",
    age : 22,
    gender : "male"    
}

// setting require type
//const sayHi = (name:string, age:number, gender:string):string => {            // setting return type
const sayHi = (person : Human):string => {            // setting return type is object
    //console.log(`Hello ${name}, your are ${age}, you are a ${gender}`);
    return `Hello ${person.name}, your are ${person.age}, you are a ${person.gender}`;
};

//console.log(sayHi(name, age, gender));          // return const val
//console.log(sayHi("Nicolas", 444, "male"));     // return string val
console.log(sayHi(person))                    // return object

export {};