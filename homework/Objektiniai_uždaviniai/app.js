//1
class Kibiras {
    constructor() {
        this.akmenuKiekis = 0;
    }
    prideti1Akmeni = () => {
        this.akmenuKiekis += 1;
    }
    pridetiDaugAkmenu = (kiekis) => {
        this.akmenuKiekis += kiekis;
    }
    kiekPririnktaAkmenu = () => {
        console.log(`Rezultatas: ${this.akmenuKiekis}`)
    }
}

const kibiras = new Kibiras();
kibiras.prideti1Akmeni();
kibiras.pridetiDaugAkmenu();
kibiras.kiekPririnktaAkmenu();

//2
class Pinigine {
    constructor() {
        this.popieriniaiPinigai = 0;
        this.metaliniaiPinigai = 0;
    } 
    ideti = (kiekis) => {
        if (kiekis < 2) {
            this.metaliniaiPinigai += kiekis;
            return console.log(`Metaliniai pinigai: ${kiekis}`);
        }
            else this.popieriniaiPinigai += kiekis;
            return console.log(`Popieriniai pinigai: ${kiekis}`);
    }
    skaiciuoti = () => {
        console.log(`Iš viso: ${this.metaliniaiPinigai + this.popieriniaiPinigai}`);
    }
    monetos = () => {
        this.metaliniaiPinigai;
        console.log(`Iš viso monetų: ${this.metaliniaiPinigai}`);
    }
    banknotai = () => {
        this.popieriniaiPinigai;
        console.log(`Iš viso banknotų: ${this.popieriniaiPinigai}`);
    }
}

const pinigai = new Pinigine();
pinigai.ideti(1);
pinigai.ideti(8);
pinigai.ideti(1);
pinigai.ideti(5);
pinigai.ideti(3);
pinigai.skaiciuoti();
pinigai.monetos();
pinigai.banknotai();

console.log(`-----------------------`)
//7 (STATIC)
class Kibiras1{
    static visiAkmenys = 0;

    static akmenuSkaiciusVisuoseKibiruose() {
        console.log(`Pririnkta viso: ${this.visiAkmenys} akmenų`);
    }

    static bendrasAkmenuSkaicius(akmenuSkaicius) {
        this.visiAkmenys += akmenuSkaicius;
    }

    constructor() {
        this.akmenuKiekis = 0;
    }

    prideti1Akmeni() {
        this.akmenuKiekis++;
        this.constructor.bendrasAkmenuSkaicius(1);
    }

    pridetiDaugAkmenu(kiekis) {
        this.akmenuKiekis += kiekis;
        this.constructor.bendrasAkmenuSkaicius(kiekis);
    }

}

const k1 = new Kibiras1();
const k2 = new Kibiras1();
const k3 = new Kibiras1();

k1.pridetiDaugAkmenu(10);
k2.prideti1Akmeni();
k3.pridetiDaugAkmenu(9);
k2.prideti1Akmeni();
k2.prideti1Akmeni();

Kibiras1.akmenuSkaiciusVisuoseKibiruose();
console.log(`-----------------------`)

//8 +STATIC
 class Stikline {
     static gerimukas = 'pepsi';
     static registras = [];

     static naujaStikline(t) {
         return new this(t);
     }

     static whatType() {
        console.log('blabla');
         console.log(this.gerimukas);
     }

     static visosStiklines (stikline) {
         this.registras.push(stikline);
     }

     constructor(turis) {
         this.turis = turis;
         this.kiekis = 0;
         this.constructor.visosStiklines(this);
     }

     ipilti(kiekis) {
         this.kiekis = Math.min(this.turis, this.kiekis + kiekis); // vietoj if'o
         return this;
     }
     ispilti() {
         const kiek = this.kiekis;
         this.kiekis = 0;
         return kiek;
     }
     stiklinejeYra() {
         console.log(`Stiklinėje ${this.turis} ml yra: ${this.kiekis} ${this.constructor.gerimukas}.`)
     }
 }
const s1 = new Stikline(200);
const s2 = Stikline.naujaStikline(150);
const s3 = new Stikline(100);
const s4 = new Stikline(800);
console.log(s1);
console.log(Stikline.gerimukas);
Stikline.whatType();
console.log(Stikline.registras);

//pvz
//s2.ipilti(s1.ipilti(80).ispilti());

//chane, duomenu perdavimas
//klasikinis objektinis programavimas
s3.ipilti(s2.ipilti(s1.ipilti(80).ispilti()).ispilti());
Stikline.registras[0].ipilti(40);
Stikline.registras[1].ipilti(120);
Stikline.registras[2].ipilti(5);

/*
//wrong, cause of the positioning
s1.ipilti(1000);
s1.stiklinejeYra();

s2.ipilti(s1.ispilti());
s2.stiklinejeYra();

s3.ipilti(s2.ispilti());
s3.stiklinejeYra();
*/

/*
//positioning matters
s1.ipilti(1000);
s2.ipilti(s1.ispilti());
s3.ipilti(s2.ispilti());
*/

s1.stiklinejeYra();
s2.stiklinejeYra();
s3.stiklinejeYra();

//9
class Grybas {
    constructor() {
        this.valgomas = !this.rand(0, 1);
        this.sukirmijes = !this.rand(0, 1);
        this.svoris = this.rand(5, 45);
    }

    rand(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}

class Krepsys {
    constructor() {
        this.dydis = 500;
        this.prikrauta = 0;
    }
    deti(grybas) {
        if(grybas.valgomas && !grybas.sukirmijes) {
            this.prikrauta += grybas.svoris;
        }
        return this.prikrauta < this.dydis;
    }
}

const Kr = new Krepsys();

let count = 0; //tik vizualizacijai
while(Kr.deti(new Grybas())){
    console.log(`grybauju...` + ++count) //tik vizualizacijai
}
console.log(Kr);

