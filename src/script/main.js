document.addEventListener("DOMContentLoaded", function(event) {
  //do work
  const mobileMenuLink = document.getElementById("mobileMenuLink");
  const mobileNavBar = document.getElementById("mobileNavBar");
  var menuStatusCheck = 0;

  mobileMenuLink.addEventListener("click", () => {
    if (menuStatusCheck === 0) {
      mobileNavBar.style.height = "260px";
      menuStatusCheck = 1;
    } else {
      mobileNavBar.style.height = "0px";
      menuStatusCheck = 0;
    }
  });
  // Script for Nav animation menu ends

  // slide Image 01
  var slideIndex01 = 0;
  slideShowFunc01();

  function slideShowFunc01() {
    var i;
    var x = document.getElementsByClassName("mainSlideImage01");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex01++;

    if (slideIndex01 > x.length) {
      slideIndex01 = 1;
    }
    x[slideIndex01 - 1].style.display = "block";
    setTimeout(slideShowFunc01, 4000);
  }

  // Slide image 02
  var slideIndex02 = 0;
  slideShowFunc02();

  function slideShowFunc02() {
    var i;
    var x = document.getElementsByClassName("mainSlideImage02");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    slideIndex02++;

    if (slideIndex02 > x.length) {
      slideIndex02 = 1;
    }
    x[slideIndex02 - 1].style.display = "block";
    setTimeout(slideShowFunc02, 4000);
  }
});
