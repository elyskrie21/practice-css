function FirstFactorial(num) {
  var i; 
  var most = num - 1; 
  for(i = 1; i <=most; i++){
    num *= i; 
  }
  
  console.log(num); 
}

Number(78909);
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(4); 
FirstFactorial(8);