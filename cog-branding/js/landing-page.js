// Dropdown menu
function dropdownMenu() {
    var dropdown = document.querySelector(".dropdown__field");
    var dropdownItems = document.querySelector(".dropdown__items__list");

    dropdown.addEventListener("click", function (event) {
        dropdownItems.classList.toggle("open");
        // event.stopPropagation();
    });

    window.onclick = function (event) {
        if (!event.target.matches(".dropdown")) {
            if (dropdownItems.classList.contains("open")) {
                dropdownItems.classList.remove("open");
            }
        }
    };

    // window.addEventListener("click", function () {
    //     dropdownItems.classList.add("closed");
    // });

    // dropdownItems.addEventListener("click", function (event) {
    //     event.stopPropagation();
    // });
}

if (dropdownMenu) {
    dropdownMenu();
}
