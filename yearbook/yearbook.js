//920pm
$(document).ready(function() {
	var fontInput = prompt("SPT or Davka B?") ;
	var hebrew = prompt("Copy paste that Hebrew");
	var func = function() {};
	var lineOrder = 0;
	var englishArray = [];
	var englishLines = [];
	var englishWord = " " ;
	var textBoxSize = prompt("How big is the text box");
	var fontSize = prompt("How big is your font");
	var TEXT_BOX_MAX = 48;
	var LETTER_PER_FONTUNIT = 864;
	var limiter =   (textBoxSize/TEXT_BOX_MAX) / fontSize;
	var smallLimiter= limiter * 0.60204696;
	var spaceLimiter = limiter * 0.525486075;
	var periodLimiter = limiter * 0.63636363636;
	var letterUnitPerLine = LETTER_PER_FONTUNIT * limiter;
	var lineLeng = 0;
	function sHebrewToEnglish(Letter) {
		switch(Letter) {
	    case 'ק':
	    	lineLeng += limiter;
	        return 'q'
	        break;
		case 'ו':
			lineLeng += smallLimiter;
			return 'w'
			break;
		case 'ר':
			lineLeng += limiter;
			return 'r'
			break;
		case 'ת':
			lineLeng += limiter;
			return 't'
			break;
		case 'י':
			lineLeng += smallLimiter;
			return 'y'
			break;
		case 'פ':
			lineLeng += limiter;
			return 'p'
			break;
		case 'ס':
			lineLeng += limiter;
			return 's'
			break;
		case 'ד':
			lineLeng += limiter;
			return 'd'
			break;
		case 'ג':
			lineLeng += smallLimiter;
			return 'g'
			break;
		case 'ה':
			lineLeng += limiter;
			return 'h'
			break;
		case 'כ':
			lineLeng += limiter;
			return 'k'
			break;
		case 'ל':
			lineLeng += limiter;
			return 'l'
			break;
		case 'ז':
			lineLeng += smallLimiter;
			return 'z'
			break;
		case 'ח':
			lineLeng += limiter;
			return 'x'
			break;
		case 'צ':
			lineLeng += limiter;
			return 'c'
			break;
		case 'ב':
			lineLeng += limiter;
			return 'b'
			break;
		case 'נ':
			lineLeng += smallLimiter;
			return 'n'
			break;
		case 'מ':
			lineLeng += limiter;
			return 'm'
			break;
		case 'ף':
			lineLeng += limiter;
			return 'P'
			break;
		case 'ך':
			lineLeng += limiter;
			return 'K'
			break;
		case 'ץ':
			lineLeng += limiter;
			return 'C'
			break;
		case 'ן':
			lineLeng += smallLimiter;
			return 'N'
			break;
		case 'ש':
			lineLeng += limiter;
			return '#'
			break;
		case 'ם':
			lineLeng += limiter;
			return 'M'
			break;
		case 'ע':
			lineLeng += limiter;
			return '('
			break;
		case 'א':
			lineLeng += limiter;
			return ')'
			break;
		case 'ט':
			lineLeng += limiter;
			return '+'
			break;
		case ' ':
			lineLeng += spaceLimiter;
			return ' '
			break;
        case '.':
       		lineLeng += periodLimiter;
            return '*';
            break;
		case null:
			return ' '
			break;
	    default:
	        return Letter
	    }
	}
	function dHebrewToEnglish(Letter) {
		switch(Letter) {
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
		case null:
			return ' '
			break;
	    default:
	        return Letter
	
		}
	}

	if (fontInput = "SPT")
	{
		func = sHebrewToEnglish;
	}
	else
	{
		func = dHebrewToEnglish;
	}

	for (var i = 0; i < hebrew.length; i++)
	{
		englishLines[i] = func(hebrew.charAt(i));
		if (lineLeng >= LETTER_PER_FONTUNIT)
		{
			lineLeng = 0;
			i -= i - englishLines.join("").lastIndexOf(' ');
			for (var k = 0; k < i; k++)
			englishArray [j] = englishLines[k];
			englishArray [j] = englishArray[j].reverse();
			j++
		}
	}
	englishWord = englishArray.reverse().join("");
	alert(englishWord);
	$('#return').text(englishWord);
});
