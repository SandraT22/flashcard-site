$(document).ready(function() {
  $(".clickable1").click(function() {
    $("#javascript-word").toggle();
    $("#javascript-definition").toggle();
  });
  $(".clickable2").click(function() {
    $("#operators-word").toggle();
    $("#operators-definition").toggle();
  });
  $(".clickable3").click(function() {
    $("#variables-word").toggle();
    $("#variables-definition").toggle();
  });
  $(".clickable4").click(function() {
    $("#naming-word").toggle();
    $("#naming-definition").toggle();
  });
  $(".clickable5").click(function() {
    $("#functions-word").toggle();
    $("#functions-definition").toggle();
  });
  $(".clickable6").click(function() {
    $("#methods-word").toggle();
    $("#methods-definition").toggle();
  });
  $(".clickable7").click(function() {
    $("#arguments-word").toggle();
    $("#arguments-definition").toggle();
  });
  $("button#question").click(function() {
    $("ul#user").append("<p>Want to lear some JavaScript terms?<p>");
    $("ul#webpage").append("<p>Click the links below to study!<p>");
  });
});