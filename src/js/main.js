import "../styles/custom.scss";

// Navbar
function hideNav(width) {
    if (width >= 1200) {
        $("body").removeClass("navbar-hide");
        $(".navbar").removeClass("offcanvas");
        $("#navbar-toggler").attr("data-bs-target", "").attr("data-bs-toggle", "");
    } else if ($(width < 1200)) {
        $("body").addClass("navbar-hide");
        $(".navbar").addClass("offcanvas");
        $("#navbar-toggler").attr("data-bs-target", "#offcanvasNavbar").attr("data-bs-toggle", "offcanvas");
    }

    // When resize hide navbar
    $('#offcanvasNavbar').offcanvas('hide');
}

$(window).bind("resize", function () {
    hideNav($(this).width());
});
$(document).ready(function () {

    hideNav($(window).width());
});