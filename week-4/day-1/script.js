// Week 4 Day 1 — forEach: a shorter way to loop
// forEach runs a function once for every item. No counter, no i.
//
// Every step works the same way:
//   1. Read the EXAMPLE. Save, and see what it does.
//   2. Copy it under YOUR TURN.
//   3. Change what the comment says.

// TODO first: change this to YOUR truck's menu.
const menu = [
  { name: "Taco", price: 4.5 },
  { name: "Burrito", price: 9 },
  { name: "Nachos", price: 6.25 },
];


// ---------- Example ----------
// map makes a NEW list. Whatever you return goes into it.
const names = menu.map(function (item) {
  return item.name;
});
console.log("names:", names);   // ["Taco", "Burrito", "Nachos"]


// ---------- Step 1 ----------
// TODO: Use map to make a new list called labels, like "Taco — $4.50".
// Hint: item.price.toFixed(2) shows two decimal places.


// ---------- Step 2 ----------
// TODO: Use forEach to show every label on the page as an <li> in #menu-list.
// (createElement, textContent, appendChild — same as last week.)


// ---------- Extra practice (if you finish early) ----------
// 1. Use map to make a list of prices only. Then add them up with a for loop.
// 2. Use map to make every name UPPERCASE (hint: .toUpperCase()).
