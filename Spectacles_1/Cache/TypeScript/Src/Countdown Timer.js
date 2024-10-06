// CountDownTimer.js
// Version: 1.0.0
// Event: On Awake
// Description: This script lets you run a countdown timer backward from the entered target date, letting you get the same results in whichever time zone you enter the targeted time.

// @ui {"widget":"separator"}
// @ui {"widget":"group_start","label":"Select target time according to the UTC time zone"}
// @input int month = 1 {"widget":"slider", "min":1, "max":12, "step":1}   
// @input int day = 1 {"widget":"slider", "min":1, "max":31, "step":1}   
// @input int hour = 1 {"widget":"slider", "min":1, "max":24, "step":1}   
// @input int minute = 1 {"widget":"slider", "min":0, "max":60, "step":1}  
// @input int second = 1 {"widget":"slider", "min":0, "max":60, "step":1}    
// @input Component.Text myText
// @ui {"widget":"group_end"}

var event = script.createEvent("UpdateEvent");
event.bind(function(eventData) {
    countDown();
});

function countDown() {
    var now = new Date();
    var targetTime = new Date();

    // Convert current time to UTC time zone
    now.setMonth(now.getUTCMonth());
    now.setDate(now.getUTCDate());
    now.setHours(now.getUTCHours());
    now.setMinutes(now.getUTCMinutes());
    now.setSeconds(now.getUTCSeconds());

    targetTime.setMonth(script.month - 1);
    targetTime.setDate(script.day);
    targetTime.setHours(script.hour);
    targetTime.setMinutes(script.minute);
    targetTime.setSeconds(script.second);

    var difference = targetTime - now;
    var seconds = difference / 1000;
    var minutes = seconds / 60;
    var hours = minutes / 60;

    // Remaining Days
    var days = hours / 24;

    // Remaining  Hours
    var hoursRemaining = days * 24 % 24;

    // Remaining  Minutes
    var minutesRemaining = hoursRemaining * 60 % 60;

    // Remaining Seconds
    var secondsRemaining = minutesRemaining * 60 % 60;

    if (Math.floor(days) < 0) {
        print("Remaining Days 00");
    } else if (Math.floor(days) < 10) {
        print("Remaining Days 0" + Math.floor(days).toString());
    } else {
        print("Remaining Days " + Math.floor(days).toString());
    }

    if (Math.floor(hoursRemaining) < 0) {
        print("Remaining Hours 00");
    } else if (Math.floor(hoursRemaining) < 10) {
        print("Remaining Hours 0" + Math.floor(hoursRemaining).toString());
    } else {
        print("Remaining Hours " + Math.floor(hoursRemaining).toString());
    }

    if (Math.floor(minutesRemaining) < 0) {
        print("Remaining Minutes 00");
    } else if (Math.floor(minutesRemaining) < 10) {
        print("Remaining Minutes 0" + Math.floor(minutesRemaining).toString());
    } else {
        print("Remaining Minutes " + Math.floor(minutesRemaining).toString());
    }

    if (Math.floor(secondsRemaining) < 0) {
        print("Remaining Seconds 00");
    } else if (Math.floor(secondsRemaining) < 10) {
        print("Remaining Seconds 0" + Math.floor(secondsRemaining).toString());
    } else {
        print("Remaining Seconds " + Math.floor(secondsRemaining).toString());
    }
}