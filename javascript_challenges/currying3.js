function updateElementText(id) {
    return function (content) {
        document.querySelector("#" + id).textContent = content;
    };
}

const updateParagraph = updateElementText("para");
const inputElement = document.getElementById("input");

inputElement.addEventListener("input", function () {
    updateParagraph(inputElement.value.toUpperCase());
});