class Senelis {
    constructor() {
        this.name = 'Bronius';
    }
    miegoti() {
        console.log('zzz...')
    }
}

class Tevas extends Senelis {
    constructor() {
        super();
        this.name = 'Kazys';
    }
    barti() {
        console.log('nu nu nu...')
    }
}

class Vaikutis extends Tevas { // tevas ismokino vaika 'barti'
    constructor() {
        super();
        this.name = 'Petras';
    }

    bliauti() {
        console.log('Beeeee...')
    }
}

const v = new Vaikutis();
const t = new Tevas();
const s = new Senelis();


console.log(s.name);
console.log(t.name);
console.log(v.name);
console.log(s.name, t.name, v.name);

v.bliauti();
t.barti();
v.barti(); // tevas ismokino vaika barti
t.miegoti();

document.querySelector('button')
.addEventListener('click', () => {
    v.barti();
})