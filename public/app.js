var userNumber=10154;


//need to add task adding functionality. when user presses 'add task', a post request is sent to user/toDoList, 
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('select').formSelect();


    // if(localStorage.getItem('userMorningNumber')===null){
    //     console.log("there is no user MorningNumber here");
    //     $("#userQuestions").modal("open");
    // }else{
    //     console.log("user MorningNumber found!: "+localStorage.getItem('userMorningNumber'));
    // }
});

$('#toothTimerButton').on('click',function(){
    console.log('start timer boi!');
    $("#timer").hide();
    $("#watch")
})


$('.todos').on('click','a',function(){
    console.log('get rid of to-do item!')
    console.log(this.id);
    console.log('/'+userNumber+'/'+this.id);

    $.ajax('/'+userNumber+'/'+this.id, {
        type: "PUT"
    }).then(function(){
        console.log('task updated!');
        //line below not working for some reason
        location.reload();
    })
    
})if(localStorage.getItem('userMorningNumber')===null){
    console.log("there is no user MorningNumber here");
    $("#userQuestions").modal("open");
}else{
    console.log("user MorningNumber found!: "+localStorage.getItem('userMorningNumber'));
}

var interval;
function countdown() {
clearInterval(interval);
interval = setInterval( function() {
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











// var number =120
// var intervalId;

// $("#toothTimerButton").on("click",function(){
// $("#toothTimerButton").html(number);
// console.log("start timer boi")
// //  Execute the run function.
// run();
// })

// function run() {

//     var number =120
//     var intervalId;

//     console.log("function start") 

//     clearInterval(intervalId);
//     intervalId = setInterval(decrement, 1000);
//     console.log("function running")
//     // $("#toothTimerButton").html(number);
// }

var interval;
function countdown() {
clearInterval(interval);
interval = setInterval( function() {
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