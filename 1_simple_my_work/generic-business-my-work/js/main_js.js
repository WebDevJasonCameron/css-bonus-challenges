/**
 * Generate Quote Function
 */
// Array of quotes
let quoteArray = [
    {
        quote: 'A successful website does three things:\n' +
            'It attracts the right kinds of visitors.\n' +
            'Guides them to the main services or product you offer.\n' +
            'Collect Contact details for future ongoing relation.\n',
        author: '― Mohamed Saad'
    },
    {
        quote: 'If you\'re already a front-end developer, well, ' +
            'pretend you\'re also wearing a pirate hat.\n',
        author: '― Ethan Marcotte'
    },
    {
        quote: 'We don\'t just build websites, we build websites ' +
            'that SELLS,\n',
        author: '― Christopher Dayagdag'
    },
    {
        quote: 'Let us take you into a deeper experience, make a ' +
            'moment a lasting conveyable memory. Let us help build ' +
            'your tribe.\n',
        author: '― Deep Immersion'
    },
    {
        quote: 'We love what we do and we do what our clients love ' +
            '& work with great clients all over the world to create ' +
            'thoughtful and purposeful websites.\n',
        author: '― ProWeb365'
    },
    {
        quote: 'Website without visitors is like a ship lost in the ' +
            'horizon.\n',
        author: '― Dr. Christopher Dayagdag'
    },
    {
        quote: 'The true ENTREPRENEUR is a risk taker, not an excuse maker.\n',
        author: '― VDEXTERS'
    }
]

// Create function math random between 1 and 7
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

let quoteOfTheDay = quoteArray[randomIntFromInterval(0,6)];

document.getElementById('quote-of-the-day').innerHTML = quoteOfTheDay.quote;
document.getElementById('quoted-from').innerHTML = quoteOfTheDay.author;


/**
 * Generate Burger Menu Function
 */
// First Place element into JS var
let burgerMenu = document.getElementById('burger-menu');
let burgerIconButton = document.getElementById('burger-icon-button');


// Second, create toggle function
function toggleMenu(){
    if(burgerMenu.style.visibility === 'hidden'){
        burgerMenu.style.visibility = 'visible';
        burgerIconButton.style.backgroundColor = '#ffffff';
        burgerIconButton.style.color = 'rgb(224, 75, 66)';
        console.log('menu was hidden');
    } else {
        burgerMenu.style.visibility = 'hidden';
        burgerIconButton.style.backgroundColor = 'rgb(224, 75, 66)';
        burgerIconButton.style.color = '#ffffff';
        console.log(('menu was visible'));
    }
    console.log('button clicked');
}

// Button is: .burger-icon-button
// Third, add event listener
burgerIconButton.addEventListener('click', toggleMenu);








