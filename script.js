
function openNav() {
    var nav = document.getElementById("nav");
    if (nav.style.visibility === "hidden") {
        nav.style.visibility = "visible";
        nav.style.opacity = "1";
    } 
    else
    {
        nav.style.visibility = "hidden";
        nav.style.opacity = "0";
    }
}

function openNav() {
    var nav = document.getElementById("nav");
    nav.classList.toggle("show");
}

function openNav(btn) {
    btn.parentNode.classList.toggle("show");
  }

  var slideIndex = 0;
  var slides = document.getElementsByClassName("mySlides");

  
  // Next/previous controls
  function plusSlides(n) {
    slideIndex += n;
    updateSlides();
}

function updateSlides() {
    for (var i = 0; i < slides.length; i++) 
    {
        slides[i].style.display = "none";
    }
    slides[slideIndex % slides.length].style.display = "block";
}
updateSlides();
  
  // Thumbnail image controls
  function currentSlide(n) {
      showSlides(slideIndex = n);
  }
  
  // Function to display slides
  function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      if (n > slides.length) { slideIndex = 1 }
      if (n < 1) { slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
      }
      slides[slideIndex - 1].style.display = "block";
  }
  
  // Auto slideshow interval
  var slideInterval = setInterval(function () {
      plusSlides(1); // Change slide every 2 seconds (adjust as needed)
  }, 2000); // Change this number to control the interval in milliseconds (e.g., 2000 for 2 seconds)
  
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });