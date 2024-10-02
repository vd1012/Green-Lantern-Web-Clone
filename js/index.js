
// Navbar Js Start
function toggleNav() {
  var nav = document.getElementById("nav-links");

  if (!nav) {
    return 1; 
  }

  if (nav.style.display === "block") {
    nav.style.display = "none";
  } else {
    nav.style.display = "block";
  }

  return 0; 
}

// Banner and Partner Slider JS
document.addEventListener("DOMContentLoaded", function () {
  // JavaScript for the Partner Slider
  let currentPartnerSlide = 0;
  const partnerSlides = document.querySelectorAll(".partner-slide");
  const totalPartnerSlides = partnerSlides.length;

  function showPartnerSlide(slideIndex) {
    partnerSlides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextPartnerSlide() {
    currentPartnerSlide = (currentPartnerSlide + 1) % totalPartnerSlides;
    showPartnerSlide(currentPartnerSlide);
  }

  function prevPartnerSlide() {
    currentPartnerSlide =
      (currentPartnerSlide - 1 + totalPartnerSlides) % totalPartnerSlides;
    showPartnerSlide(currentPartnerSlide);
  }

  document
    .querySelector(".partner-nextbtn")
    .addEventListener("click", nextPartnerSlide);
  document
    .querySelector(".partner-prevbtn")
    .addEventListener("click", prevPartnerSlide);

  // Automatically change partner slides every 5 seconds
  setInterval(nextPartnerSlide, 5000);

  showPartnerSlide(currentPartnerSlide);

  let currentBannerSlide = 0;
  const bannerSlides = document.querySelectorAll(".slide");
  const totalBannerSlides = bannerSlides.length;

  function showBannerSlide(slideIndex) {
    bannerSlides.forEach((slide, index) => {
      if (index === slideIndex) {
        slide.classList.add("active");
      } else {
        slide.classList.remove("active");
      }
    });
  }

  function nextBannerSlide() {
    currentBannerSlide = (currentBannerSlide + 1) % totalBannerSlides;
    showBannerSlide(currentBannerSlide);
  }

  function prevBannerSlide() {
    currentBannerSlide =
      (currentBannerSlide - 1 + totalBannerSlides) % totalBannerSlides;
    showBannerSlide(currentBannerSlide);
  }

  document.querySelector(".nextbtn").addEventListener("click", nextBannerSlide);
  document.querySelector(".prevbtn").addEventListener("click", prevBannerSlide);
 
  // Automatically change partner slides every 5 seconds
  setInterval(nextBannerSlide, 5000);

  showBannerSlide(currentBannerSlide);
});


// Contact us & Log In form

var contactModal = document.getElementById("contactModal");
var contactBtn = document.getElementById("contact-link");
var closeContact = document.getElementsByClassName("close")[0];

// Open Contact Modal
contactBtn.onclick = function() {
  contactModal.style.display = "block";
}

// Close Contact Modal
closeContact.onclick = function() {
  contactModal.style.display = "none";
}

// Modal logic for Log In form
var loginModal = document.getElementById("loginModal");
var loginBtn = document.getElementById("login-link");
var closeLogin = document.getElementsByClassName("close")[1];

// Open Log In Modal
loginBtn.onclick = function() {
  loginModal.style.display = "block";
}

// Close Log In Modal
closeLogin.onclick = function() {
  loginModal.style.display = "none";
}

// Close both modals when clicking outside of them
window.onclick = function(event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none";
  }
  if (event.target == loginModal) {
    loginModal.style.display = "none";
  }
}
