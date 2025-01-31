const div = document.getElementById("list");

function handleClick(event) {
    event.preventDefault();
    console.log(event.target.innerText);
    console.log(event.target.closest("li"));
}

div.addEventListener("click", handleClick);