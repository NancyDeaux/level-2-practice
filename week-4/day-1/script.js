// Week 4 Day 1 warm-up — map review (about 20 minutes)
// Friday you used map. Today: map turns menu OBJECTS into labels you can show.

// TODO first: change this to YOUR truck's menu.
const truckMenu = [
  { name: "Matcha Chicory Tiramisu", price: 8.5 },
  { name: "Pistachio Lavender Latte", price: 6 },
  { name: "Banana Bread Cold Brew", price: 7.5 },

];


// ---------- Example ----------
// map makes a NEW list. Whatever you return goes into it.
const names = truckMenu.map(function (item) {
  return item.name;
});
console.log("names:", names);   // ["Taco", "Burrito", "Nachos"]


// ---------- Step 1 ----------
// TODO: Use map to make a new list called labels, like "Taco — $4.50".
// Hint: item.price.toFixed(2) shows two decimal places.
const labels = truckMenu.map(function (item) {
  return '${item.name} - $${item.price.toFixed(2)}';
});
console.log("labels:", labels);   // ["Matcha Chicory Tiramisu", "Pistachio Lavender", "Banana Bread Cold Brew"]


// ---------- Step 2 ----------
// TODO: Use forEach to show every label on the page as an <li> in #menu-list.
// (createElement, textContent, appendChild — same as last week.)
labels.forEach(function (label) {
  const li = document.createElement("li");
  li.textContent = label;
  document.querySelector("menu-list").appendChild(li);
});


// ---------- Extra practice (if you finish early) ----------
// 1. Use map to make a list of prices only. Then add them up with a for loop.
// 2. Use map to make every name UPPERCASE (hint: .toUpperCase()).
