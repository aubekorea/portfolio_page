(function ($) {
  "use strict";

  $(function () {
    var $window = $(window);
    var $gnb = $(".gnb");
    var $dep1 = $(".gnb .dep1 > li");
    var $depLinks = $(".gnb .dep1 > li > a");
    var $dep2 = $(".gnb .dep2");

    function lockScroll() {
      $("body").addClass("modal").on("scroll.aube touchmove.aube mousewheel.aube", function (event) {
        event.preventDefault();
      });
    }

    function unlockScroll() {
      $("body").removeClass("modal").off(".aube");
    }

    function closeGnb() {
      $gnb.removeClass("on");
      $(".gnb_bg").removeClass("on");
      $(".menu_btn .open, .menu_btn .close").removeClass("on");
      $dep1.removeClass("on");
      $dep1.find(".dep2").stop(true, true).hide();
    }

    function bindPcGnb() {
      closeGnb();
      $gnb.css({ display: "block", height: "auto" }).removeClass("gnb_m");
      $dep1.off(".aubeGnb");
      $depLinks.off(".aubeGnb");
      $("#main_con, #sub_con, .jmboard, .logo, .event_btn").off(".aubeGnb");

      $dep1.on("mouseenter.aubeGnb", function () {
        var $item = $(this);
        $dep1.not($item).removeClass("on").find(".dep2").stop(true, true).hide();
        $item.addClass("on").find(".dep2").stop(true, true).slideDown(180);
      });

      $("#main_con, #sub_con, .jmboard, .logo, .event_btn").on("mouseenter.aubeGnb", closeGnb);
    }

    function bindMobileGnb() {
      $dep1.off(".aubeGnb");
      $depLinks.off(".aubeGnb");
      $("#main_con, #sub_con, .jmboard, .logo, .event_btn").off(".aubeGnb");
      $gnb.css({ height: "calc(var(--vh, 1vh) * 100)" }).addClass("gnb_m").removeClass("on");
      $dep2.css({ height: "auto" }).hide();

      $depLinks.on("click.aubeGnb", function (event) {
        var $link = $(this);
        var $submenu = $link.siblings(".dep2");

        if (!$submenu.length) {
          return;
        }

        event.preventDefault();
        $link.parent().siblings().removeClass("on").find(".dep2").hide();
        $link.parent().toggleClass("on");
        $submenu.toggle($link.parent().hasClass("on"));
      });

      $dep2.find("a").on("click.aubeGnb", function () {
        unlockScroll();
        closeGnb();
      });
    }

    function configureGnb() {
      if ($window.width() > 1300) {
        bindPcGnb();
      } else {
        bindMobileGnb();
      }
    }

    $window.on("resize.aubeGnb", configureGnb);
    configureGnb();

    $(".menu_btn .open").on("click.aubeGnb", function (event) {
      event.preventDefault();
      lockScroll();
      $dep1.removeClass("on");
      $dep2.hide();
      $(this).addClass("on");
      $(".gnb, .gnb_bg").addClass("on");
    });

    $(".menu_btn .close").on("click.aubeGnb", function (event) {
      event.preventDefault();
      unlockScroll();
      closeGnb();
    });

    $(".top_btn, .go_top").on("click.aubeTop", function (event) {
      event.preventDefault();
      $("html, body").stop().animate({ scrollTop: 0 }, 500);
    });

    if (typeof Swiper !== "function") {
      return;
    }

    if ($(".main_tour_wrap .swiper-container").length) {
      new Swiper(".main_tour_wrap .swiper-container", {
        loop: true,
        speed: 800,
        autoplay: {
          delay: 3500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".main_tour_wrap .swiper-next",
          prevEl: ".main_tour_wrap .swiper-prev"
        },
        slidesPerView: 4,
        spaceBetween: 24,
        breakpoints: {
          0: {
            slidesPerView: 1.15,
            spaceBetween: 16
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 18
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 24
          }
        }
      });
    }

    if ($(".depart_sect .slide_wrap .swiper-container").length) {
      new Swiper(".depart_sect .slide_wrap .swiper-container", {
        loop: true,
        speed: 700,
        slidesPerView: 1,
        navigation: {
          nextEl: ".depart_sect .swiper_btn.next",
          prevEl: ".depart_sect .swiper_btn.prev"
        }
      });
    }

    if ($(".team_sect .slide_wrap .swiper-container").length) {
      new Swiper(".team_sect .slide_wrap .swiper-container", {
        loop: true,
        speed: 700,
        slidesPerView: 1,
        navigation: {
          nextEl: ".team_sect .swiper_btn.next",
          prevEl: ".team_sect .swiper_btn.prev"
        }
      });
    }

    if ($(".loca_sect .slide_wrap .swiper-container").length) {
      new Swiper(".loca_sect .slide_wrap .swiper-container", {
        loop: true,
        speed: 6500,
        slidesPerView: 1,
        centeredSlides: true,
        spaceBetween: 28,
        autoplay: {
          delay: 0,
          disableOnInteraction: false
        },
        pagination: {
          el: ".loca_sect .progress",
          type: "progressbar"
        },
        navigation: {
          nextEl: ".loca_sect .swiper_btn.next",
          prevEl: ".loca_sect .swiper_btn.prev"
        },
        breakpoints: {
          0: {
            slidesPerView: 1.05,
            spaceBetween: 18
          },
          900: {
            slidesPerView: 1,
            spaceBetween: 28
          }
        }
      });
    }
  });
})(jQuery);
