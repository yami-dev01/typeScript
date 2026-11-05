

function greet(name : string) : string{
    return `hello ${name}`;
}

const greeting = greet("vansh");

type user = {
    userName : string,
    password : string,
    bankBalance : string | number
}

enum role {
    USER,
    ADMIN
}

type admin = user & {
    role : role
}

const myUser : user = {
    userName : "vansh",
    password : "i am a fish",
    bankBalance : 470,
    //bankBalance : "470"
}

const adminUser : admin = {
    userName : "vansh",
    password : "i am a fish",
    bankBalance : 470,
    role : role.ADMIN,
}


interface student {
    name : string,
    dob : string,
}

// this is called reopening an interface
interface student{
    noOfSubject : number
}

interface person extends student {
    eyes : number,
    readonly married : boolean,
    greet() : void
}

const person : person = {
    name : "vansh",
    dob : "29/05/2005",
    noOfSubject : 6,
    eyes : 2,
    married : false,
    greet : ()=>{
        console.log("hello world!")
    }
}

abstract class bank {
    private balance : number;
    public name : string;

    constructor(balance : number , name : string){
        this.balance = balance;
        this.name = name
    }

    abstract withDraw(amount : number) : void
}

class bankAccount extends bank implements person{
    dob;
    noOfSubject;
    eyes;
    married;

    constructor(name : string , dob : string , noOfSubject : number , eyes : number , married : boolean , balance : number){
        super(balance , name);
        this.dob = dob;
        this.noOfSubject = noOfSubject;
        this.eyes = eyes;
        this.married = married
    }

    withDraw (amount : number) : void{
        console.log(amount , "withdrawn")
    }

    greet(): void {
        console.log("hi")
    }
}

const myBankAccount = new bankAccount("vansh" , "37383" , 6 , 2, false, 400,);

const genericFunction = <Type>(name : Type) : Type =>{
    return name
}

const name = genericFunction("vansh")

interface Circle {
  kind: "circle";
  radius: number;
}
 
interface Square {
  kind: "square";
  sideLength: number;
}

type Shape = Circle | Square;
 
function getArea(shape: Shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.sideLength ** 2;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}

const area = getArea({
    kind : "circle",
    radius : 10
})

console.log(area)