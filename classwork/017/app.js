console.log('Jaja');

//JS viskas yra objektas
let a = 'labas';
console.log(typeof a);
console.log(a.length);

let b = new String('labas'); //stringas yra class
console.log(typeof b);
console.log(b + 'ccc');

console.log(b + a);

let c = Number(55);
console.log(c);
console.log(typeof c);

let d = Array(5);
console.log(d);
console.log(typeof d);

//modifikavimas
String.prototype.tail = function() {
    return this.valueOf() + 'o--------------------'
}
console.log(a.tail());

//kepam class
class Cat {
    constructor(n) {
        console.log('Naujas katinas');
        this.name = n;
    }
    //metodas
    miau = () => {
        console.log(this.name + ' miau!')
    }
}

const myCat = new Cat('Pilkis');
const myCat22 = new Cat('Mikis');
console.log(myCat.name);
console.log(myCat22.name);
myCat.miau();
myCat22.miau();


