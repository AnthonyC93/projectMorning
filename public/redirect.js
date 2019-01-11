if(localStorage.getItem('userMorningNumber')===null){
    console.log("there is no user MorningNumber here");
    
    // localStorage.setItem('userMorningNumber',10154);
    // console.log('userNumber SET!!!!')


    //2 options presented to user:
    // Enter User Number form OR
    window.location.replace('/form');
    // Enter User Preferences form
}else{
    console.log("userMorningNumber found!: "+localStorage.getItem('userMorningNumber'));

    //send ajax call to get /userNumber
    // $.ajax('/'+userNumber, {
    //     type: "GET"
    // }).then(function(){
    //     console.log('userfound!!');
        
    // })
    
    window.location.replace('/show/'+localStorage.getItem('userMorningNumber'));
    
}