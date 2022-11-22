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

    dropdown.addEventListener("click", function (event) {
        event.stopPropagation();
    });

    // Alternate method
    // window.addEventListener("click", function (elem) {
    //     if (elem.path[0].classList.contains("open")) {
    //         elem.stopPropagation();
    //     } else if (elem.path[0].classList.contains("dropdown__field")) {
    //         dropdownItems.classList.remove("closed");
    //         dropdownItems.classList.add("open");
    //     } else {
    //         dropdownItems.classList.add("closed");
    //         dropdownItems.classList.remove("open");
    //     }
    // });
}

if (dropdownMenu) {
    dropdownMenu();
}
