if(!localStorage.getItem('userMorningInfo')){
    var thisUserInformation={
        userNumber:$('#modalUserNumber').html(),
        name: $('#nameInner').html(),
        city:$('#cityInner').html(),
        longitude:$('#longitudeInner').html(),
        latitude:$('#latitudeInner').html()
    }
    localStorage.setItem('userMorningInfo',JSON.stringify(thisUserInformation));

}else{
    let objUserInfo = JSON.parse(localStorage.getItem('userMorningInfo'));
    var thisUserInformation={
        userNumber:objUserInfo.userNumber,
        name: objUserInfo.name,
        city:objUserInfo.city,
        longitude:objUserInfo.longitude,
        latitude:objUserInfo.latitude
    }
}

$(document).ready(function () {

    interval = setInterval(startTicker, 3000);
  
    $("#newsNew").hover(function(){
        stopTicker();
    }, 
    function(){
        interval = setInterval(startTicker, 3000);
    });
    
    
    function blinker() {
        $('.blink_me').fadeOut(500);
        $('.blink_me').fadeIn(500);
    }

    setInterval(blinker, 1000);




    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('select').formSelect();
    $('.collapsible').collapsible();
    $('.sidenav').sidenav();

    $('#todoList').on('click','a',function(){
        $('#todoList').sidenav('close');
    })


    $('.todos').on('click', '.todoTask', function () {
        console.log('get rid of to-do item!')
        console.log(this.id);
        console.log('/' + thisUserInformation.userNumber + '/todo/' + this.id);

        $.ajax('/' + thisUserInformation.userNumber + '/todo/' + this.id, {
            type: "POST"
        })
        .then(function () {
            console.log('success');
            location.reload();
        })

    })

    $('#clearTasks').on('click', function () {

        let objectToSend = {
            userNumber: thisUserInformation.userNumber
        }
        $.ajax('/todo', {
            type: 'DELETE',
            data: objectToSend
        })
        .then(
            function () {
                location.reload();
                // window.location.href="/show/"+objectToSend.userNumber;
            }
        )
    })

    $('#addTask').on('click', function () {
        event.preventDefault();

        let newTaskDescription = $('#newTask').val().trim();
        console.log(newTaskDescription)

        if (newTaskDescription != '' && newTaskDescription != undefined) {
   
            let objectToSend = {
                description: newTaskDescription,
                userNumber: thisUserInformation.userNumber
            }

            $.ajax('/addtask', {
                type: 'POST',
                data: objectToSend
            })
            .then(
                function () {
                    console.log('ajax call POST to /addtask run');
                    location.reload();
                }
            )
        }
    
        document.getElementById('newTask').onkeydown = function (e) {
            if (e.keyCode == 13) {
                document.getElementById('addTask').click();
            }
        };
    
    })

//------------------------------- Tooth Timer -------------------------------------

    
    var isRunning=false;
    $('#toothTimerButton').on('click', function () {
        console.log('start timer!');
        if(!isRunning) countdown();
        var interval;
        function countdown() {
            $("#toothTimerButton").text("2:00");
            clearInterval(interval);
            isRunning=true;
            interval = setInterval(function () {
                var timer = $("#toothTimerButton").text();
                timer = timer.split(':');
                var minutes = timer[0];
                var seconds = timer[1];
                seconds -= 1;
                if (minutes < 0) return;
                else if (seconds < 0 && minutes != 0) {
                    minutes -= 1;
                    seconds = 59;
                }
                else if (seconds < 10 && length.seconds != 2) seconds = '0' + seconds;

                $("#toothTimerButton").text(minutes + ':' + seconds);

                if (minutes == 0 && seconds == 0){

                    $("#toothTimerButton").text("2:00");

                    $("#toothTimerButton").text("All Done!")
                    clearInterval(interval);
                    blink3();
                }
            }, 1000);
        }
        function blink3(){
            let count = 0;
            blink = setInterval(function(){
                count++;
                $('#toothTimerButton').toggle();

                if(count===6){
                    clearInterval(blink);
                    $("#toothTimerButton").text("Start Timer");
                    isRunning=false;
                    return;
                }
            },500)
        }
    })


});
//------------------------------- Weather part ------------------------------------


    function showPosition(position) {
        // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

        latitude =  $("#lat").val();
        longitude =  $("#longi").val();

        console.log(latitude);
        console.log(longitude);

        var location = {};
            location.latitude = latitude;
            location.longitude = longitude;
        $.ajax({
            type: "POST",
            url: '/api/weather',
            data: location,
            success: success,
        });

        function success(res) {
            console.log(res);
            console.log("weather data :" + res.temp);
            $("#demo").html("Temp here is : " + res.temp + "<br>" + "Humidity here is : " + res.humidity + "<br>" + "Wind-Speed is : " + res.windSpeed);
        }
    }

    function startTicker(){
        $("#newsNew li:first").slideUp(function(){
            $(this).appendTo($("#newsNew")).slideDown();
        });
    }
    
    function stopTicker()
    {
        clearInterval(interval);
    }

//------------------------------- Weather part ------------------------------------
    





