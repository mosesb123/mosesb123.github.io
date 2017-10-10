$(document).ready(function() {
    var SD = prompt("SPT or Davka B?");
    var font = prompt("Font Size?");
    var textBox = prompt("How big is the text box (in grid boxes)");
    var hebrew = prompt("Copy paste that Hebrew");
    var func = function() {};
    var superFont = (textBox / 48) / font; //relative font fize
    var maxLeng = 0; //should be null
    var englishArray = [];
    var englishWord = null;
    var lineLeng = 0; //counter
    function sHebrewToEnglish(Letter) {
        switch (Letter) {
            case 'ק':
                lineLeng += (11 / 200);
                return 'q';
                break;
            case 'ו':
                lineLeng += (5 / 151);
                return 'w';
                break;
            case 'ר':
                lineLeng += (11 / 200);
                return 'r';
                break;
            case 'ת':
                lineLeng += (11 / 200);
                return 't';
                break;
            case 'י':
                lineLeng += (5 / 151);
                return 'y';
                break;
            case 'פ':
                lineLeng += (11 / 200);
                return 'p';
                break;
            case 'ס':
                lineLeng += (11 / 200);
                return 's';
                break;
            case 'ד':
                lineLeng += (11 / 200);
                return 'd';
                break;
            case 'ג':
                lineLeng += (5 / 151);
                return 'g';
                break;
            case 'ה':
                lineLeng += (11 / 200);
                return 'h';
                break;
            case 'כ':
                lineLeng += (11 / 200);
                return 'k';
                break;
            case 'ל':
                lineLeng += (11 / 200);
                return 'l';
                break;
            case 'ז':
                lineLeng += (5 / 151);
                return 'z';
                break;
            case 'ח':
                lineLeng += (11 / 200);
                return 'x';
                break;
            case 'צ':
                lineLeng += (11 / 200);
                return 'c';
                break;
            case 'ב':
                lineLeng += (11 / 200);
                return 'b';
                break;
            case 'נ':
                lineLeng += (5 / 151);
                return 'n';
                break;
            case 'מ':
                lineLeng += (11 / 200);
                return 'm';
                break;
            case 'ף':
                lineLeng += (11 / 200);
                return 'P';
                break;
            case 'ך':
                lineLeng += (11 / 200);
                return 'K';
                break;
            case 'ץ':
                lineLeng += (11 / 200);
                return 'C';
                break;
            case 'ן':
                lineLeng += (5 / 151);
                return 'N';
                break;
            case 'ש':
                lineLeng += (11 / 200);
                return '#';
                break;
            case 'ם':
                lineLeng += (11 / 200);
                return 'M';
                break;
            case 'ע':
                lineLeng += (11 / 200);
                return '(';
                break;
            case 'א':
                lineLeng += (11 / 200);
                return ')';
                break;
            case 'ט':
                lineLeng += (11 / 200);
                return '+';
                break;
            case ' ':
                lineLeng += (5 / 173);
                return ' ';
                break;
            case '.':
                lineLeng += (7 / 200);
                return '*';
                break;
            default:
                return Letter
        }
    }

    function dHebrewToEnglish(Letter) {
        switch (Letter) {
            case 'ס':
                return 'q'
                break;
            case 'ק':
                return 'w'
                break;
            case 'ר':
                return 'e'
                break;
            case 'ע':
                return 'r'
                break;
            case 'פ':
                return 't'
                break;
            case 'ש':
                return 'y'
                break;
            case 'ץ':
                return 'u'
                break;
            case 'י':
                return 'i'
                break;
            case 'ן':
                return 'o'
                break;
            case 'נ':
                return 'p'
                break;
            case 'ב':
                return 'a'
                break;
            case 'ף':
                return 's'
                break;
            case 'ה':
                return 'd'
                break;
            case 'ז':
                return 'f'
                break;
            case 'ח':
                return 'g'
                break;
            case 'ט':
                return 'h'
                break;
            case 'ך':
                return 'j'
                break;
            case 'כ':
                return 'k'
                break;
            case 'ל':
                return 'l'
                break;
            case 'ת':
                return 'z'
                break;
            case 'ר':
                return 'x'
                break;
            case 'ד':
                return 'c'
                break;
            case 'צ':
                return 'v'
                break;
            case 'ג':
                return 'b'
                break;
            case 'מ':
                return 'n'
                break;
            case 'ם':
                return 'm'
                break;
            case ' ':
                return ' '
                break;
            default:
                return Letter

        }
    }
    if (SD = "SPT") {
        func = sHebrewToEnglish;
        maxLeng = 5 / 151 * 235 * 6 * superFont; //max amount of super chars allowed
    } else {
        func = dHebrewToEnglish;
        maxLeng = superFont;
    }
    for (let i = hebrew.length - 1; i >= 0; i--) //reverse and line flip
    {
        console.log(englishWord);
        englishWord += func(hebrew[i]);
        if (lineLeng >= maxLeng) {
            i += (englishWord.lastIndexOf(' ') - i);
            englishWord = englishWord.substring(englishWord.lastIndexOf(' '));
            englishArray.push(englishWord);
            englishWord = null;
            lineLeng = 0;
        }
        englishArray.push(englishWord);
        englishWord = null;
    }
    for (let i = 0; i < englishArray.length; i++) //array into word
    {
        englishWord += englishArray[i];
    }

    alert(englishWord);
    $('#return').text(englishWord);
});
