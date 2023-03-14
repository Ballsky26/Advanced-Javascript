// function init() {
//   //   let nama = "Ballsky";
//   return function (nama) {
//     console.log(nama);
//   };
// }
// let panggilNama = init();
// panggilNama("Ballsky");
// panggilNama("Ari");

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Hallo ${nama}, Selamat ${waktu}, Semoga Harimu menyenangkan`);
//   };
// }

// let selamatPagi = ucapkanSalam("Pagi");
// let selamatSiang = ucapkanSalam("Siang");
// let selamatSore = ucapkanSalam("Sore");
// let selamatMalam = ucapkanSalam("Malam");

// selamatPagi("Ballsky");
// selamatSiang("Ari");
// selamatSore("Rasya");
// selamatMalam("Aldi");

// console.dir(selamatMalam("Ballsky"));

let add = (function () {
  let counter = 0;
  return function () {
    return ++counter;
  };
})();

counter = 100;
console.log(add());
console.log(add());
console.log(add());
console.log(add());
