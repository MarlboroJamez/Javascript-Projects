//The whole idea to this excercise is to Jump from point X to Y, in the fastest time complexity 
//but as well as determining the minimal jumps
//by simply applying the basic math
//example: Y=85 & X=10 & D=30
//We would simply use (Y-X)/D to determine the minimal jumps
function onSubmit() {
  var X = document.getElementById("X").value;
  var Y = document.getElementById("Y").value;
  var Z = document.getElementById("D").value;
  
  
  document.getElementById("output").innerHTML = "Total Jumps: " + solution(X,Y,Z);  
}

function solution(X,Y,D){
  //first we need to set our "skeleton" by going the a few statements, elimating all unuseful declarations and loops
  
  //checking wether if X is greater than why, if so we return false
  if(X >= Y){
    return 0
  }
  //If it's the exact value it won't work, so we declare it false
  else if(X === Y){
    return 0
  }
  //If D ends being greater than the formula being used, it won't work in our best interest, so it's true
  else if(D >= (Y-X)){
    return 1
  }
  //once we have completed our checks, the magic starts here, by simply parsing our output, with the use of the formula given,
  //we are to avoid any decimals, giving us more effecient time, when the code is processed.
  else {
    minimalJumps = parseInt((Y-X)/D)
    minimalJumps += ((Y-X)/D) > 0 ? 1:0
    return minimalJumps
  }
}

//A small frog wants to get to the other side of the road. The frog is currently located at position X and wants to get to a position greater than or equal to Y. The small frog always jumps a fixed distance, D.

//Count the minimal number of jumps that the small frog must perform to reach its target.

//Write a function:

//class Solution { public int solution(int X, int Y, int D); }

//that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.

//For example, given:

 // X = 10
 // Y = 85
 // D = 30
//the function should return 3, because the frog will be positioned as follows:

//after the first jump, at position 10 + 30 = 40
//after the second jump, at position 10 + 30 + 30 = 70
//after the third jump, at position 10 + 30 + 30 + 30 = 100
//Write an efficient algorithm for the following assumptions:

//X, Y and D are integers within the range [1..1,000,000,000];
//X ≤ Y.