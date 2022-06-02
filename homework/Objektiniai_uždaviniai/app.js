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