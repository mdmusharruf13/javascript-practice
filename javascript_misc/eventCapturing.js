const elementIds = ["div", "form", "click-btn"];

const [div, form, button] = elementIds.map(name => document.getElementById(name));

function handleClick(event) {
    event.preventDefault();
    console.log(`current element : ${this.tagName}`)
}

div.addEventListener("click", handleClick, true);
form.addEventListener("click", handleClick, true);
button.addEventListener("click", handleClick, true);
