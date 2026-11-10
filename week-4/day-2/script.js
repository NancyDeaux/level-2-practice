// Week 4 Day 2 warm-up — Bootstrap cards made by JavaScript (about 20 minutes)
// JavaScript can add Bootstrap classes too. className sets an element's classes.

// TODO first: change this to YOUR truck's menu.
const menu = [
  { name: "Matcha Chicory Tiramisu", price: 8.5},
  { name: "Pistachio Lavender Latte", price: 6 },
  { name: "Banana Bread Cold Brew", price: 7.5 },
];

const area = document.getElementById("card-area");

// ---------- Step 1 ----------
// TODO: Use forEach to make a card for EVERY menu item, showing its name and price.
// Then delete the example card code above.
const card2 = document.createElement("div");
card2.className = "card p-3";
card2.textContent = "Sip Happens";
area.appendChild(card2);

menu.forEach(function (item) {
  const itemCard = document.createElement("div");
  itemCard.className = "card p-3 text-center shadow-sm";
  itemCard.textContent = item.name + ": $" + item.price;
  area.appendChild(itemCard);
});

// ---------- Step 2 ----------
// TODO: Add more Bootstrap classes to each card, for example:
//   "card p-3 text-center border-primary"   or   "card p-3 bg-light shadow-sm"
// Save and watch the page change.


// ---------- Extra practice (if you finish early) ----------
// Give cheap items (under $5) a different class than the others. (forEach + if)
