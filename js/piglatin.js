var srcStr;
var i = 0;
var stepOne = [];
var checkVowel =
function(src){
  if(src[i].startsWith("a" || "e" || "i" || "o" || "u", 0)){
    return true;
  }
  else {
    return false;
  }

}




function Splitstring(){
  //input
  srcStr = $("#pLatinSource").val();
  stepOne = srcStr.split(' ');
  //string has been split into words


}
function IgPayAtinLay(){
  stepOne.forEach(function(y){
    var steptwo = stepOne[i].split('');
    console.log("steptwo = " + steptwo);

    console.log("steptwo = " + steptwo);

    console.log("y = " + y);
    if (checkVowel(srcStr) == true){
      steptwo.push(steptwo[0] + "way");
      steptwo.shift();
    }

    else{
      steptwo.push(steptwo[0] + "ay");
      steptwo.shift();
    }
    stepOne[i] = steptwo.join('');
    i++;
    console.log("steptwo = " + steptwo);
  });
  i = 0;
}


$(document).ready(function() {
  // Stuff to do as soon as the DOM is ready

  $("#pLatinForm").submit(function(event){
    console.log(stepOne);
    Splitstring();
    IgPayAtinLay();
    console.log(stepOne.join(' '));
    $("#pLatinOutput").html(stepOne.join(' '));
    event.preventDefault();

  })

});
