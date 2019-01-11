if(!localStorage.getItem('userMorningInfo')){
    alert('no user info found. getting user info from modal.')
    var thisUserInformation={
        userNumber:$('#modalUserNumber').html(),
        name: $('#nameInner').html(),
        city:$('#cityInner').html(),
        longitude:$('#longitudeInner').html(),
        latitude:$('#latitudeInner').html()
    }
    localStorage.setItem('userMorningInfo',JSON.stringify(thisUserInformation));
    alert('localStorage item set!')

}else{
    let objUserInfo = JSON.parse(localStorage.getItem('userMorningInfo'));
    alert('user info found!. fuck the modal info: '+objUserInfo);
    var thisUserInformation={
        userNumber:objUserInfo.userNumber,
        name: objUserInfo.name,
        city:objUserInfo.city,
        longitude:objUserInfo.longitude,
        latitude:objUserInfo.latitude
    }
}

console.log('your user Info according to what rests in the modal is '+JSON.stringify(thisUserInformation))



$(document).ready(function () {

    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('select').formSelect();
    $('.collapsible').collapsible();

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
                alert('in ajax .then and table cleared!');
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

    $('#toothTimerButton').on('click', function () {
        console.log('start timer!')
        var interval;
        function countdown() {
            clearInterval(interval);
            interval = setInterval(function () {
                var timer = $("#toothTimerButton").html();
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

                $("#toothTimerButton").html(minutes + ':' + seconds);

                if (minutes == 0 && seconds == 0) clearInterval(interval);
            }, 1000);
        }
        $("#toothTimerButton").click(function () {
            $("#toothTimerButton").text("2:00");
            countdown();
        });
    })

//------------------------------- Weather part ------------------------------------
    
    // $('#getWeather').on('click',function(){
    //     event.preventDefault();
    //     console.log('button clicked and function run')

    //     var x = document.getElementById("demo");

    //     if (navigator.geolocation) {
    //         navigator.geolocation.getCurrentPosition(showPosition);
    //     } else {
    //         x.innerHTML = "Geolocation is not supported by this browser.";
    //     }
    // })
    var x = document.getElementById("demo");

    function getLocation() {
        console.log('button clicked and function run')
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        // x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;

        latitude = position.coords.latitude;
        longitude = position.coords.longitude;

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
            console.log("weather data :" + res.temp);
            $("#demo").text("Temp here is : " + res.temp);
        }
    }

//------------------------------- Weather part ------------------------------------
    


})


