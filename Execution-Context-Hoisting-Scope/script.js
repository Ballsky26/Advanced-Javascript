// 2.1 Execution Context Hoisting Scope
// var nama = "Syaiful Iqbal";
// console.log(nama);

// Creation Phase pada Global Context
// nama var = undefined
// nama function = fn()
// Hoisting
// Window = global object
// this = window

// execution phase

// var nama = "Ballsky";
// var umur = 23;

// console.log(sayHello());
// function sayHello() {
//   return `Hallo, Nama saya ${nama}, saya berumur ${umur}`;
// }

// Function membuat local Local Execution Context
// yang di dalamnya terdapat creation dan execution phase
// windows
// arguments
// hoisting

// var nama = "Ballsky";
// var username = "@Ballsky";

// function cetakURL(username) {
//   var instagramURL = "https://instagram.com/";
//   return instagramURL + username;
// }
// console.log(cetakURL(username));

// var nama = "Ballsky";
// var username = "@Ballsky";

// function cetakURL() {
//   console.log(arguments[0]);
//   var instagramURL = "https://instagram.com/";
//   return instagramURL + username;
// }
// console.log(cetakURL("@Fahdil", "@Anjay"));

// function a() {
//   console.log("ini a");
//   function b() {
//     console.log("ini b");
//     function c() {
//       console.log("ini c");
//     }
//     c();
//   }
//   b();
// }
// a();

function satu() {
  var nama = "Iqbal";
  console.log(nama);
}

function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "Ari";
satu();
dua("Miki");
console.log(nama);
