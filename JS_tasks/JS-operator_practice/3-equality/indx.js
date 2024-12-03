let age = prompt("ur age:");

age = Number(age);

let equality2 = (age == 18);
let equality3 = (age === 18);

console.log("with == : " + equality2);
console.log("with === : " + equality3);

if (equality2 === equality3) {
    console.log("bjuj bhal bhal");
} else {
    console.log("mkhtalfin");
}
