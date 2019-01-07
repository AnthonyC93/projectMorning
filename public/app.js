

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
});

$('#toothTimerButton').on('click',function(){
    console.log('start timer boi!')
    
    var number = 120000;
    //  Variable that will hold our interval ID when we execute
    //  the "run" function
    var intervalId;
//  When the stop button gets clicked, run the stop function.
    $("#stop").on("click", stop);
 //  When the resume button gets clicked, execute the run function.
    $("#resume").on("click", run);
    //  The run function sets an interval
    //  that runs the decrement function once a second.
    //  *****BUG FIX******** 
    //  Clearing the intervalId prior to setting our new intervalId will not allow multiple instances.
    function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 120000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }

    //  Execute the run function.
    run();

})


$('.todos').on('click','a',function(){
    console.log('get rid of to-do item!')
    console.log(event.target.innerHTML)
    console.log(event.srcElement)
    $('.todos').append("<li class='collection-item'>"+event.target.innerHTML+"</li>")
})