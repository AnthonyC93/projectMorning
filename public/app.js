var userNumber = 10154;


//need to add task adding functionality. when user presses 'add task', a post request is sent to user/toDoList, 
$(document).ready(function () {
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('select').formSelect();
    $('.collapsible').collapsible();


    //     if(localStorage.getItem('userMorningNumber')===null){
    //         console.log("there is no user MorningNumber here");
    //         $("#userQuestions").modal("open");
    //     }else{
    //         console.log("user MorningNumber found!: "+localStorage.getItem('userMorningNumber'));
    //     }
    // });
    // let hasVisited=true;
    // if(localStorage.getItem('userMorningNumber')===null){
    //     console.log("there is no user MorningNumber here");

    //     localStorage.setItem('userMorningNumber',10154);
    //     console.log('userNumber SET!!!!')
    //     //2 options presented to user:
    //     // Enter User Number form OR
    //     // Enter User Preferences form
    // }else{
    //     console.log("userMorningNumber found!: "+localStorage.getItem('userMorningNumber'));

    //     //send ajax call to get /userNumber
    //     // $.ajax('/'+userNumber, {
    //     //     type: "GET"
    //     // }).then(function(){
    //     //     console.log('userfound!!');

    //     // })

    //         // window.location.replace('/'+localStorage.getItem('userMorningNumber'));

    // }


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


    $('.todos').on('click', '.todoTask', function () {
        console.log('get rid of to-do item!')
        console.log(this.id);
        console.log('/' + userNumber + '/' + this.id);

        $.ajax('/' + userNumber + '/' + this.id, {
            type: "PUT"
        })
            .then(function () {
                console.log('success');
                location.reload();
            })

    })

    $('#clearTasks').on('click', function () {

        let objectToSend = {
            userNumber: userNumber
        }
        $.ajax('/todo', {
            type: 'DELETE',
            data: objectToSend
        })
            .then(
                function () {
                    console.log('table cleared!');
                    location.reload();
                }
            )
    })

    $('#addTask').on('click', function () {
        event.preventDefault();

        let newTaskDescription = $('#newTask').val().trim();
        console.log(newTaskDescription)

        let objectToSend = {
            description: newTaskDescription,
            userNumber: userNumber
        }

    })




    //                                              Weather part






    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function showPosition(position) {
        //   x.innerHTML = "Latitude: " + position.coords.latitude + 
        //   "<br>Longitude: " + position.coords.longitude;

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
    if (newTaskDescription != '' && newTaskDescription != undefined) {
        $.ajax('/', {
            type: 'POST',
            data: objectToSend
        })
            .then(
                function () {
                    console.log('task added!');
                    location.reload();
                }
            )
    }
})
document.getElementById('newTask').onkeydown = function (e) {
    if (e.keyCode == 13) {
        document.getElementById('addTask').click();
    }
};

function createUserNumber() {
    let newNumber = (Math.random() * 99999);
    //ajax call that runs get '/checknewNumber'

    return newNumber;
}

});
