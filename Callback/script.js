// Callback
// Synchrounous Callback

// function halo(nama) {
//   alert(`Halo, ${nama}`);
// }

// function tampilkanPesan(callback) {
//   const nama = prompt("Masukkan Nama : ");
//   callback(nama);
// }
// tampilkanPesan((nama) => alert(`Hallo, ${nama}`));

// const mhs = [
//   {
//     nama: "Ballsky",
//     nim: "18.240.0015",
//     email: "ballsky@gmail.com",
//     jurusan: "Teknik Informatika",
//     idmahasiswa: 1,
//   },
//   {
//     nama: "Fadil",
//     nim: "18.240.0077",
//     email: "fahdil@gmail.com",
//     jurusan: "Teknik Informatika",
//     idmahasiswa: 2,
//   },
//   {
//     nama: "Ari",
//     nim: "18.240.0049",
//     email: "ari@gmail.com",
//     jurusan: "Teknik Informatika",
//     idmahasiswa: 3,
//   },
// ];
// console.log("mulai");
// mhs.forEach((m) => {
//   for (let i = 0; i < 100000; i++) {
//     let date = new Date();
//   }
//   console.log(m.nama);
// });
// console.log("selesai");

// Asynchronous Callback
// function getDataMahasiswa(url, success, error) {
//   let xhr = new XMLHttpRequest();
//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         success(xhr.response);
//       } else if (xhr.status === 404) {
//         error();
//       }
//     }
//   };
//   xhr.open("get", url);
//   xhr.send();
// }

// console.log("mulai");
// getDataMahasiswa(
//   "data/mahasiswa.json",
//   (results) => {
//     const mhs = JSON.parse(results);
//     mhs.forEach((m) => console.log(m.nama));
//     // console.log(JSON.parse(results));
//   },
//   () => {}
// );
// console.log("selesai");

// JQuery
console.log("mulai");
$.ajax({
  url: "data/mahasiswa.json",
  success: (mhs) => {
    mhs.forEach((m) => console.log(m.nama));
  },
  error: (e) => {
    console.log(e.responseText);
  },
});
console.log("selesai");
