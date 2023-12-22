Array.from(document.querySelectorAll(".carousel")).forEach(e => {
    track = e.querySelector("carousel-track")
})

const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button--right');
const prevButton = document.querySelector('.carousel-button--left');
const dotNavs = document.querySelector('.carousel-nav');
const dot = Array.from(dotNavs.children);
