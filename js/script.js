(function(){
  // Header/Nav
  "use strict";

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

  let tinyslider = function(){
    let el = document.querySelectorAll('.testimonial-slider');

    if (el.length > 0){
      let slider = tns({
        "container": ".testimonial-slider",
        "item": 1,
        "center": true,
        "loop": true,
        "mouseDrag": true,
        "slideBy": 1,
        "axis": "horizontal",
        "swipeAngel": true,
        "speed": 700,
        "nav": true,
        "controls": false,
        "responsive": {
          "900":{
            "edgePadding": 30,
            "items": 2
          }
        }
      })
    }
  }

  tinyslider();

})();
