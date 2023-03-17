// Destructuring Function return value

// function kalkulasi(a, b) {
//   return [a + b, a - b, a * b, a / b];
// }

// const jumlah = penjumlahanPerkalian(2, 3)[0];
// const kali = penjumlahanPerkalian(2, 3)[1];
// console.log(kali);

// const [jumlah, kali] = penjumlahanPerkalian(2, 3);
// console.log(kali);

// const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
// console.log(bagi);

// const [tambah, kurang, kali, bagi = "tidak ada"] = kalkulasi(2, 3);
// console.log(bagi);

// Urutan tidak berpengaruh
// function kalkulasi(a, b) {
//   return {
//     tambah: a + b,
//     kurang: a - b,
//     kali: a * b,
//     bagi: a / b,
//   };
// }

// const { bagi, kurang, kali, tambah } = kalkulasi(2, 3);
// console.log(kurang);

// Destructuring Function arguments
// const mhs1 = {
//   nama: "Ballsky",
//   umur: 23,
//   email: "ballsky@gmail.com",
// };

// function cetakMhs(nama, umur) {
//   return `Hallo, nama saya ${nama} dan umur saya adala ${umur}`;
// }

// console.log(cetakMhs(mhs1.nama, mhs1.umur));

// Atau
// const mhs1 = {
//   nama: "Ballsky",
//   umur: 23,
//   email: "ballsky@gmail.com",
// };

// function cetakMhs(mhs) {
//   return `Hallo, nama saya ${mhs.nama} dan umur saya adala ${mhs.umur}`;
// }

// console.log(cetakMhs(mhs1));
const mhs1 = {
  nama: "Ballsky",
  umur: 23,
  email: "ballsky@gmail.com",
  nilai: {
    tugas: 90,
    uts: 89,
    uas: 98,
  },
};
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Hallo, nama saya ${nama} dan umur saya adala ${umur} dan nilai uas saya adalah ${uas}`;
}
console.log(cetakMhs(mhs1));
