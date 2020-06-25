// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours
// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
// WHEN I click into a timeblock
// THEN I can enter an event
// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

console.log("testing");

//Put all functions inside a document ready function when running jQuery.
$(document).ready(function(){

    //Use the moment() method from Moment.js to return the current day to a var today.
    console.log(moment().format('MMMM DD YYYY'));
    var today = (moment().format('MMMM DD YYYY'));
    console.log(today);


    //Point that today var to the place on the index.html where we want today's date to appear.
    // var today = $("#currentDay");
    today = document.querySelector("#currentDay");
    // $(#currentDay).html(today);

    //use Bootstrap to create a grid for the day with 9 rows and 3 columns in HTML.


    //To color code the timeblocks, we'll need a var of currentTime, which will constantly update to the time returned by moment() method.  
    var currentTime;

    let updateTime = function () {
        let currentTime = moment().format('h:mm:ss')
        $("#time").text(currentTime)
    };

    updateTime();

    //Each timeblock will have a value.

    //The results of this comparison will affect a var pastPresentFuture which toggles past, present, future to indicate when the background color style of a div needs to be changed.   
    var pastPresentFuture;

    //We can use an addClass jQuery statement embedded in an if else if else function.  if (currentTime < )
0.
    // To enter an event upon clicking into a timeblock, we'll need to create a text input element.
    var input = document.createElement("INPUT");
    input.setAttribute("type", "text");



    setInterval(updateTime, 1000);

});
