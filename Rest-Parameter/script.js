// Rest Parameter

// function myFunction() {
//   return `a=${a}, b= ${b}, myArgs = ${myArgs}`;
//   return myArgs;
//   return Array.from.apply(arguments);
//   return [...arguments];
// }
// console.log(myFunction(1, 2, 3, 4, 5));

// function jumlahkan(...angka) {
//   let total = 0;
//   for (const a of angka) {
//     total += a;
//   }
//   return total;

//   return angka.reduce((a, b) => a + b);
// }
// console.log(jumlahkan(1, 2, 3, 4, 5));

// Array destructuring
// const kelompok1 = ["Ballsky", "Ari", "Miki", "Rasya", "Bagus"];
// const [ketua, wakil, ...anggota] = kelompok1;
// console.log(ketua);

// Object destructuring
// const player = {
//   pm: "Ballsky",
//   frontEnd1: "Ari",
//   frontEnd2: "Miki",
//   backend: "Rasya",
//   ux: "Bagas",
//   devOps: "Bagus",
// };
// const { pm, ...myteam } = player;
// console.log(myteam);

// Filtertering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterBy("string", 1, 2, "Ballsky", false, 10, true, "Ari"));
