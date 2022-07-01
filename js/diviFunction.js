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

// Fullscreen Header Styling
function fullscreenHeaderStyle() {
    const fullHeaderStyle = document.getElementById('et-top-navigation');
    fullHeaderStyle.classList.add('header__fullscreen');
}

// function divFunction(htmlText, classArray) {
//     let div = document.createElement("div");
//     div.classList.add(classArray.split(' '));
//     div.innerHTML = htmlText;
//     return div;
// }



//function for arrow follow mouse
function mouseFollowArrow(){
    var body =document.getElementsByTagName("body")[0];

    body.onmousemove = function(event) {cursorFinder(event)};

    function cursorFinder(e) {
        var x = e.clientX;
        var y = e.clientY;
        var coor = "Coordinates: (" + x + "," + y + ")";
    
    
    
        var theArrows = document.getElementsByClassName("arrow_icon");
    for(var i = 0; i < theArrows.length; i++){
        var xShapeCenter = getPos(theArrows[i],'x');
        var yShapeCenter = getPos(theArrows[i],'y');
        theArrows[i].style.transform = 'rotate('+ twisterMath(x, y, xShapeCenter, yShapeCenter)+'deg)';
    }
    }


    //from https://stackoverflow.com/questions/288699/get-the-position-of-a-div-span-tag
    function getPos(el, pos) {
        // yay readability
        for (var lx=0, ly=0;
            el != null;
            lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent);
        if (pos === 'x'){
        return lx
        } else {
        return ly
        }
    }

    //from this crazy smart person https://codepen.io/pudinski/pen/xYoVaa/
    function twisterMath(x,y, xShapeCenter, yShapeCenter){
    return  Math.atan2(x - xShapeCenter,-(y - yShapeCenter)) *(180 / Math.PI)
    }
}

function footerCollapse() {
    var acc = document.getElementsByClassName("footer__accordion");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            this.classList.toggle("footer-active");

            var content = document.getElementById("footer__content");

            if (window.innerWidth <= 980) {
                if (content.style.maxHeight) {
                    content.style.maxHeight = null;
                } else {
                    content.style.maxHeight = content.scrollHeight + "px";
                }
            }
        });
    }
}