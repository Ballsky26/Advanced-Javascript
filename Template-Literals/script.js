// Template Literals /  Template String
// const nama = "Ballsky";
// const umur = 23;
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
// const mhs = {
//   nama: "Ballsky",
//   umur: 23,
//   nim: "18.240.0015",
// };

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="nrp">${mhs.nim}</span>
//   </div>`;
// console.log(el);

// Tagged Templates
// const nama = "Ballsky";
// const umur = 23;

// function coba(strings, ...values) {
//   // let result = "";
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ""}`;
//   // });
//   // return result;

//   return strings.reduce(
//     (result, str, i) => `${result}${str}${values[i] || ""}`,
//     ""
//   );
// }

// const str = coba`Halo, nama saya ${nama}, saya berumur ${umur} tahun.`;
// console.log(str);

// Highlight
const nama = "Ballsky";
const umur = 23;
const email = "Ballsky@gmail.com";

function highlight(strings, ...values) {
  return strings.reduce(
    (result, str, i) =>
      `${result}${str}<span class="hl">${values[i] || ""}</span>`,
    ""
  );
}

const str = highlight`Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan email saya adalah : ${email}`;
document.body.innerHTML = str;
