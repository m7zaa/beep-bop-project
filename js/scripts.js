// back-end logic
function countBoop(input) {
  var countArray = [];
  var pushArray = [];

  // takes input and makes an array with countback strings inside
  for (var i = 0; i <= input; i++) {
    countArray.push(i.toString());
  }
  // takes countArray and searches each string for numbers 3, 2, 1 and replaces each with corresponding replacement word in order of priority. If numbers do not contain 3, 2 or 1, the actual number is pushed.
  countArray.forEach(function(digit) {
    if (digit.includes("3")) {
      pushArray.push(" I'm sorry, David. I can't do that");
    }
    else if (digit.includes("2")) {
      pushArray.push(" Boop!");
    }
    else if (digit.includes("1")) {
      pushArray.push(" Beep!");
    }
    else {
      pushArray.push(" " + digit);
    }
  });
  return pushArray;
}


// front end ui
$(document).ready(function(){
  $("#form").submit(function(event){
    event.preventDefault();
    $("#list").show();
    $(".result").show();
    var input = $("#userInput").val();
    var result = countBoop(input);
    var reverseResult= result.reverse();
    // this returns result into an unordered list item
    $("#list").empty().append("<p>" + reverseResult + " ...BLASTOFF!" + "</p>");
    $("#number").html(input);
  });
});
