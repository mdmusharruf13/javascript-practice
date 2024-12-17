setTimeout(() => {
    console.log("this runs after 2 seconds");
}, 2000);

// async operation
function fetchData(callback) {
    setTimeout(() => {
        callback("data loaded")
    }, 1000);
}

fetchData((msg) => console.log(msg));
