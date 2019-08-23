$(document).ready(function(){

  $("#form").submit(function(event){
    event.preventDefault();
  var userInput = $("#userInput").val();
  // var numString = userInput.split("");
  var beep = ["Beep!"]
  var boop = ["Boop!"]
  var sorry = ["I'm sorry, David. I'm afraid I cannot do that."]
  var nums = ["1", "2", "3"];
  var newArray = [];


  for (var i = 0; i <= userInput; i++) {
    newArray.push(i);
    $("#list").append("<li>" + i + "</li>");
  };


  for (var i = 0; i < newArray.length; i++) {
    if ("1".includes(newArray[i])) {
      newArray.push("beep!");
    }
    else if ("2".includes(newArray[i])) {
      newArray.push("boop");
    }
    else if ("3".includes(newArray[i])) {
      newArray.push("sorry");
    }
    else {
      newArray.push(newArray[i]);
      console.log(newArray);
    }
}


    // if ("1".includes(userInput[i])) {
    //   newArray.push("beep!");
    // }
    // else if ("2".includes(userInput[i])) {
    //   newArray.push("boop");
    // }
    // else if ("3".includes(userInput[i])) {
    //   newArray.push("sorry");
    // }
    // else {
    //   newArray.push([i]);
    //   console.log(newArray);
    // }





  });
});
