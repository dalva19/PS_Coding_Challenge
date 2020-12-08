const findSum = function(array) {

  let sum = array.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  })
  return sum;
};

const reduceLetters = (array) => {
  //Store the number counts in object
  return array.reduce((a, b) => {
    if (!a[b]) {
      a[b] = 1;
    } else {
      a[b]++;
    }
    return a;
  }, {});
}; 

const findFrequency = function (array) {
  let letters = {
  most: '',
  least: ''
  };

  let letterCount = reduceLetters(array); //counter 

  let arr = Object.values(letterCount); //Array with the count values. Used to find min and max. 
  let min = Math.min(...arr); // 1
  let max = Math.max(...arr); // 4
  
  Object.entries(letterCount).forEach(([key, value]) => {
    if (value === min) {
      letters['least'] = key;
    } else if(value === max) {
      letters['most'] = key;
    }
  }); 

  return letters;
};

const isPalindrome = function(str) {
    str = str.toLowerCase().split('');

    let str2 = str.filter(function(x){

        if(x != ' ' && x != ',' && x != '.' && x != '?') {
            return x;
        };
    });

    return str2.join('') === str2.reverse().join('')
};


const largestPair = function(array) {
  let maxProduct;
  let productArr = [];

  for (i = 0; i < array.length - 1; i++) {
    
    productArr.push(array[i] * array[i + 1]); //pushes product of adjacent pairs into productArr
    maxProduct = Math.max(...productArr); //finds max number in array
  };

  return maxProduct;
};


const removeParenth = function(str) {
  let str2;
  let str3;

  for (let i = 0; i < str.length; i++) {

    if (str[i] != '(') {
      str2 = str.slice(0, str.indexOf('('));

    } else if (str[i] != ')') {
      str3 = str.slice(str.indexOf(')') + 1, str.length);

    };
  };
  return str2.concat('', str3);
};


const scoreScrabble = function(str) {
  str = str.toLowerCase(); // accounts for capital letters in a string

  //scoreboard
  const one = ['a', 'e', 'i', 'o', 'l', 'n', 'r', 's', 't', 'u'];
  const two = ['d', 'g'];
  const three = ['b', 'c', 'm', 'p'];
  const four = ['f', 'h', 'v', 'w', 'y'];
  const five = ['k'];
  const eight = ['j', 'x'];
  const ten = ['q', 'z'];

  let wordScore = 0; //counter

  //for loop iterates through the string input
  for (let i = - 1; i < str.length; i++) {

    const letterCount = function (array, num) {

      array.forEach(letter => {
        if (str[i] === letter) {
        wordScore = wordScore + num;
      }
    }) // Nested forEach loop function. Adds to the wordScore count based on the assigned value of the letter.
  };
    letterCount(one, 1);
    letterCount(two, 2);
    letterCount(three, 3);
    letterCount(four, 4);
    letterCount(five, 5);
    letterCount(eight, 8);
    letterCount(ten, 10);
  };

  return wordScore;

};
