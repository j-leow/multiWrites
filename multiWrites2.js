/*
Filename: multiWrites2.js
Written by: Jules Leow (JL)
Purpose: The JavaScript code that controls the .textContent method that will affect the <div> with the 'textContentId'. .innerHTML will affect the <div> with the 'innerHTMLId'.
Date: 09/04/2017
Modification History:
Original Build
*/

$(document).ready(function() {
    var textContentMethodStr = 'I be spend\'n most o\' me time on th\' \'puter. \'S hard bein\' a nurd... \'Specially since I supposed t\' be a ruddy pirate!'; //Set a variable to the string I want.
    var elOutputOne = document.getElementById('textContentId');
    elOutputOne.textContent = textContentMethodStr;

    var innerHTMLMethodStr = 'Netflix be also me downfall \'cause I like t\' spend time watchin\' shows. I do this wit\' me strumpet, \'n cur.';
    var elOutputTwo = document.getElementById('innerHTMLId');
    elOutputTwo.innerHTML = innerHTMLMethodStr;
}); 