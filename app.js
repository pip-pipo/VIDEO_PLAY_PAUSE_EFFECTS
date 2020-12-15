const btn = document.querySelector(".switch-btn");
const video = document.querySelector(".video");


btn.addEventListener("click", function () {
    const switchChange = document.querySelector(".switch");
    if (!switchChange.classList.contains('slide_switch')) {

        switchChange.classList.add('slide_switch');
        video.pause();
    }
    else {
        switchChange.classList.remove('slide_switch');

        video.play();
    }
})

const preloader = document.querySelector(".preloader");
window.addEventListener("load", ()=>{
    preloader.classList.add("hide-preloader");
})