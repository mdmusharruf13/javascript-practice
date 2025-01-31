const div = document.getElementById("div");
const form = document.getElementById("form");
const btn = document.getElementById("click-btn");

div.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("div");
});
form.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("form");
});
btn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log("button");
});


div.addEventListener("click", handleClick);
form.addEventListener("click", handleClick);
btn.addEventListener("click", handleClick);

function handleClick(e) {
    console.log(`currentTarget-${e.currentTarget.tagName}, target-${e.target.tagName}`);
    e.preventDefault();
} 