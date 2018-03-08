//935pm
$(document).ready(function() {
    var fontInput = prompt("SPT or Davka B?");
    var hebrew = prompt("Copy paste that Hebrew");
    var func = function() {};
    var lineOrder = 0;
    var englishArray = [];
    var englishLines = " ";
    var englishWord = " ";
    var textBoxSize = prompt("How big is the text box");
    var fontSize = prompt("How big is your font");
    var TEXT_BOX_MAX = 48;
    var LETTER_PER_FONTUNIT = 864;
    var limiter = (textBoxSize / TEXT_BOX_MAX) / fontSize;
    var letter = 1;
    var smallLetter = 0.60204696;
    var spaceLetter = 0.525486075;
    var periodLetter = 0.63636363636;
    var lettersAllowed = LETTER_PER_FONTUNIT * limiter;
    var lineLeng = 0;

    function sHebrewToEnglish(Letter) {
        switch (Letter) {
            case 'ק':
                lineLeng++;
                return 'q'
                break;
            case 'ו':
                lineLeng += smallLetter;
                return 'w'
                break;
            case 'ר':
                lineLeng++;
                return 'r'
                break;
            case 'ת':
                lineLeng++;
                return 't'
                break;
            case 'י':
                lineLeng += smallLetter;
                return 'y'
                break;
            case 'פ':
                lineLeng++;
                return 'p'
                break;
            case 'ס':
                lineLeng++;
                return 's'
                break;
            case 'ד':
                lineLeng++;
                return 'd'
                break;
            case 'ג':
                lineLeng += smallLetter;
                return 'g'
                break;
            case 'ה':
                lineLeng++;
                return 'h'
                break;
            case 'כ':
                lineLeng++;
                return 'k'
                break;
            case 'ל':
                lineLeng++;
                return 'l'
                break;
            case 'ז':
                lineLeng += smallLetter;
                return 'z'
                break;
            case 'ח':
                lineLeng++;
                return 'x'
                break;
            case 'צ':
                lineLeng++;
                return 'c'
                break;
            case 'ב':
                lineLeng++;
                return 'b'
                break;
            case 'נ':
                lineLeng += smallLetter;
                return 'n'
                break;
            case 'מ':
                lineLeng++;
                return 'm'
                break;
            case 'ף':
                lineLeng++;
                return 'P'
                break;
            case 'ך':
                lineLeng++;
                return 'K'
                break;
            case 'ץ':
                lineLeng++;
                return 'C'
                break;
            case 'ן':
                lineLeng += smallLetter;
                return 'N'
                break;
            case 'ש':
                lineLeng++;
                return '#'
                break;
            case 'ם':
                lineLeng++;
                return 'M'
                break;
            case 'ע':
                lineLeng++;
                return '('
                break;
            case 'א':
                lineLeng++;
                return ')'
                break;
            case 'ט':
                lineLeng++;
                return '+'
                break;
            case ' ':
                lineLeng += spaceLetter;
                return ' '
                break;
            case '.':
                lineLeng += periodLetter;
                return '*';
                break;
            case ",":
            return 'D';
            break;
            case null:
                return ' ';
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
            case '.':
                return '*';
                break;
            case ",":
            return 'D';
            break;
            case null:
                return ' ';
                break;
            default:
                return Letter

        }
    }

    if (fontInput = "Davka B") {
        func = dHebrewToEnglish;
    } else {
        func = sHebrewToEnglish;
    }

    for (var i = 0; i < hebrew.length; i++) {
        englishLines += sHebrewToEnglish(hebrew.charAt(i)); //FIX LATER
        console.log(englishLines+"LOOP")
        if (lineLeng >= lettersAllowed) {
            lineLeng = 0;
            i -= englishLines.lastIndexOf(' ');
            englishArray[j] = englishLines.reverse();
            j++
            console.log(englishLines+"IF START")
            englishLines = "";
            console.log(englishLines+"IF END")
        }
    }
    englishWord = englishArray.reverse().join("");
    alert(englishWord);
    $('#return').text(englishWord);
});
