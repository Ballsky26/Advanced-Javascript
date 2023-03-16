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

// let player = ["Ballsky", "Ari", "Miki"];

// let jumlahHuruf = player.map(function (nama) {
//   return nama.length;
// });
// console.log(jumlahHuruf);

// let jumlahHuruf = player.map((nama) => nama.length);
// console.log(jumlahHuruf);

// let jumlahHuruf = player.map((nama) => ({ nama: nama, jmlHuruf: nama.length }));
// console.table(jumlahHuruf);

// Konsep This pada Arrow Function

// Constructor Function
// const Player = function () {
//   this.nama = "Ballsky";
//   this.nomor = 26;
//   this.sayHello = function () {
//     console.log(
//       `Hallo, Nama saya ${this.nama}, dan nomor Balap saya ${this.nomor}`
//     );
//   };
// };

// const ballsky = new Player();

// Arrow Function
// const Player = function () {
//   this.nama = "Ballsky";
//   this.nomor = 26;
//   this.sayHello = () => {
//     console.log(
//       `Hallo, Nama saya ${this.nama}, dan nomor Balap saya ${this.nomor}`
//     );
//   };
// };

// const ballsky = new Player();

// Object Literal

// const player1 = {
//   nama: "Ballsky",
//   nomor: 26,
//   sayHello: () => {
//     console.log(
//       `Hallo, Nama saya ${this.nama}, dan nomor Balap saya ${this.nomor}`
//     );
//   },
// };

// const Player = function () {
//   this.nama = "Ballsky";
//   this.nomor = 26;
//   this.sayHello = function () {
//     console.log(
//       `Hallo, Nama saya ${this.nama}, dan nomor Balap saya ${this.nomor}`
//     );
//   };
//   setInterval(() => {
//     console.log(this.nomor++);
//   }, 500);
// };
// const ballsky = new Player();

const box = document.querySelector(".box");
box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [dua, satu];
  }
  this.classList.toggle(satu);
  setTimeout(() => {
    this.classList.toggle(dua);
  }, 600);
});
