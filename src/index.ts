class Block{
    public index : number;
    public hash : string;
    public previousHash : string;
    public data : string;
    public timestamp : number;
    constructor(
        index : number,
        hash : string,
        previousHash : string,
        data : string,
        timestamp : number
    ){
        this.index = index;
        this.hash = hash;
        this.previousHash = previousHash;
        this.data = data;
        this.timestamp = timestamp;
    }
}

const genesisBlock : Block = new Block(0, "382398429842", "", "Hello", 123456);
let blockchain : [Block] = [genesisBlock];
console.log(blockchain);


// interface는 오직 ts에서만 가능
//interface Human{
//    name : string,
//    age : number,
//    gender : string
//}
/* 이론 끝!!
class Human {
    public name : string;
    public age : number;
    public gender : string;
    constructor(name : string, age : number, gender? : string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

const name = "Nicolas",
    age = 24,
    gender = "Male";

const person = {
    name : "Temp",
    age : 22,
    gender : "male"    
}

const lynn = new Human("Lynn", 18, "female");

// setting require type
//const sayHi = (name:string, age:number, gender:string):string => {            // setting return type
const sayHi = (person : Human):string => {            // setting return type is object
    //console.log(`Hello ${name}, your are ${age}, you are a ${gender}`);
    return `Hello ${person.name}, your are ${person.age}, you are a ${person.gender}`;
};

//console.log(sayHi(name, age, gender));          // return const val
//console.log(sayHi("Nicolas", 444, "male"));     // return string val
console.log(sayHi(person))                    // return object
console.log(sayHi(lynn));
*/
export {};