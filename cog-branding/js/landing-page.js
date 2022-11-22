// Dropdown menu
function dropdownMenu() {
    var dropdown = document.querySelector(".dropdown__field");
    var dropdownItems = document.querySelector(".dropdown__items__list");

    dropdown.addEventListener("click", function (event) {
        dropdownItems.classList.toggle("closed");
        event.stopPropagation();
    });

    window.addEventListener("click", function () {
        dropdownItems.classList.add("closed");
    });

    // dropdownItems.addEventListener("click", function (event) {
    //     event.stopPropagation();
    // });
}

if (dropdownMenu) {
    dropdownMenu();
}
