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
    console.log(this.id);
    console.log('/'+userNumber+'/'+this.id);

    $.ajax('/'+userNumber+'/'+this.id, {
        type: "PUT"
    }).then(function(){
        console.log('task updated!');
        //line below not working for some reason
        location.reload();
    })
    
})