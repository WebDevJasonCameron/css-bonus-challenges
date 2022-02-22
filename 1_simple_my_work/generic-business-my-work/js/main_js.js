/**
 * Generate Quote Function
 */
// Array of quotes
let quoteArray = [
    {
        quote: 'A successful website does three things:\n' +
            'It attracts the right kinds of visitors.\n' +
            'Guides them to the main services or product you offer.\n' +
            'Collect Contact details for future ongoing relation.”\n',
        author: '― Mohamed Saad'
    },
    {
        quote: 'If you\'re already a front-end developer, well, ' +
            'pretend you\'re also wearing a pirate hat.”\n',
        author: '― Ethan Marcotte'
    },
    {
        quote: 'We don\'t just build websites, we build websites ' +
            'that SELLS”\n',
        author: '― Christopher Dayagdag'
    },
    {
        quote: 'Let us take you into a deeper experience, make a ' +
            'moment a lasting conveyable memory. Let us help build ' +
            'your tribe.”\n',
        author: '― Deep Immersion'
    },
    {
        quote: 'We love what we do and we do what our clients love ' +
            '& work with great clients all over the world to create ' +
            'thoughtful and purposeful websites.”\n',
        author: '― ProWeb365'
    },

    'Website without visitors is like a ship lost in the horizon.”\n' +
    '― Dr. Christopher Dayagdag',

    'The true ENTREPRENEUR is a risk taker, not an excuse maker.”\n' +
    '― VDEXTERS'
]

// Create function math random between 1 and 7
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

document.getElementById('quote-of-the-day').innerHTML = quoteArray[randomIntFromInterval(0,6)];
