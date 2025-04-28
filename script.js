// for...of
// const names = ["anna", "petro", "olena", "ivan"];
// for (const name of names) {
//   console.log(name.toUpperCase());
// }
// result;
// ANNA;
// PETRO;
// OLENA;
// IVAN;

// for...in

// const user = {
//   name: "Olena",
//   age: 28,
//   city: "Kyiv",
// };

// for (const data in user) {
//   console.log(`${data}: ${user[data]}`);
// }
// result;
// name: Olena;
// age: 28;
// city: Kyiv;

// // Задача 3: for...in + for...of
// const groups = {
//   frontend: ["Anna", "Petro"],
//   backend: ["Ivan", "Olha"],
//   desine: ["Dmutro"],
// };
// for (const group in groups) {
//   console.log(`${group}`);
//   for (const student of groups[group]) {
//     console.log(` - ${student}`);
//   }
// }
// result;
// frontend
// - Anna
// - Petro
// backend
// - Ivan
// - Olha
// desine
// - Dmutro
