// Dropdown menu
document.addEventListener("DOMContentLoaded", (event) => {
    function dropdownMenu() {
        var dropdown = document.querySelector(".dropdown__field");
        var dropdownItems = document.querySelector(".dropdown__items__list");

        if (dropdown) {
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
        }

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

    var dropdownField = document.querySelector(".dropdown__field");

    if (dropdownField != null && dropdownField != undefined) {
        dropdownMenu();
    }

    function updatePostMoreText() {
        var postButton = document.querySelector(".sec-blog__posts .g1-button");

        if (postButton) {
            for (let i = 0; i < postButton.clientHeight; i++) {
                postButton[i].innerHTML = "Read more";
            }
        }
    }

    var postButtonText = document.querySelector(".sec-blog__posts .g1-button");

    if (postButtonText != null && postButtonText != undefined) {
        updatePostMoreText();
    }
});
