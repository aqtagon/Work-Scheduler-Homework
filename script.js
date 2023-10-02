// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var currentDay = dayjs().format("dddd, MMMM D")
  $("#currentDay").text(currentDay);

  var currentHour = dayjs().hour();

  $(".time-block").each(function (){
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).addClass("past");
    } else if (blockHour === currentHour) {
      $(this).addClass("present");
    } else {
      $(this).addClass("future");
    }
  });
  
  $(".saveBtn").on("click", function () {
    var timeBlockId = $(this).parent().attr("id");
    var eventDescription = $(this).siblings(".description").val();

    localStorage.setItem(timeBlockId, eventDescription);
  });

  $(".time-block").each(function () {
    var timeBlockId = $(this).attr("id");
    var savedEvent = localStorage.getItem(timeBlockId);

    if (savedEvent) {
      $(this).find(".description").val(savedEvent);
    }
  });
});


