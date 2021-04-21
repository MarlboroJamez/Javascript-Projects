//Converting user input (string) to an Array
function onSubmit(){
  var myInt = parseInt(document.getElementById('userinput').value);
  var K = parseInt(document.getElementById('user-value').value);
  // Getting the string as a parameter
  // and typecasting it into an integer
  let myFunc = num => Number(num);
  var A = Array.from(String(myInt), myFunc);
  document.getElementById('output').innerHTML = "[" + solution(A, K).toString() + "]";
}



function solution(A,K){
  //First we need to check if K is divisible by the lentgh of the array
  //wether it returns 0 no rotation would be needed.
  //for example if K=5 and A=[1,2,3,4,5], the value of K mod the length of the array returns 0
  //meaning no rotation would be needed, the array would output the exact same result.
  if(K%A.length == 0){
    //If it's true, it returns the array of A
    return A;
  }
  else{
    //Else we return the remainder operation
    //for example K=7 and A=[1,2,3,4,5], so 7 mod by the length of the array is 2
    //which means 2 rotations will take place in the Array
     K = K%A.length;
  }
  
  //over here we are creating a new array, where by the old array will be copied
  //over with the new index provided by AIdx
  let newA = [];
  let AIdx = 0;
  
  //If K=3 and A=[1,2,3,4,5], the new supplied index would be the given value of K
  //meaning if K is lower than the length we copy the old array from A to the new Array
  //with the index supplied by K=3
  //for example below the output would be for this loop on the given value K [0,0,0,1,2];
  for(let i=K; i<A.length; i++)
    {
     newA[i] = A[AIdx];
     AIdx++;
    }
  
  //The is followed up by the previous example above, but the only difference is,
  //instead of applying the index from K(3), we starting the index from 0
  //which alows us to fill the left over values in the array
  //For example: loop-1 was [0,0,0,1,2]
  //now loop-2 is [3,4,5,0,0]
  for(let i=0; i<K; i++){
    newA[i] = A[AIdx];
    AIdx++;
  }
  //returning the complete array NewA=[3,4,5,1,2]
  return newA;
}


//QUESTION (100% TOTAL)

//An array A consisting of N integers is given. Rotation of the array means that each element is shifted right by one index, and the last element //of the array is moved to the first place. For example, the rotation of array A = [3, 8, 9, 7, 6] is [6, 3, 8, 9, 7] (elements are shifted right //by one index and 6 is moved to the first place).

//The goal is to rotate array A K times; that is, each element of A will be shifted to the right K times.

//Write a function:

//function solution(A, K);

//that, given an array A consisting of N integers and an integer K, returns the array A rotated K times.

//For example, given

    //A = [3, 8, 9, 7, 6]
    //K = 3
//the function should return [9, 7, 6, 3, 8]. Three rotations were made:

    //[3, 8, 9, 7, 6] -> [6, 3, 8, 9, 7]
    //[6, 3, 8, 9, 7] -> [7, 6, 3, 8, 9]
    //[7, 6, 3, 8, 9] -> [9, 7, 6, 3, 8]
//For another example, given

    //A = [0, 0, 0]
    //K = 1
//the function should return [0, 0, 0]

//Given

    //A = [1, 2, 3, 4]
    //K = 4
//the function should return [1, 2, 3, 4]

//Assume that:
//N and K are integers within the range [0..100];
//each element of array A is an integer within the range [−1,000..1,000].