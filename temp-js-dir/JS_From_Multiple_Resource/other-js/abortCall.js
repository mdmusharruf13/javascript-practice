const controller = new AbortController();

const fetchData = async () => {
    setTimeout(() => {
        controller.abort();
    }, 2000);

    await fetch("https://jsonplaceholder.typeicode.com/todos/1", { signal: controller.signal });
}

fetchData();


// check in the browser and use some valid URL