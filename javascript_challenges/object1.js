const a = {};
const b = {
    val: 1
};

const c = {
    val: 2
};

a[JSON.stringify(b)] = {
    val: 5
};

a[b] = {
    val: 5
};
a[c] = {
    val: 9
}

console.log(a[b]);
console.log(a[JSON.stringify(b)]);

const magicObj = { a: 1, b: 2 };

const transform = (obj) => {
    obj.a = 3;
    return { ...obj, b: 4 };
}

const newObj = transform(magicObj);
console.log(magicObj, newObj);