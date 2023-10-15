
$(function () {
  var currentDay = dayjs().format("dddd, MMMM D")
  $("#currentDay").text(currentDay);

  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockHour = parseInt($(this).attr("id").split("-")[1]);

    if (blockHour < currentHour) {
      $(this).removeClass("present future").addClass("past");
    } else if (blockHour === currentHour) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
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


