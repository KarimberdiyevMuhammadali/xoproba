// toggle
function openNavbar() {
    document.getElementById("navbar-responsive").style.left = "0";
    // document.getElementById("navbar-responsive").style.top = "0";
  }
  function closeNavbar() {
    document.getElementById("navbar-responsive").style.left = "-100%";
    // document.getElementById("navbar-responsive").style.top = "-100%";
  }
  
  document.getElementById("navbar-open").addEventListener("click", openNavbar);
  document.getElementById("navbar-close").addEventListener("click", closeNavbar);
  // toogle

  // owl carousel
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel({
      margin: 40,
      padding: 40,
      loop: true,
      nav: true,
      navText: ['<img src="../images/prev.svg"/>', '<img src="../images/next.svg"/>'],
      dots: false,
      autoplay: true,
      // stagePadding: 70,
      autoplayTimeout: 5000,
      responsive: {
        0: {
          items: 1,
          dots: false,
        },
        600: {
          items: 1,
        },
        650: {
          items: 2,
        },
        1000: {
          items: 3,
        },
        1200: {
          items: 3,
          dots:false,
        },
      },
    });
  });
  // owl carousel
  // owl carousel