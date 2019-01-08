var userNumber=10154;


//need to add task adding functionality. when user presses 'add task', a post request is sent to user/toDoList, 
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('select').formSelect();


    if(localStorage.getItem('userMorningNumber')===null){
        console.log("there is no user MorningNumber here");
        $("#userQuestions").modal("open");
        //2 options presented to user:
        // Enter User Number form OR
        // Enter User Preferences form
    }else{
        console.log("user MorningNumber found!: "+localStorage.getItem('userMorningNumber'));
        //send ajax call to get /userNumber

    }
});

$('#toothTimerButton').on('click',function(){
    console.log('start timer!')
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

function createUserNumber(){
    let newNumber = (Math.random()*99999);
    //ajax call that runs get '/checknewNumber'

    return newNumber;
}