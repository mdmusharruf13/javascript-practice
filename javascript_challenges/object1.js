const a = {};

const b = {
    val: 1
};

const c = {
    val: 2
};

a[b] = {
    val: 5
};

a[c] = {
    val: 9
}

console.log(a[b]);