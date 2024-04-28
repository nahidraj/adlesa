$(function () {
  "use strict";

  // fixed menu js
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $(".header_area").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $(".header_area").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // testimonial_slider slider js
  $(".testimonial_slider").slick({
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 2,
    autoplay: false,
    slidesToScroll: 1,
    fade: false,
    arrows: false,
    prevArrow: '<i class="fas left icon fa-chevron-left"></i>',
    nextArrow: '<i class="fas right icon fa-chevron-right"></i>',
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  });

  // scroll to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate(
        {
          scrollTop: 0,
        },
        800
      );
    } else {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        0
      );
    }
  });

  // Mobile menu js start

  $(".mobile_menu_control_bar").on("click", function () {
    $(".menu_control_overlay,.menu_wrapper").addClass("show");
    return false;
  });

  $(".menu_control_overlay").on("click", function () {
    $(".menu_control_overlay,.menu_wrapper").removeClass("show");
  });

  $(".sub-mobile-menu ul").hide();
  $(".sub-mobile-menu a").on("click", function () {
    $(this).parent(".sub-mobile-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });
});
