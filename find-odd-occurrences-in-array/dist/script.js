function onSubmit(){
   var myInt = parseInt(document.getElementById('user-input').value);
   let myFunc = num => Number(num);
   var intArr = Array.from(String(myInt), myFunc);
  
   document.getElementById('value-output').innerHTML = "Odd Value:  " + solution(intArr);
  
}



//GENERAL NOTE
//Assigning properties to a given object containing an Array.
//We are able to eliminate duplicate values containing the same property

//Each repetitive value teachnically contains the same property right?
//stay open minded

function solution(A) {
  //Creating our Object before assigning property values
  object = new Object()
  
  //Looping through the length of the given Array
  //Example: A= [1,2,1,2,1,3,1] which is the length of 6
  for(let i=0; i < A.length; i++){
    //Remember what I said about repetitive values containing the same properties
    //Now we need to check if that index contains a property
    if(object.hasOwnProperty(A[i])){
      //If it does contain a property, we delete that assigned property
      //Now this is the core to the whole function, allowing us to delete all
      //duplicate values containing the same property, which allows to find the odd occurance, which does NOT
      //have a repetitive value
      delete object[A[i]]
    }
    else {
      //Applies the property value of 1
      object[A[i]] = 1;
    }
  }
  //Display all the values that contains a property, meaning if A= [1,2,1,2,1, 3 ,1],
  //3 would standout right?
  solution = Object.keys(object)
  return parseInt(solution[0])
}


//QUESTION (TOTAL 100%)

//A non-empty array A consisting of N integers is given. The array contains an odd number of elements, and each element of the array can be paired with another element that has the same value, except for one element that is left unpaired.

//For example, in array A such that:

  //A[0] = 9  A[1] = 3  A[2] = 9
  //A[3] = 3  A[4] = 9  A[5] = 7
  //A[6] = 9
//the elements at indexes 0 and 2 have value 9,
//the elements at indexes 1 and 3 have value 3,
//the elements at indexes 4 and 6 have value 9,
//the element at index 5 has value 7 and is unpaired.
//Write a function:

//function solution(A);

//that, given an array A consisting of N integers fulfilling the above conditions, returns the value of the unpaired element.

//For example, given array A such that:

  //A[0] = 9  A[1] = 3  A[2] = 9
  //A[3] = 3  A[4] = 9  A[5] = 7
  //A[6] = 9
//the function should return 7, as explained in the example above.

//Write an efficient algorithm for the following assumptions:

//N is an odd integer within the range [1..1,000,000];
//each element of array A is an integer within the range [1..1,000,000,000];
//all but one of the values in A occur an even number of times.