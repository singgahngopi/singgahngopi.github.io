const video = document.getElementById('video');
const videoPortrait = document.getElementById('videoPortrait');
const videoContainer = document.querySelector('.video-container');
const pageContent = document.querySelector('.page-content');

function adjustVideoSizeBasedOnMediaQuery() {
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  if (screenWidth >= 1281) {
    // Play landscape video
    videoContainer.style.display = 'block';
    video.style.display = 'block';
    videoPortrait.style.display = 'none';
    video.style.width = '100vw';
    video.style.height = '100vh';
    video.play();
    video.muted = true;
  } else {
    // Play portrait video
    videoContainer.style.display = 'block';
    video.style.display = 'none';
    videoPortrait.style.display = 'block';
    videoPortrait.style.width = '100vw';
    videoPortrait.style.height = '100vh';
    videoPortrait.play();
    videoPortrait.muted = true;
  }
}

// Play the video(s) when they are ready and muted
video.addEventListener('canplay', () => {
  video.play();
  video.muted = true;
});

videoPortrait.addEventListener('canplay', () => {
  videoPortrait.play();
  videoPortrait.muted = true;
});

// After the video ends, show the page content and hide the video container
video.addEventListener('ended', () => {
  videoContainer.style.display = 'none';
  pageContent.classList.add('show');
});

videoPortrait.addEventListener('ended', () => {
  videoContainer.style.display = 'none';
  pageContent.classList.add('show');
});

// Check screen size when the page loads and on window resize
window.addEventListener('DOMContentLoaded', adjustVideoSizeBasedOnMediaQuery);
window.addEventListener('resize', adjustVideoSizeBasedOnMediaQuery);

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

document.querySelectorAll('.image-slider img').forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute('src');
        document.querySelector('.main-home-image').src = src;
    };
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        }
    },
});





// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "block";
//   setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
