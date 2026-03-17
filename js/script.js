(function () {
  "use strict";

  // Header/Nav
  const notif = $(".notif");
  const sections = $("section");
  const navLinks = $(".nav-link");
  let isClickScrolling = false;

  $("header a").on("click", function () {
    isClickScrolling = true;

    navLinks.removeClass("active");

    if ($(this).hasClass("nav-link")) {
      $(this).addClass("active");
    }

    setTimeout(() => {
      isClickScrolling = false;
    }, 800);
  });

  $(window).on("scroll", function () {
    if (isClickScrolling) return;

    let current = "";

    sections.each(function () {
      const sectionTop = $(this).offset().top - 100;
      const sectionHeight = $(this).outerHeight();

      if ($(window).scrollTop() >= sectionTop) {
        current = $(this).attr("id");
      }
    });

    navLinks.removeClass("active");

    $('.nav-link[href="#' + current + '"]').addClass("active");
  });

  $(".burger").on("click", function () {
    $(".top").toggleClass("top-on");
    $(".bottom").toggleClass("bottom-on");
    $(".mobile-menu").toggleClass("active");
  });


  // End Header/Nav

  // Animasi of Scroll
  AOS.init({
    duration: 700,
    easing: "ease",
    once: true,
  });
  // End AOS

  // Circle Text
  let circletype = document.getElementById("circle-type");
  new CircleType(circletype);

  window.addEventListener("scroll", function () {
    circletype.style.transform = "rotate(" + this.window.pageYOffset + "deg)";
  });
  // End Circle Text

  // Menu
  const qtyWarp = $(".qty-warp");

  qtyWarp.on("click", function (e) {
    const target = $(e.target);
    const input = $(this).find(".qty");

    let value = parseInt(input.val()) || 0;
    value = Math.max(0, value);

    if (target.hasClass("bi-dash")) {
      if (value > 0) {
        value--;
      }
    } 
    
    else if (target.hasClass("bi-plus")) {
      value++;
    }

    input.val(value);
  });


  // End Menu

  // Testimonial
  let tinyslider = function () {
    let el = document.querySelectorAll(".testimonial-slider");

    if (el.length > 0) {
      let slider = tns({
        container: ".testimonial-slider",
        item: 1,
        center: true,
        loop: true,
        mouseDrag: true,
        slideBy: 1,
        axis: "horizontal",
        swipeAngel: true,
        speed: 700,
        nav: true,
        controls: false,
        responsive: {
          900: {
            edgePadding: 30,
            items: 2,
          },
        },
      });
    }
  };

  tinyslider();
  // End Testimonial
})();
