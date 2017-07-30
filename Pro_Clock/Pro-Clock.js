$(document).ready(function() {
    var music = $("#audio")[0];
    var start = false;
    var seconds = 0;
    var minutes = 10;
    var timer;
    var countTime = parseInt($("#sessionNum").html());
    var breakTime = parseInt($("#breakNum").html());

    $("#minusSession").click(function() {
        if (start === false) {
            if (countTime > 1) {
                countTime--;
                $("#sessionNum").html(countTime);
                $(".title").html("Session");
                $(".timer").html(countTime+":00");
                  seconds = 0;
                  minutes = countTime;
                  

            }

        }
    });

    $("#plusSession").click(function() {
        if (start === false) {
            countTime++;
            $("#sessionNum").html(countTime);
            $(".title").html("Session");
            $(".timer").html(countTime+":00");
            seconds = 0;
            minutes = countTime;
        }
    });

    $("#minusBreak").click(function() {
        if (start === false) {
            if (breakTime > 1) {
                breakTime--;
                $("#breakNum").html(breakTime);
                $(".title").html("Session");
                $(".timer").html(countTime+":00");
                seconds = 0;
                minutes = countTime;
            }
            
        }
    });
    $("#plusBreak").click(function() {
        if (start === false) {
            breakTime++;
            $("#breakNum").html(breakTime);
            $(".title").html("Session");
            $(".timer").html(countTime+":00");

            seconds = 0;
            minutes = countTime;
        }
    });

   function showClockTime() {
       if (minutes === 0 && seconds === 1) {
           music.play();
       }
       console.log("aaaaa");
       if (minutes === 0 && seconds === 0) {
           console.log("bbbb");
           if ($(".title").html() === "Session") {
               $(".title").html("Break");
               minutes = breakTime;
               $(".timer").html(minutes + ":0" + seconds);
           } else if ($(".title").html() === "Break") {
               $(".title").html("Session");
               minutes = countTime;
               $(".timer").html(minutes + ":0" + seconds);
           }
       } else {
           if (seconds === 0) {
               seconds = 60;
               minutes--;
           }
           seconds--;
           if (seconds < 10) {
               $(".timer").html(minutes + ":0" + seconds);
           } else {
               $(".timer").html(minutes + ":" + seconds);
           }
       }
   }
    $("#start").click(function() {
        if (start === false) {
            $("#start").val("Stop");
            timer = setInterval(showClockTime, 1000);
            start = true;
        } else if (start === true) {
            $("#start").val("Start");
            clearInterval(timer);
            start = false;
        }
    });
});
