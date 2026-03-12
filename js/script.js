// Header/Nav

$("header a").on("click", function () {
  $(".nav-link").removeClass("active");

  if ($(this).hasClass("nav-link")) {
    $(this).addClass("active");
  }
});

$(".burger").on("click", function () {
  $(".top").toggleClass("top-on");
  $(".bottom").toggleClass("bottom-on");
  $(".mobile-menu").toggleClass("active");
  
});

// End Header/Nav

(function(){
  "use strict";

  AOS.init({
    duration: 700,
    easing: 'ease',
    once: true
  });

  let circletype = document.getElementById("circle-type")
  new CircleType(circletype);

  window.addEventListener("scroll", function(){
    circletype.style.transform = "rotate(" + this.window.pageYOffset+ "deg)";
  })

})();
