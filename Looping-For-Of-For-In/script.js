// for..of

// Array
// const mhs = ["Ballsky", "Ari", "Miki", "Rasya"];
// for (let i = 0; i < mhs.length; i++) {
//   console.log(mhs[i]);
// }

// mhs.forEach((m) => console.log(m));

// for (const m of mhs) {
//   console.log(m);
// }

// String
// const nama = "Ballsky";
// for (const n of nama) {
//   console.log(n);
// }

// const mhs = ["Ballsky", "Ari", "Miki", "Rasya"];
// mhs.forEach((m, i) => {
//   console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// });

// for (const [i, m] of mhs.entries()) {
//   console.log(`${m} adalah mahasiswa ke - ${i + 1}`);
// }

// Nodelist
// const liNama = document.querySelectorAll(".nama");
// liNama.forEach((n) => console.log(n.innerHTML));
// liNama.forEach((n) => console.log(n.textContent));
// for (n of liNama) {
//   console.log(n.innerHTML);
// }

// Arguments

// function jumlahkanAngka() {
//   //   return [1, 2, 3, 4, 5].reduce((a, i) => a + i);
//   //   argumentsforEach((a) => (jumlah += a));
//   let jumlah = 0;
//   for (a of arguments) {
//     jumlah += a;
//   }
//   return jumlah;
// }
// console.log(jumlahkanAngka(1, 2, 3, 4, 5));

// for..in
const mhs = {
  nama: "Ballsky",
  umur: 23,
  email: "ballsky@gmail.com",
};

for (m in mhs) {
  //   console.log(mhs);
  console.log(mhs[m]);
}
