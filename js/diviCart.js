const testCart = "diviCart is working";
console.log(testCart);

// Prepend Account/ Cart Icon
function menuCart(site_width) {
    let div = document.createElement("li");
    div.classList.add("menu-item", "account-icon");
    let accountIcon = '<a href="/my-account"></a>';
    div.innerHTML = accountIcon;

    var menuCartHtml = document.getElementsByClassName("menu-cart-info");
    parent = menuCartHtml.parentNode,
    contents = parent.innerHTML;

    // For tablets and smaller devices, add the account and cart icons
    if (window.innerWidth <= site_width) {
        document.getElementById("et_mobile_nav_menu").prepend(contents) + document.getElementsByClassName("menu-cart-info").before(div);
    } else {
        // Add the account icon to the end of the desktop menu
        let lastMenuItem = document.getElementById("top-menu").lastChild;
        lastMenuItem.classList.add("myAccount");
        lastMenuItem.after(div);
    }
}
