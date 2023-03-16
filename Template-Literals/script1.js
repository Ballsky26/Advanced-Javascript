// 1. HTML Fragments
// const mhs = {
//   nama: "Ballsky",
//   umur: 23,
//   nim: "18.240.0015",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nim}</span>
//   </div>`;

// 2. Looping
// const mhs = [
//   {
//     nama: "Ballsky",
//     email: "Ballsky@gmail.com",
//   },
//   {
//     nama: "Ballsky1",
//     email: "Ballsky1@gmail.com",
//   },
//   {
//     nama: "Ballsky2",
//     email: "Ballsky2@gmail.com",
//   },
// ];
// const el = `<div class="mhs">
//  ${mhs
//    .map(
//      (m) => `<ul>
//  <li>${m.nama}</li>
//  <li>${m.email}</li>
//  </ul>`
//    )
//    .join("")}
//   </div>`;

// 3. Conditionals
// ternary
// const lagu = {
//   judul: "Tetap dalam jiwa",
//   penyayi: "Ari",
//   feat: "Miki",
// };
// const el = `<div class="lagu">
// <ul>
// <li>${lagu.penyayi}</li>
// <li>${lagu.judul} ${lagu.feat ? `(feat.${lagu.feat})` : ""}</li>
// </ul>
// </div>`;

// 4. Nested
// HTML Fragments bersarang

function cetakMataKuliah(mataKuliah) {
  return `
    <ol>
    ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
    </ol>
    `;
}
const mhs = {
  nama: " Ballsky",
  semester: 5,
  mataKuliah: ["RPL", "Analisis", "WEB", "Mobile", "Algoritma"],
};
const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="semester">Semester : ${mhs.semester}</span>
<h4>Mata Kuliah : </h4>
${cetakMataKuliah(mhs.mataKuliah)}
</div>`;
document.body.innerHTML = el;
