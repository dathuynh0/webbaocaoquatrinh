function show(id) {
  const list = document.getElementById(id);
  list.classList.toggle("active");
}

// const desc = document.querySelectorAll(".desc");

// for (let d of desc) {
//   const list = document.querySelectorAll(".list");
//   d.addEventListener("click", function () {
//     removeActive();

//     for (let l of list) {
//       l.classList.toggle("active");
//     }
//   });
// }

// function removeActive() {
//   const list = document.querySelectorAll(".list");
//   for (let l of list) {
//     l.classList.remove("active");
//   }
// }
