const keno = "HELLO WORLD";
let num = 12;

const func = (a, b) => {
  return a + b;
};

const func2 = (x, y) => {
  return x * y;
};

function hello(){
    return "HELLO iam a funciton "
}

console.log(hello())


console.log(func(10 , 10))
console.log(func2(10 , 10))


class Hsl{
    constructor(name , age , password) {
       this.name = name;
       this.age = age;
       this.password = password ;
       this.yalo = "Yalo"
    }

    voidSayhello(){
        console.log(`Iam saying your name is ${this.name} , your age is ${this.age } , and your passowrd is ${this.password}`)
    }
}

const byby = new Hsl("abh"  , 17 , "asdfjko" );

console.log(byby.yalo)