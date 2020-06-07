
(function ($) {
"use strict"; // Start o use strict

// Usando jQuery
$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (
        location.pathname.replace(/^\//, "") ==
            this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
    ) {
        var target = $(this.hash);
        target = target.length
            ? target
            : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
            $("html, body").animate(
                {
                    scrollTop: target.offset().top,
                },
                1000,
                "easeInOutExpo"
            );
            return false;
        }
    }
});

// Fecha o menu responsive quando aciona o scroll
$(".js-scroll-trigger").click(function () {
    $(".navbar-collapse").collapse("hide");
});

// Ativa o scrollspy para add para navbar items
$("body").scrollspy({
    target: "#sideNav",
});

})(jQuery); // termina o use strict
