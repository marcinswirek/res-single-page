//Typewriter
var aText = new Array(
    'cześć',
    'jestem marcin świrek',
    'i jestem',
     '<strong>junior front-end developerem</strong>',
);

var iSpeed = 100; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter() {
    sContents = ' ';
    iRow = Math.max(0, iIndex - iScrollAt);
    var destination = document.getElementById('typedText');

    while (iRow < iIndex) {
        sContents += aText[iRow++] + '<br />';
    }
    destination.innerHTML =
        sContents + aText[iIndex].substring(0, iTextPos) + '_';
    if (iTextPos++ == iArrLength) {
        iTextPos = 0;
        iIndex++;
        if (iIndex != aText.length) {
            iArrLength = aText[iIndex].length;
            setTimeout('typewriter()', 500);
        }
    } else {
        setTimeout('typewriter()', iSpeed);
    }
}

typewriter();

// var app = document.getElementById('typedText');

// var typewriter = new Typewriter(typedText, {
//     loop: true
// });

// typewriter.typeString('Hello World!')
//     .pauseFor(2500)
//     .deleteAll()
//     .typeString('Strings can be removed')
//     .pauseFor(2500)
//     .deleteChars(7)
//     .typeString('<strong>altered!</strong>')
//     .pauseFor(2500)
//     .start();
