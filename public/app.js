
var userNumber;

var todoListUser= "todo"+userNumber;
console.log(todoListUser)
console.log(typeof todoListUser)

//need to add task adding functionality. when user presses 'add task', a post request is sent to user/toDoList, 
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
<<<<<<< HEAD
    console.log('start timer boi!');
    $("#timer").hide();
    $("#watch")
=======
    console.log('start timer!')
>>>>>>> e8b1e95b58071778ec5e92b1520f5b9438b2f60a
})


$('.todos').on('click','a',function(){
    console.log('get rid of to-do item!')
    console.log(event.target.innerHTML)
    console.log(event.srcElement)
    $('.todos').append("<li class='collection-item'>"+event.target.innerHTML+"</li>")
})