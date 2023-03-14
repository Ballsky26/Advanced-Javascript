// Cara muntuk membuat Object pada Javascript
// 1. Object Literal
// PROBLEM : Tidak Efektif untuk object Banyak
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
// const methodPlayer = {
//   makan: function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan`);
//   },
//   main: function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat Bermain`);
//   },

//   tidur: function (jam) {
//     this.energi += jam * 2;
//     console.log(`Hallo ${this.nama}, Selamat Tidur`);
//   },
// };
// function Player(nama, energi) {
//   let player = Object.create(methodPlayer);
//   player.nama = nama;
//   player.energi = energi;

//   return player;
// }

// let ballsky = Player("Ballsky", 10);
// let Fahdil = Player("Fahdil", 20);

// Versi Prototype
function Player(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}
Player.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, Selamat Makan`;
};

Player.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, Selamat Bermain`;
};

Player.prototype.tidur = function (jam) {
  this.energi += jam;
  return `Halo ${this.nama}, Selamat Tidur`;
};
let ballsky = new Player("Ballsky", 10);

// Versi Class
// class Player {
//   constructor(nama, energi) {
//     this.nama = nama;
//     this.energi = energi;
//   }
//   makan(porsi) {
//     this.energi += porsi;
//     return `Halo ${this.nama}, Selamat Makan`;
//   }

//   main(jam) {
//     this.energi -= jam;
//     return `Halo ${this.nama}, Selamat Bermain`;
//   }

//   tidur(jam) {
//     this.energi += jam;
//     return `Halo ${this.nama}, Selamat Tidur`;
//   }
// }

// let ballsky = new Player("Ballsky", 10);
// let Fahdil = new Player("Fahdil", 20);

// let angka = [1, 2, 3];
// console.log(angka.sort());

// 3. Constructor Function
// Keyword New
// function Player(nama, energi) {
//   this.nama = nama;
//   this.energi = energi;

//   this.makan = function (porsi) {
//     this.energi += porsi;
//     console.log(`Hallo ${this.nama}, Selamat Makan`);
//   };
//   this.main = function (jam) {
//     this.energi -= jam;
//     console.log(`Hallo ${this.nama}, Selamat Bermain`);
//   };
// }

// let ballsky = new Player("Ballsky", 10);
