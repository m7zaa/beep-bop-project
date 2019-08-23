$(document).ready(function(){

  $("#form").submit(function(event){
    event.preventDefault();
  var userInput = $("#userInput").val();
  // var numString = userInput.split("");
  var countArray = [];
  var newArray = [];

  // takes userInput and converts to strings inside array.
  for (var i = 0; i <= userInput; i++) {
    var string = i.toString();
    countArray.push(string);
  };

  console.log(countArray);



  // for (var j = 0; j < countArray.length; j++) {
countArray.forEach(function(count) {
    if (count.includes("3")) {
      newArray.push("sorry");
    }
    else if (count.includes("2")) {
      newArray.push("boop");
    }
    else if (count.includes("1")) {
      newArray.push("beep");
    }
    else {
      newArray.push(count);
    }
    console.log(newArray);

});
$("#list").append("<li>" + newArray + "</li>");
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
