/** Scroll To Top implementation in vanilla JavaScript (ES6 - ECMAScript 6) **/

// Let's define our variables first:

// A global variable, for accesing the currently active animation interval.
// We need this to cancel the animation later.


// The HTML DOM node for the scroll to top button link



// Let's start building our functions:



    
    /**
     * Add a click event listener to the scroll button,
     * which will trigger the scrollToTop() function.
     **/
    
        // We have to prevent the link's default behaviour to,
        // stop the page jumping to the top right away when the link is clicked.
     
    
    


/**
 *  This function checks how far we have scrolled down from the top,
 *  which is defined as been greater than 100px.
 *  If this is the case we add the class "is-visible" to our scroll button.
 *  This class will ensure that the button is visible by setting its opacity to 90%.
 *  If window.scrollY returns a value below 100 we remove the class again, so that
 *  the button becomes invisible again (since its opacity is set to 0).
 **/

    
        // Make scroll button visible
    
    
        // Make scroll button invisible
    
    



    /**
     *  Duration of scrollStep (= interval).
     *  Change/Edit this value and see what happens!
     *  For best web performance, we dont need more than 60 FPS (16.66ms).
     *  Read more: https://developers.google.com/web/fundamentals/performance/rendering/?hl=en
    */





// Function for scrolling up one step

    // Duration and amount of steps of scroll animation

    
    // Check whether the window has scrolled to the top

        // End the animation by clearing the timer interval

    
    
    // Call the function window.scroll(x, y)



// As soon as the script is fully loaded by the browser,
// this function should be immediately called for trigering the Scroll to Top Button.
