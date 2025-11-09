let counter = 0;

const getData = () => {
    // calling api for data
    console.log("fetching data..", counter++);
}

const debounce = function (fn, delay) {
    let timer;
    return function () {
        let context = this;
        args = arguments;
        console.log(args);
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, delay);
    }
}

const betterFn = debounce(getData, 300);