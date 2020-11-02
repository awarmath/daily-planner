$(document).ready(function () {
    $("#currentDay").text(moment().format("MMMM Do YYYY"));

    function timeTracker () {
        var currentHour = moment().hour();

        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);

            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    timeTracker();
})