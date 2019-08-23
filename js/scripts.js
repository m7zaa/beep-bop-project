$(document).ready(function(){

  $("#form").submit(function(event){
    event.preventDefault();
  var userInput = $("#userInput").val();
  var numString = userInput.split("");
  var beep = ["Beep!"]
  var boop = ["Boop!"]
  var sorry = ["I'm sorry, David. I'm afraid I cannot do that."]
  var nums = ["1", "2", "3"];
  var newArray = [];

console.log(numString);


  // for (var i = 0; i <= userInput; i++) {
  //   $("#list").append("<li>" + i + "</li>");
  // };

//   for (var i = 0; i < userInput; i++) {
//     if ("1"===numString[i]) {
//       newArray.push("beep!");
//     }
//     else if ("2"===(numString[i])) {
//       newArray.push("boop");
//     }
//     else if ("3"===(numString[i])) {
//       newArray.push("sorry");
//     }
//     else {
//       newArray.push(numString[i]);
//       console.log(newArray);
//     }
//     $("#list").append(newArray[i]);
// }

  for (var i = 0; i <= userInput; i++) {
    if ("1".includes(numString[i])) {
      newArray.push("beep!");
    }
    else if ("2".includes(numString[i])) {
      newArray.push("boop");
    }
    else if ("3".includes(numString[i])) {
      newArray.slice("sorry");
    }
    else {
      newArray.push([i]);
      console.log(newArray);
    }
    $("#list").append(newArray[i] + ", ");
}




  });
});
