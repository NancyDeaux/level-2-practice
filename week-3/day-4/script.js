// Day 4 — Loops: practice the for loop
// A loop runs the same code once for every item in a list.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change ONE thing.

// First: replace this menu with YOUR truck's menu (keep the same shape).
const menu = [
  {"name": "Matcha Chicory Tiramisu", "price": "$8.50"},
  {"name": "Pistachio Lavender Latte", "price": "$6"},
  {"name": "Banana Bread Cold Brew", "price": "$7.50"},
  {"name": "Pandan Beignet Bites", "price": "$5.50"}
];


// ---------- Step 1: Log every price ----------
// EXAMPLE: log every item's NAME.
// i is a counter: 0, then 1, then 2... menu[i] is the item at that spot.
for (let i = 0; i < menu.length; i++) {
  console.log(menu[i].name);
}

// TODO: Write a for loop that logs every item's PRICE.


// ---------- Step 2: forEach ----------
// Same job, shorter to write. forEach hands you each item, one at a time.
// Example:
menu.forEach(function (item) {
  console.log("forEach:", item.name);
});

// TODO: Use forEach to log a sentence for each item, like "Taco costs $4.5".


// ---------- Step 3: Put the menu on the page ----------
// Example: one item, made safely with createElement + textContent.
const list = document.getElementById("menu-list");
const exampleLi = document.createElement("li");
exampleLi.textContent = "Example: " + menu[0].name;
list.appendChild(exampleLi);

// TODO: Use forEach to add an <li> for EVERY menu item, showing its name and price.
// Then delete the example <li> code above.


// ---------- Step 4: A loop that adds up ----------
// TODO: Use a for loop to add up every price into a total. Log the total.
// Hint: start with  let total = 0;  then add each price inside the loop.


// ---------- Extra (if you finish early): only SOME items ----------
// EXAMPLE: logs only the items that cost LESS than $5.
// The if is a gate: the loop still visits every item,
// but only the cheap ones get through to console.log.
for (let i = 0; i < menu.length; i++) {
  if (menu[i].price < 5) {
    console.log("Cheap:", menu[i].name);
  }
}

// YOUR TURN: log only the items that cost MORE than $5, like "Fancy: Burrito".
// Change: < → >   and   "Cheap:" → "Fancy:"
