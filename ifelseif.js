var totalGen = 19;
var totalMW = 0;

for (var num = 1; num<= totalGen; num++) {
  if (num % 2 != 0){
    console.log("Generator #" + num + " is off.");
  } else if (num % 2 == 0){
      if (num == 2 || num == 4) {
        totalMW = totalMW + 62
        console.log("Generator #"+ num +" is on, adding 62 MW, for a total of " + totalMW + " MW!");
      } else {
        totalMW = totalMW + 124
        console.log("Generator #"+ num +" is on, adding 124 MW, for a total of " + totalMW + " MW!");
      }          
  }
}  
