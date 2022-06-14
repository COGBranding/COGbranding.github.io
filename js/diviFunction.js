const testFunction = "diviFunction is working";
console.log(testFunction);

// Current Year HTML
function currentYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

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

// Add dropdowns to mobile menu
function mobileMenuDropdown() {
    $(document).ready(function() {
            $("body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children").append('<a href="#" class="mobile-toggle"></a>');
            $('ul.et_mobile_menu li.menu-item-has-children .mobile-toggle, ul.et_mobile_menu li.page_item_has_children .mobile-toggle').click(function(event) {
                event.preventDefault();
                $(this).parent('li').toggleClass('dt-open');
                $(this).parent('li').find('ul.children').first().toggleClass('visible');
                $(this).parent('li').find('ul.sub-menu').first().toggleClass('visible');
            });
            iconFINAL = 'P';
            $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children').attr('data-icon', iconFINAL);
            $('.mobile-toggle').on('mouseover', function() {
                $(this).parent().addClass('is-hover');
            }).on('mouseout', function() {
                $(this).parent().removeClass('is-hover');
            })
        });
}

// function divFunction(htmlText, classArray) {
//     let div = document.createElement("div");
//     div.classList.add(classArray.split(' '));
//     div.innerHTML = htmlText;
//     return div;
// }