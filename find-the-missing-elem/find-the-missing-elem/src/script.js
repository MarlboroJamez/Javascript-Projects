//Note the following Challenge is based on Time Complexity!

function onSubmit(){
   var myInt = parseInt(document.getElementById('user-input').value);
   let myFunc = num => Number(num);
   var intArr = Array.from(String(myInt), myFunc);
  
   document.getElementById("output").innerHTML = "Missing Element:  " + solution(intArr);
}



function solution(A) {
  //We return 1 if the given array is empty, which is the missing element in an empty array.
    if (!A.length) return 1;
  
  //Next we calculate the 'ordinary' series sum, assuming the first element in the series is always 1. Then we find the difference between the given array and the full series, and return it. This is the missing element.
    let n = A.length + 1;
    return (n + (n * n - n) / 2) - A.reduce((a, b) => a + b);
}

//The mathematical function I used here are series sum, and last element:
//Sn = (n/2)*(A1 + An)
//An = A1 + (n - 1)*d


//QUESTION (TOTAL: 100%)
//An array A consisting of N different integers is given. The array contains integers in the range [1..(N + 1)], which means that exactly one element is missing.

//Your goal is to find that missing element.

//Write a function:

//function solution(A);

//that, given an array A, returns the value of the missing element.

//For example, given array A such that:

//  A[0] = 2
//  A[1] = 3
//  A[2] = 1
//  A[3] = 5
//the function should return 4, as it is the missing element.

//Write an efficient algorithm for the following assumptions:

//N is an integer within the range [0..100,000];
//the elements of A are all distinct;
//each element of array A is an integer within the range [1..(N + 1)].