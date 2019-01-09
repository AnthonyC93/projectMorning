var userNumber=10154;


//need to add task adding functionality. when user presses 'add task', a post request is sent to user/toDoList, 
$(document).ready(function(){
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    $('.modal').modal();
    $('select').formSelect();
    $('.collapsible').collapsible();

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


    $('#toothTimerButton').on('click',function(){
        console.log('start timer!')
    })


    $('.todos').on('click','.todoTask',function(){
        console.log('get rid of to-do item!')
        console.log(this.id);
        console.log('/'+userNumber+'/'+this.id);

        $.ajax('/'+userNumber+'/'+this.id, {
            type: "PUT"
        })
        .then(function() {
            console.log('success');
            location.reload(); 
        })
        
    })

    $('#clearTasks').on('click',function(){

        let objectToSend = {
            userNumber:userNumber
        }
        $.ajax('/todo',{
            type:'DELETE',
            data:objectToSend
        })
        .then(
            function(){
                console.log('table cleared!');
                location.reload();
            }
        )
    })

    $('#addTask').on('click',function(){
        event.preventDefault();
    
        let newTaskDescription=$('#newTask').val().trim();
        console.log(newTaskDescription)
        
        let objectToSend={
            description:newTaskDescription,
            userNumber:userNumber
        }
    
        if(newTaskDescription!=''&&newTaskDescription!=undefined){
            $.ajax('/',{
                type:'POST',
                data: objectToSend
            })
            .then(
                function(){
                    console.log('task added!');
                    location.reload();
                }
            )
        }
    })
    document.getElementById('newTask').onkeydown = function(e){
        if(e.keyCode == 13){
          document.getElementById('addTask').click();
        }
     };

    function createUserNumber(){
        let newNumber = (Math.random()*99999);
        //ajax call that runs get '/checknewNumber'

        return newNumber;
    }

});