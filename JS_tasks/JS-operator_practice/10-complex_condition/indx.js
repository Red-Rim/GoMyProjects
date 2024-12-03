let age = prompt("ur age:");
let member = prompt("r u a member (true/false)");

if (age < 18 || member === 'true') {
    console.log("discount granted");
} else {
    console.log("no discount available");
}
