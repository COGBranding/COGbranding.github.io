// Dropdown menu
function dropdownMenu() {
    var dropdown = document.querySelector(".dropdown__field");
    var dropdownItems = document.querySelector(".dropdown__items__list");

    dropdown.addEventListener("click", function () {
        dropdownItems.classList.toggle("closed");
    });

    window.addEventListener("click", function () {
        dropdownItems.classList.add("closed");
    });

    dropdownItems.addEventListener("click", function (event) {
        event.stopPropagation();
    });
}

if (dropdownMenu) {
    dropdownMenu();
}
