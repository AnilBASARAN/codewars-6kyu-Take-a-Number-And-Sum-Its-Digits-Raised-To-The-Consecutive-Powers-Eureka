function sumDigPow(a, b) {
    let range = Array(b-a).fill(1).map((x,i)=> x = i+a )
    let result =[]
    function numberChecker(number){
      let sum = 0
      for(let i = 0 ; i < number.toString().split('').length;i++){
        sum = sum + Number(number.toString().split('')[i])**(i+1)
      }
      if(number == sum ){
         return number
      }else{
        return false
      }
    }
    return range.map(x => x = numberChecker(x) ).filter(x=> x != false)
    }



    /*

    6kyu-Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!


    The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

In effect: 89 = 8^1 + 9^2

The next number in having this property is 135.

See this property again: 135 = 1^1 + 3^2 + 5^3

We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

Let's see some cases:

sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
If there are no numbers of this kind in the range [a, b] the function should output an empty list.

sumDigPow(90, 100) == []
Enjoy it!!

https://www.codewars.com/kata/5626b561280a42ecc50000d1/train/javascript

BEST SOLUTİONS

-----------------------------------------------------------------------------

function sumDigPow(a, b) {
  var ans = [];
  while(a <= b){
    if(a.toString().split('').reduce((x,y,i)=>x + +y ** (i + 1),0) == a)
      ans.push(a);
    a++;
  }
  return ans;
}


-----------------------------------------------------------------------------
function sumDigPow(a, b) {
  var arr = [];
  for (var i = a; i <= b; i++) {
    var sum = 0;
    for (var j = 0; j <= String(i).length; j++) {
      sum += Math.pow(parseInt(String(i)[j]), j+1);  
      if (sum == i) arr.push(i);
    }
  }
  return arr;
}

-----------------------------------------------------------------------------

function filterFunc(n) {
  return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
}

function *range(a, b) {
  for (var i = a; i <= b; ++i) yield i;
}

function sumDigPow(a, b) {
  return Array.from(range(a, b)).filter(filterFunc);
}

-----------------------------------------------------------------------------

function sumDigPow(a, b) {
  return Array(b-a+1).fill().map(() => a++).filter(val => val.toString().split('').map(x => parseInt(x)).reduce((total, v, i) => total + v ** (i+1)) == val);
}