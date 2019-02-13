var inputyear,yearBool, outputString;

$(document).ready(function(){
  $("#leapForm").submit(function(event){
    Checkyear();
    printYear();
    console.log(yearBool);
    event.preventDefault();
  });
});

function printYear()
{
  console.log(yearBool);
  $("#leapOutput").html(inputyear + " " + outputString);
}
function Checkyear()
{
  inputyear = $("#leapSource").val();
  if(inputyear % 4 == 0){
      yearBool = true;
      outputString = "is a leap year.";
      if(inputyear % 100 == 0){
        outputString = "is not a leap year as it is divisible by 100 and not 400.";
        yearBool = false;
        if(inputyear % 400 == 0){
          yearBool = true;
          outputString = "is a leap year. It is divisible by 4, 100, and 400.";
        }
      }
  }
  else{
    yearBool = false;
    outputString = "This is either not a leap year or not a number at all.";
  }
}
