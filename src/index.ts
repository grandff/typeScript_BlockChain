import * as CryptoJS from "crypto-js";

class Block{
    public index : number;
    public hash : string;
    public previousHash : string;
    public data : string;
    public timestamp : number;

    // class 선언을 안하고도 사용할 수 있도록 static 사용
    static calculateBlockHash = (index:number, previousHash:string, timestamp:number, data:string) : string => CryptoJS.SHA256(index + previousHash + timestamp + data).toString();

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

// get blockchain info
const getBlockchain = () : Block[] => blockchain;
const getLatestBlock = () : Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = () : number => Math.round(new Date().getTime() / 1000);

// create new block
const createNewBlock = (data : string) : Block => {
    const previosBlock : Block = getLatestBlock();
    const newIndex : number = previosBlock.index + 1;
    const newTimestamp : number = getNewTimeStamp();
    const newHash : string = Block.calculateBlockHash(newIndex, previosBlock.hash, newTimestamp, data);

    const newBlock : Block = new Block(newIndex, newHash, previosBlock.hash, data, newTimestamp);

    return newBlock;
};

console.log(createNewBlock("hello"), createNewBlock("byebye"));


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