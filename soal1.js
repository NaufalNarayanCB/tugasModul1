let panjang = 20.5;
let lebar = 30;
let hargaPermeter = 1500000;


let luasTanah = panjang * lebar;
let totalHarga = luasTanah * hargaPermeter;


let ppn = totalHarga * 0.15;
let totalHargaSetelahppn = totalHarga + ppn;

console.log ("luasTanah: " + luasTanah + " m² ")
console.log ("Total Harga  yang harus dibayar : Rp " + totalHargaSetelahppn.toLocaleString())
