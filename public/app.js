

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
    console.log('start timer boi!');
    $("#timer").hide();
    $("#watch")
})


$('.todos').on('click','a',function(){
    console.log('get rid of to-do item!')
    console.log(event.target.innerHTML)
    console.log(event.srcElement)
    $('.todos').append("<li class='collection-item'>"+event.target.innerHTML+"</li>")
})