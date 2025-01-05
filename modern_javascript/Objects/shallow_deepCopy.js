// Shallow copy
// Example 1 - Referencing 
console.log("Example 1:");
let user1 = { name: "mush", id: 98 };
let shallowCopy = user1;

shallowCopy.id = 100;
console.log(user1.id, shallowCopy.id);

user1.id = 2500;
console.log(user1.id, shallowCopy.id);


// Example 2 - shallow copy
console.log("Example 2:")
let user2 = { name: "nawaz", id: 123, address: { city: 'hyd' } };
let shallowCopy2 = Object.assign({}, user2);

console.log(user2.id, shallowCopy2.id);

shallowCopy2.id = 125;
console.log(user2.id, shallowCopy2.id);

user2.id = 198;
console.log(user2.id, shallowCopy2.id);

console.log(user2.address, shallowCopy2.address);

user2.address.city = "hyderabad";
console.log(user2.address, shallowCopy2.address);

shallowCopy2.address.city = "HYD";
console.log(user2.address, shallowCopy2.address);


// Example 3 - shallow copy
console.log("Example 3:")
let user3 = { name: "mush", details: { id: 10 } };
let shallowCopy3 = { ...user3 };

console.log(user3.details, shallowCopy3.details);

user3.details.id = 11;
console.log(user3.details, shallowCopy3.details);

shallowCopy3.details.id = 15;
console.log(user3.details, shallowCopy3.details);


// Deep copy
let avenger1 = { name: "Captain America", star: 5 };
let deepClone1 = JSON.parse(JSON.stringify(avenger1));
deepClone1.star = 4;
console.log(avenger1.star);

let avenger2 = { name: "batman", details: { star: 3 } };
let deepClone2 = JSON.parse(JSON.stringify(avenger2));
deepClone2.details.star = 5;
console.log(avenger2.details.star);