/*
Filename: multiWrites1.js
Written by: Jules Leow (JL)
Purpose: The JavaScript code that controls the document.write() that will affect multiWrites1.html
Date: 09/04/2017
Modification History:
Original Build
*/

$(document).ready(function() {
    var writeMethodStr = 'Arrr! I be Cap\'n Jules Leow! Yer timbers be shiver\'n if ye knew the type-a pirate yer messin\' with!'; //Set a variable to the string I want.
    document.write(writeMethodStr); //Replace the html with the document.write() method by passing in string from the variable.
}); 