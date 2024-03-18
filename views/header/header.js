/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function setMobileMenuVisibility() {
    var x = document.getElementById("mobile-menu");
    if (x.style.display === "flex") {
        x.style.display = "none";
    } else {
        x.style.display = "flex";
    }
}