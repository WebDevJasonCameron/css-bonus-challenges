"use strict";
/**
 * MAIN JS:    COMING SOON PAGE (MY WORK)
 *
 * Code found: https://www.w3schools.com/howto/howto_js_countdown.asp
 * Purpose of Project:  (1) Practice CSS, HTML, and JS
 *                      (2) Learn how the Date function works
 *                      (3) Connect output to HTML page
 */
(function(){                                                                            // START CODE

// Setting up the deadline
const countDownDate = new Date("Dec 31, 2022 23:59:30").getTime();

// Setting up the interval to every second
let x = setInterval(function() {

    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the countdown date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));                            //   Keeping the extra code
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));      // for future study and use
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / (1000));

    // Display the result in the element with id='count-down'
    document.getElementById('count-down').innerHTML = days + ' days left'

    if (distance < 0) {
        clearInterval(x);
        document.getElementById('count-down').innerHTML = "IT IS HERE!!!"
    }
}, 1000)







                                                                                        // END CODE
})();