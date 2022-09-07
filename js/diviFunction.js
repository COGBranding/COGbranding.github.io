console.log("diviFunction is working");

// Current Year HTML
function currentYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// open all external links and pdfs on new tabs
$(document).ready(function (e) {
    $("a").each(function () {
        var a = new RegExp("/" + window.location.host + "/");
        if (!a.test(this.href)) {
            $(this).click(function (event) {
                event.preventDefault();
                event.stopPropagation();
                window.open(this.href, "_blank");
            });
        }
        $('a[href$=".pdf"]').attr("target", "_blank");
    });
});

// Phone Icon in Menu
function menuPhone(phone_num) {
    let div = document.createElement("div");
    div.classList.add("menu-item", "phone-icon");
    let phoneIcon = '<a href="tel:' + phone_num + '"></a>';
    div.innerHTML = phoneIcon;
    document.getElementById("et_mobile_nav_menu").prepend(div);
    // var classArray = ["menu-item", "phone-icon"];
    // div = divFunction(phoneIcon, classArray);
    // document.getElementById("et_mobile_nav_menu").prepend(div);
}

// Sticky mobile header
function stickyMobileHeader(mobile_breakpoint) {
    let mobileHeader = document.getElementById("main-header");
    if (window.innerWidth <= mobile_breakpoint) {
        mobileHeader.classList.add("p-fixed");
    }
}

// Add dropdowns to mobile menu
function mobileMenuDropdown() {
    $(document).ready(function () {
        $(
            "body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children"
        ).append('<a href="#" class="mobile-toggle"></a>');
        $(
            "ul.et_mobile_menu li.menu-item-has-children .mobile-toggle, ul.et_mobile_menu li.page_item_has_children .mobile-toggle"
        ).click(function (event) {
            event.preventDefault();
            $(this).parent("li").toggleClass("dt-open");
            $(this)
                .parent("li")
                .find("ul.children")
                .first()
                .toggleClass("visible");
            $(this)
                .parent("li")
                .find("ul.sub-menu")
                .first()
                .toggleClass("visible");
        });
        iconFINAL = "P";
        $(
            "body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children"
        ).attr("data-icon", iconFINAL);
        $(".mobile-toggle")
            .on("mouseover", function () {
                $(this).parent().addClass("is-hover");
            })
            .on("mouseout", function () {
                $(this).parent().removeClass("is-hover");
            });

        //close the opened dropdown if another is opened
        $(".menu-item-has-children").on("click", function (e) {
            //prevents default action
            e.preventDefault();
            // checks and stores whether selected element is open or not
            var ooc = $(this).hasClass("dt-open");
            //closes all dropdowns
            $(".menu-item-has-children").removeClass("dt-open");
            $(".menu-item-has-children").find("ul").removeClass("visible");
            //opens the current element if its closed. closes it if its open
            if (!ooc) {
                $(this).removeClass("dt-open");
                $(this).find("ul").removeClass("visible");
            } else {
                $(this).addClass("dt-open");
                $(this).find("ul").addClass("visible");
            }
        });
    });
}

// Main Header Styling
function mainHeaderStyle() {
    const headerStyle = document.getElementById("et-top-navigation");
    const mobileHeaderStyle = document.getElementById("et_mobile_nav_menu");
    headerStyle.classList.add("header__desktop");
    mobileHeaderStyle.classList.add("header__mobile");
}

// Fullscreen Header Styling
function fullscreenHeaderStyle() {
    const fullHeaderStyle = document.getElementById("et-top-navigation");
    fullHeaderStyle.classList.add("header__fullscreen");
}

//function for arrow follow mouse
function mouseFollowArrow() {
    var body = document.getElementsByTagName("body")[0];

    body.onmousemove = function (event) {
        cursorFinder(event);
    };

    function cursorFinder(e) {
        var x = e.clientX;
        var y = e.clientY;
        var coor = "Coordinates: (" + x + "," + y + ")";

        var theArrows = document.getElementsByClassName("arrow_icon");
        for (var i = 0; i < theArrows.length; i++) {
            var xShapeCenter = getPos(theArrows[i], "x");
            var yShapeCenter = getPos(theArrows[i], "y");
            theArrows[i].style.transform =
                "rotate(" +
                twisterMath(x, y, xShapeCenter, yShapeCenter) +
                "deg)";
        }
    }

    //from https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
    function getPos(el, pos) {
        // yay readability
        for (
            var lx = 0, ly = 0;
            el != null;
            lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
        );
        if (pos === "x") {
            return lx;
        } else {
            return ly;
        }
    }

    //from this crazy smart person https://codepen.io/pudinski/pen/xYoVaa/
    function twisterMath(x, y, xShapeCenter, yShapeCenter) {
        return (
            Math.atan2(x - xShapeCenter, -(y - yShapeCenter)) * (180 / Math.PI)
        );
    }
}

function footerCollapse(site_width) {
    if (window.innerWidth <= site_width) {
        var acc = document.getElementsByClassName("footer__accordion");
        var i;

        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                if ($(".footer__accordion").hasClass("footer-active")) {
                    $(".footer__accordion")
                        .not(this)
                        .removeClass("footer-active");
                    $(".footer__accordion")
                        .not(this)
                        .parent()
                        .find("#footer__content")
                        .css("max-height", "0");
                }
                this.classList.toggle("footer-active");
                content = $(this).parent().find("#footer__content");
                if (
                    $(this)
                        .parent()
                        .find("#footer__content")
                        .css("max-height") != "0px"
                ) {
                    $(this)
                        .parent()
                        .find("#footer__content")
                        .css("max-height", "0px");
                } else {
                    $(this)
                        .parent()
                        .find("#footer__content")
                        .css("max-height", content.prop("scrollHeight") + "px");
                }
            });
        }
    }
}

/* Divi FAQ Accordion close option */
function accordionClose() {
    jQuery(function ($) {
        $(".et_pb_toggle_title").click(function () {
            var $toggle = $(this).closest(".et_pb_toggle");
            if (!$toggle.hasClass("et_pb_accordion_toggling")) {
                var $accordion = $toggle.closest(".et_pb_accordion");
                if ($toggle.hasClass("et_pb_toggle_open")) {
                    $accordion.addClass("et_pb_accordion_toggling");
                    $toggle
                        .find(".et_pb_toggle_content")
                        .slideToggle(700, function () {
                            $toggle
                                .removeClass("et_pb_toggle_open")
                                .addClass("et_pb_toggle_close");
                        });
                }
                setTimeout(function () {
                    $accordion.removeClass("et_pb_accordion_toggling");
                }, 750);
            }
        });
    });
}

/* function to remove divi classes from seleted parameters */
$(document).ready(function (e) {
    $.fn.removeClassStartingWith = function (filter) {
        $(this).removeClass(function (index, className) {
            return (
                className.match(new RegExp("\\S*" + filter + "\\S*", "g")) || []
            ).join(" ");
        });
        return this;
    };
});

// Get the max height of an element and apply the height to other elements with the same class
function getMaxHeight(screen_width, className) {
    var maxHeight = 0;
    document.getElementsByClassName(className);

    for (let i = 0; i < className.length; i++) {
        if (
            className.height() > maxHeight &&
            window.innerWidth > screen_width
        ) {
            maxHeight = className.height();
        }
    }
    className.height(maxHeight);
}
