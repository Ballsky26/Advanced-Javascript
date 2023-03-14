// Cara muntuk membuat Object pada Javascript
// 1. Object Literal
let orang1 = {
  name: "Ballsky",
  energy: 23,
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    console.log(`Hallo ${this.name}, Selamat Makan`);
  },
};
let orang2 = {
  name: "Fahdil",
  energy: 24,
  makan: function (porsi) {
    this.energy = this.energy + porsi;
    console.log(`Hallo ${this.name}, Selamat Makan`);
  },
};
