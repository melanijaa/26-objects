//1
class Kibiras1 {
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

const kibiras = new Kibiras1();
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

