/*function findMax(arr, index = 0, max = -Infinity) {
   
    if (index >= arr.length) {
      return max;
    }
    
   
    if (arr[index] > max) {
      max = arr[index];
    }
    
    
    return findMax(arr, index + 1, max);
  }
  
  var array = [6, 9, 26, 72, 3, 92, 105, 26];
  console.log(findMax(array)); */

  
  
  /*function lettersWithStrings(words, char) {
    var result = [];

    words.forEach(function(word) {
      if (word.includes(char)) {
        result.push(word);
      }
    });

    return result;
  }
  
  var wordsArray = ["#3", "$$$", "C%4!", "Hey!"];
  var character = "!";
  
  var wordsContainingCharacter = lettersWithStrings(wordsArray, character);
  console.log(wordsContainingCharacter); */

  
  var isDivisabe = function(num1, num2) {
    if(num2 !== 0 && num1 % num2 === 0) {
        return true;
    } else {
        return false;
    }
  }
  console.log(isDivisabe(4, 12))

