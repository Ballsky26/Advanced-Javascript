// Function Expression

// const tampilNama = function (nama) {
//   return `Halo, ${nama}`;
// };

// console.log(tampilNama("Ballsky"));

// const tampilNama = (nama) => {
//   return `Hallo, ${nama}`;
// };
// console.log("Ballsky");

// const tampilNama = (nama, waktu) => {
//   return `Selamat ${waktu}, ${nama}`;
// };
// console.log(tampilNama("Ballsky", "Malam"));

// Implisit return
// Kalo Paramaternya satu gak usah pakai kurung, kecuali paramater lebih dari satu dan gak perlu return dan kurung kurawal
// const tampilNama = (nama) => `Hallo, ${nama}`;
// console.log("Ballsky");

// const tampilNama = () => "Hello World";
// console.log(tampilNama());

let player = ["Ballsky", "Ari", "Miki"];

// let jumlahHuruf = player.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = player.map((nama) => nama.length);
// console.log(jumlahHuruf);

let jumlahHuruf = player.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
console.table(jumlahHuruf);
