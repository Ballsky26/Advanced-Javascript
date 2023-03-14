// Cara muntuk membuat Object pada Javascript
// 1. Object Literal
// let orang1 = {
//   name: "Ballsky",
//   energy: 23,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Hallo ${this.name}, Selamat Makan`);
//   },
// };
// let orang2 = {
//   name: "Fahdil",
//   energy: 24,
//   makan: function (porsi) {
//     this.energy = this.energy + porsi;
//     console.log(`Hallo ${this.name}, Selamat Makan`);
//   },
// };

// 2. Function Declaration
function Player(nama, energi) {
  let player = {};
  player.nama = nama;
  player.energi = energi;

  player.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Hallo ${this.nama}, Selamat Makan`);
  };
  player.main = function (jam) {
    this.energi -= jam;
    console.log(`Hallo ${this.nama}, Selamat Bermain`);
  };
  return player;
}

let ballsky = Player("Ballsky", 10);
let Fahdil = Player("Fahdil", 20);
