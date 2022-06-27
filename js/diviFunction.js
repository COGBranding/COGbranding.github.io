console.log("diviFunction is working");

// Current Year HTML
function currentYear() {
    document.getElementById("year").innerHTML = new Date().getFullYear();
}

// open all external links on new tabs

$('a').each(function() {
    var a = new RegExp('/' + window.location.host + '/');
    if(!a.test(this.href)) {
        $(this).click(function(event) {
            event.preventDefault();
            event.stopPropagation();
            window.open(this.href, '_blank');
        });
    }
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

// Main Header Styling
function mainHeaderStyle() {
  const headerStyle = document.getElementById('et-top-navigation');
  const mobileHeaderStyle = document.getElementById('et_mobile_nav_menu');
  headerStyle.classList.add('header__desktop');
  mobileHeaderStyle.classList.add('header__mobile');
}

// function divFunction(htmlText, classArray) {
//     let div = document.createElement("div");
//     div.classList.add(classArray.split(' '));
//     div.innerHTML = htmlText;
//     return div;
// }