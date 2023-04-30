$(".header-switch").on("click", function () {
    if ($('.header-menu').is(".header-menu--show")) {
        $('.header-menu').removeClass("header-menu--show");
    } else {
        $('.header-menu').addClass("header-menu--show");
    }
});

$(window).scroll(function () {
    if ($('.header-menu').is(".header-menu--show")) {
        $('.header-menu').removeClass("header-menu--show");
    }
});
