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
    constructor(n) { //'Bevardis'
        console.log('Naujas katinas');
        this.name = n; //?? 'Bevardis'
    }
    //metodas
    miau = (m = '') => {
        console.log(this.name + ' miau! ' + m)
    }
}

const myCat = new Cat('Pilkis');
const myCat22 = new Cat('Mikis');
console.log(myCat.name);
console.log(myCat22.name);
myCat.miau();
myCat22.miau('ja ja');

//new
const m = new Map();

m.set('cat1', myCat);
m.set('cat2', myCat22);
console.table(m);
console.table(m.get('cat2'));

//map'e nebutinai turi buti stingai
const h = new Map();

h.set(myCat22, myCat);
h.set(myCat, myCat22);
h.set('aaaa', '--------------------------');
console.table(h);
console.table(h.get(myCat22));
console.table(h.get(myCat));
console.table(h.get('aaaa'));


