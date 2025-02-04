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

// method extraction
const obj = {
    value: 42,
    getValue() {
        return this.value;
    }
}

const obj2 = {
    value: 100,
}

const extracted = obj.getValue;

console.log(extracted());
console.log(obj.getValue());
console.log(extracted.call(obj2));

// Note: When the method `getValue` is extracted from the `obj`, it loses its binding to the original object

console.log(Object.seal(obj2));

delete obj2.value;
console.log(obj2);

obj2.val = 525;
console.log(obj2)