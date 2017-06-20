$(document).ready(function() {
	var SD = prompt("SPT or Davka B?") ;
	var hebrew = prompt("Copy paste that Hebrew");
	var func = function() {};
	var englishArray = [];
	var englishWord = " " ;
	function sHebrewToEnglish(Letter) {
		switch(Letter) {
	    case 'ק':
	        return 'q'
	        break;
		case 'ו':
			return 'w'
			break;
		case 'ר':
			return 'r'
			break;
		case 'ת':
			return 't'
			break;
		case 'י':
			return 'y'
			break;
		case 'פ':
			return 'p'
			break;
		case 'ס':
			return 's'
			break;
		case 'ד':
			return 'd'
			break;
		case 'ג':
			return 'g'
			break;
		case 'ה':
			return 'h'
			break;
		case 'כ':
			return 'k'
			break;
		case 'ל':
			return 'l'
			break;
		case 'ז':
			return 'z'
			break;
		case 'ח':
			return 'x'
			break;
		case 'צ':
			return 'c'
			break;
		case 'ב':
			return 'b'
			break;
		case 'נ':
			return 'n'
			break;
		case 'מ':
			return 'm'
			break;
		case 'ף':
			return 'P'
			break;
		case 'ך':
			return 'K'
			break;
		case 'ץ':
			return 'C'
			break;
		case 'ן':
			return 'N'
			break;
		case 'ש':
			return '#'
			break;
		case 'ם':
			return 'M'
			break;
		case 'ע':
			return '('
			break;
		case 'א':
			return ')'
			break;
		case 'ט':
			return '+'
			break;
	    default:
	        alert("K THIS CODE DOESN'T WORK IF U DON'T PUT A HEBREW LETTER")
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
	    default:
	        alert("K THIS CODE DOESN'T WORK IF U DON'T PUT A HEBREW LETTER")
	
		}
	}
	if (SD = "SPT")
	{
		func = sHebrewToEnglish;
	}
	else
	{
		func = dHebrewToEnglish;
	}
	for (var i = 0; i < hebrew.length; i++)
	{
		englishArray[i] = func(hebrew.charAt(i));
	}
	for(var j = 0; j < englishArray.length; j++)
	{
		englishWord+=englishArray[englishArray.length - j - 1];
	}
	alert(englishWord);
	$('#return').text(englishWord);
});
