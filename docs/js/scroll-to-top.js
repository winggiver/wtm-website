/** Scroll to Top implementation in vanilla JavaScript **/

// Let's define our variables first
// A global variable, for accesing the interval
let scrollVertical = 0;

// Another global variable
const $scrollLink = document.querySelector('.scroll');

// Let's start building our functions
function triggerScrollBtn() {
    window.addEventListener('scroll', toggleScrollBtn);
    
    $scrollLink.addEventListener('click', (evt) => {
        evt.preventDefault();
        scrollToTop();
    });
}

function toggleScrollBtn() {
    if (window.scrollY > 100) {
      $scrollLink.classList.add('is-visible');
    } else {
      $scrollLink.classList.remove('is-visible');
    }
}

function scrollToTop() {
    const intervalDuration = 16.66666; // We dont need more than 60 FPS

    scrollVertical = setInterval(scrollStep, intervalDuration);
}

function scrollStep() {
    const scrollHeight = 50;
    
    if (window.scrollY === 0) {
        clearInterval(scrollVertical);
    }
    
    window.scroll(0, window.scrollY - scrollHeight);
}

// As soon as the script is fully loaded by the browser,
// this function should be immediately called for trigering the Scroll to Top Button
triggerScrollBtn();