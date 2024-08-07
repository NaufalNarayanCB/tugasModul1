let sukuPertama = 4;
let rasio = 3;
let jumlahSuku = 10;
let jumlah = 0;

for (let i = 0; i < jumlahSuku; i++) {
    jumlah += sukuPertama * Math.pow(rasio, i);
}

console.log("Jumlah 10 suku pertama: "+ jumlah);