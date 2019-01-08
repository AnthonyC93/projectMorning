

$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('select').formSelect();


    if(localStorage.getItem('userMorningNumber')===null){
        console.log("there is no user MorningNumber here");
        $("#userQuestions").modal("open");
    }else{
        console.log("user MorningNumber found!: "+localStorage.getItem('userMorningNumber'));
    }

    
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

//$('#js-resetTimer').click(function () {
 //$("#toothTimerButton").text("2:00");
 //clearInterval(interval);
//});
        
   
   //     }
  //  }

    //  The decrement function.
    // function decrement() {

    //     //  Decrease number by one.
    //     number--;
    //     formattedNumber = convertMS(number);
    //     console.log(formattedNumber)

    //      //  Show the number in the #show-number tag.
    //     $("#toothTimerButton").html(formattedNumber.minute+":"+formattedNumber.seconds);
        
    //     //  Once number hits zero...
    //     if (number === 0) {
    //         stop();
    //         //  Alert the user that time is up.
    //         alert("Time Up!");
    //     }
    // }
    // //  The stop function
    // function stop() {
    //     clearInterval(intervalId);
    // }

});

  










$('.todos').on('click','a',function(){
    console.log('get rid of to-do item!')
    console.log(event.target.innerHTML)
    console.log(event.srcElement)
    $('.todos').append("<li class='collection-item'>"+event.target.innerHTML+"</li>")
})