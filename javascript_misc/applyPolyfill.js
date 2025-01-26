Function.prototype.myApply = function (context, arr) {
    if (typeof this !== 'function') {
        throw new Error(this + " is not callable");
    }

    if (!Array.isArray(arr)) {
        throw new TypeError("CreateListFromArrayLike called on non-object");
    }

    context.fn = this;
    context.fn(...arr);
}

function getStudentResult(arr) {
    let totalMarks = arr.reduce((total, curr) => total + curr);
    console.log(`${this.name} got ${totalMarks}`);
}

let std1 = {
    name: "mush"
}

getStudentResult.myApply(std1, [[16, 20, 15, 19, 19]]);