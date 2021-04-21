



function onSubmit(){
  const user_inp = document.getElementById("gv-value").value;
  document.getElementById("gap").innerHTML = convertor(user_inp);
}

function onClear(){
  document.getElementById("gv-value").value = '';
  document.getElementById("gap").innerHTML = '';
}

function convertor(N){
  let foundOne = false; //boolean value
  let divRes = N; //value given
  let maxGap = 0; 
  let zeroCntr = 0; //setting the counter to 0
  
  //if the value starts with 1 begin while loop
  while(divRes != 0){
    //If the given value is 1, the loop will be contiunues when it's followed up with a ending value 1
    //force the counter to a restart, in other words ending the while loop
    if(divRes%2){
      foundOne = true;
      //restarting our counter
      counter = 0;
    }
    //Checks wether we have found a 1 or not
    else if(foundOne){
      //we start incrementing the zeroCntr (counter)
      zeroCntr++;
      //Once the value becomes greater than zero, we assign the number of 0' to maxGap, forcing
      //the loop to it's end, which the end value is 1, since the we are focused on the start
      //and the end (1)
      if(zeroCntr > maxGap){
        maxGap = zeroCntr;
      }
    }
    divRes = Math.floor(divRes/2);
  }
  return maxGap;
}

//QUESTION (100% TOTAL)

//A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

//For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

//Write a function:
//function solution(N);

//that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

//For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

//Write an efficient algorithm for the following assumptions:

//--N is an integer within the range [1..2,147,483,647]




