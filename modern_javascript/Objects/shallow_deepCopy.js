// Shallow copy
let user1 = { name: "mush", id: 98 };
let shallowCopy = user1;
shallowCopy.id = 100;
console.log(user1.id);

let user2 = { name: "nawaz", id: 123 };
let shallowCopy2 = Object.assign({}, user2);
shallowCopy2.id = 125;
console.log(shallowCopy2.id);

let user3 = { name: "mush", details: { id: 10 } };
let shallowCopy3 = { ...user3 };
shallowCopy3.details.id = 11;
console.log(shallowCopy3.details.id);

// Deep copy
let avenger1 = { name: "Captain America", star: 5 };
let deepClone1 = JSON.parse(JSON.stringify(avenger1));
deepClone1.star = 4;
console.log(avenger1.star);

let avenger2 = { name: "batman", details: { star: 3 } };
let deepClone2 = JSON.parse(JSON.stringify(avenger2));
deepClone2.details.star = 5;
console.log(avenger2.details.star);