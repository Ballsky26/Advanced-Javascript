// Template Literals /  Template String
const nama = "Ballsky";
const umur = 23;
// console.log(`Hallo, nama saya adalah ${nama}, dan saya umur ${umur} tahun.`);
// console.log(
//   "Hallo, nama saya adalah " + nama + ", dan saya berumur " + umur + " tahun."
// );

// Embedded Expression
// console.log(`${1 + 1}`);
// console.log(`${alert("Hallo!")}`);

// const x = 10;
// console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments
const mhs = {
  nama: "Ballsky",
  umur: 23,
  nim: "18.240.0015",
};

const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span>${mhs.nim}</span>
</div>`;
console.log(el);
