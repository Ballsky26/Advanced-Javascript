// Destructuring Variabel / Assignment

// Destucturing Array

// const perkenalan = ["Halo", "Nama", "saya", "Ballsky"];
// const salam = perkenalan[0];
// const nama = perkenalan[3];
// console.log(nama);
// Skip Item
// const [salam, satu, dua, nama] = perkenalan;
// const [salam, , , nama] = perkenalan;
// console.log(salam);

// Swap items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);
// [a, b] = [b, a];
// console.log(a);
// console.log(b);

// Return value pada function
// function coba() {
//   return [1, 2];
// }

// const [a, b] = coba();
// console.log(a);

// Rest Paramater
// const [a, ...values] = [1, 2, 3, 4, 5];
// console.log(a);
// console.log(values);

// Destructuring Object
// const mhs = {
//   nama: "Ballsky",
//   umur: 23,
// };
// const { nama, umur } = mhs;
// console.log(nama);

// Assigment tanpa deklarasi object
// ({ nama, umur } = { nama: "Ballsky", umur: 23 });
// console.log(nama);

// Assigment ke variabel baru
// const mhs = {
//   nama: "Ballsky",
//   umur: 23,
// };
// const { nama: n, umur: u } = mhs;
// console.log(n);

// Memberikan Default Value
// const mhs = {
//   nama: "Ballsky",
//   umur: 23,
// };
// const { nama, umur, email = "email@default.com" } = mhs;
// console.log(nama);

// Memberi nilai default + assign ke variabel baru
// const mhs = {
//   nama: "Ballsky",
//   umur: 23,
// };
// const { nama: n, umur: u, email: e = "email@default.com" } = mhs;
// console.log(e);

// Rest Paramater
// const mhs = {
//   nama: "Ballsky",
//   umur: 23,
//   email: "ballsky@gmail.com",
// };
// const { nama, ...value } = mhs;
// console.log(value);

// Mengambil Field pada object, setelah dikirim sebagai paramater untuk function
const mhs = {
  id: 123,
  nama: "Ballsky",
  umur: 23,
  email: "ballsky@gmail.com",
};

function getIdMhs({ id }) {
  return id;
}
console.log(getIdMhs(mhs));
