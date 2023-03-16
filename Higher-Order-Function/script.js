// Higher Order Function

// function kerjakanTugas(mataKuliah, selesai) {
//   console.log(`Mulai Mengerjakan Tugas ${mataKuliah}`);
//   selesai();
// }

// function selesai() {
//   alert("Selesai mengerjakan Tugas");
// }

// kerjakanTugas("Pemprograman Web 4", selesai);

// const tombol = document.querySelector(".submit");
// tombol.addEventListener("click", function () {
//   console.log("Jangan Di Tekan");
// });

// function ucapkanSalam(waktu) {
//   return function (nama) {
//     console.log(`Halo ${nama}, Selamat ${waktu}, Semoga Harimu Menyenangkan`);
//   };
// }

// let selamatMalam = ucapkanSalam("Malam");

// console.dir(selamatMalam("Ballsky"));

// let total = 0,
//   count = 1;
// while (count <= 10) {
//   total += count;
//   count += 1;
// }
// console.log(total);

// function repeatLog(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(i + 1);
//   }
// }

// repeatLog(10);

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(10, console.log);
repeat(3, alert);
