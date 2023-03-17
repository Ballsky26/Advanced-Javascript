// Spread Operator
// memecah iterables menjadi single element

// Menggabungkan 2 Array
// const mhs = ["Ballsky", "Ari", "Miki"];
// const dosen = ["Rasya", "Bagas", "Bagus"];
// const orang = [...mhs, "Aji", ...dosen];
// // console.log(...mhs[0]);
// // const orang = mhs.concat(dosen);
// console.log(orang);

// Mengcopy array
// const mhs = ["Ballsky", "Ari", "Miki"];
// // const mhs1 = mhs;
// const mhs1 = [...mhs];
// mhs1[0] = "Fajar";
// console.log(mhs);

// const liMhs = document.querySelectorAll("li");
// console.log(liMhs[0].textContent);
// const mhs = [];
// for (let i = 0; i < liMhs.length; i++) {
//   mhs.push(liMhs[i].textContent);
// }
// console.log(mhs);

// const mhs = [...liMhs].map((m) => m.textContent);
// console.log(mhs);

const nama = document.querySelector(".nama");
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");
console.log(huruf);
nama.innerHTML = huruf;
