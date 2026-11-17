// Week 4 Day 2 — createElement: JavaScript makes new elements
// Until now, JavaScript only changed elements that were already in the HTML.
// Today it MAKES new ones: a Bootstrap card for every item on your menu.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change what the comment says.

// First: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
  { name: "Matcha Chicory Tiramisu", price: 8.5},
  { name: "Pistachio Lavender Latte", price: 6 },
  { name: "Banana Bread Cold Brew", price: 7.5 },
];

// getElementById finds ONE element by its id. Same job as querySelector("#card-area"),
// but it only works with ids, so there's no # in the quotes.
const area = document.getElementById("card-area");


// ---------- Example: ONE card ----------
const card = document.createElement("div");
card.className = "card p-3";          // Bootstrap classes, set from JavaScript
card.textContent = menu[0].name;
area.appendChild(card);


// ---------- Step 1 ----------
// TODO: Use forEach to make a card for EVERY menu item, showing its name and price.
// Then delete the example card code above.


// ---------- Step 2 ----------
// TODO: Add more Bootstrap classes to each card, for example:
//   "card p-3 text-center border-primary"   or   "card p-3 bg-light shadow-sm"
// Save and watch the page change.


// ---------- Extra (if you finish early): cheap items stand out ----------
// Inside forEach, give items under $5 a different className than the others.
// You need an if / else:
//   if (item.price < 5) { ...one className... } else { ...another className... }
// Try "card p-3 bg-success-subtle" for the cheap ones.
