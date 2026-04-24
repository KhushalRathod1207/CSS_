/*
🟦 1️⃣ Set
✔ Meaning

A Set stores unique values only (no duplicates).
*/

const s = new Set([1, 2, 3, 4, 5, 6]);

console.log(s);
console.log(typeof s)

let arr = [1,2,3,1,2,4,5,6,3,2,5,4,2,5];

let dublicate = [... new Set(arr)];
console.log(dublicate);