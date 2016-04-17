/** Scroll to top implementation in vanilla JavaScript **/

// ilithya's convertion into ECMAScript6 - trying... not the best, I guess.


// Let's define our variables first
const $scrollLink = document.querySelector('.scroll');
const scrollHeight = 50;
const intervalId = 0;
const intervalDuration = 0;

// Let's start building our functions
function triggerScrollBtn() {
    toggleScrollBtn();
    
    $scrollLink.addEventListener('click', function() {
        scrollToTop();
    });
}

function toggleScrollBtn() {
    window.onscroll = function() {
        window.scrollY > 100 ? $scrollLink.classList.add("is-visible") : $scrollLink.classList.remove("is-visible");
    }    
}

function scrollToTop() {
    intervalId = setInterval(scrollStep, intervalDuration);
}

function scrollStep() {
    if (window.scrollY === 0) {
        clearInterval(intervalId);
    }
    
    window.scroll(0, window.scrollY - scrollHeight);
}

// As soon as the scripts is fully loaded by the browser,
// this function should be immediately called for trigering the Scroll to Top Button
triggerScrollBtn();





/*
// Steffi's original code

document.addEventListener("DOMContentLoaded", function() {


    var scrollLink = document.getElementById("scroll");

    var scrollHeight = 50; // 50px step scrolling

    var intervalId = 0;


    var intervalDuration = 10;


    function scrollToTop() {
        intervalId = setInterval(scrollStep, intervalDuration);
    }

    function scrollStep() {

        if( window.scrollY === 0 ) {
            console.log("Scroll to top"); 
            scrollStop();
        }
        window.scroll( 0, window.scrollY-50 );
    }

    function scrollStop() {
        clearInterval(intervalId);
    }


    scrollLink.addEventListener("click", function(e) {

        e.preventDefault();
        scrollToTop();
    });

       window.onscroll = function() {
        if( window.scrollY > 100 ) {
            scrollLink.classList.add("is-visible");
        } else {
            scrollLink.classList.remove("is-visible");
        }
    }
});
*/