/** Scroll To Top implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

// Let's define our variables first:

// A global variable, for accesing the currently active animation interval.
// We need this to cancel the animation later.
let scrollVertical = 0;

// The HTML DOM node for the scroll to top button link
const $scrollLink = document.querySelector('.scroll');


// Let's start building our functions:

function triggerScrollBtn() {
    window.addEventListener('scroll', toggleScrollBtn);
    
    /**
     * Add a click event listener to the scroll button,
     * which will trigger the scrollToTop() function.
     **/
    $scrollLink.addEventListener('click', (evt) => {
        // We have to prevent the link's default behaviour to,
        // stop the page jumping to the top right away when the link is clicked.
        evt.preventDefault();
        scrollToTop();
    });
}

/**
 *  This function checks how far we have scrolled down from the top,
 *  which is defined as been greater than 100px.
 *  If this is the case we add the class "is-visible" to our scroll button.
 *  This class will ensure that the button is visible by setting its opacity to 90%.
 *  If window.scrollY returns a value below 100 we remove the class again, so that
 *  the button becomes invisible again (since its opacity is set to 0).
 **/
function toggleScrollBtn() {
    if (window.scrollY > 100) {
        // Make scroll button visible
        $scrollLink.classList.add('is-visible');
    } else {
        // Make scroll button invisible
        $scrollLink.classList.remove('is-visible');
    }
}

function scrollToTop() {
    /**
     *  Duration of scrollStep (= interval).
     *  Change/Edit this value and see what happens!
     *  For best web performance, we dont need more than 60 FPS (16.66ms).
     *  Read more: https://developers.google.com/web/fundamentals/performance/rendering/?hl=en
    */
    const intervalDuration = 16.66666;

    scrollVertical = setInterval(scrollStep, intervalDuration);
}

// Function for scrolling up one step
function scrollStep() {
    // Duration and amount of steps of scroll animation
    const scrollHeight = 50;
    
    // Check whether the window has scrolled to the top
    if (window.scrollY === 0) {
        // End the animation by clearing the timer interval
        clearInterval(scrollVertical);
    }
    
    // Call the function window.scroll(x, y)
    window.scroll(0, window.scrollY - scrollHeight);
}

// As soon as the script is fully loaded by the browser,
// this function should be immediately called for trigering the Scroll to Top Button.
triggerScrollBtn();