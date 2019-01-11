$('select').formSelect();

$('#newUserAdd').on('click',function(){
    console.log('new user button clicked!');

    let name = $('#name').val().trim();
    let city = $('#homeCity').val().trim();
    let state =$('#state').val().trim();
    let latitude = 77777777.7777777;
    let longitude = 7777777.7777777;
        
    if(name && city && state && latitude && longitude){
        let newUserNumber =  createUserNumber();
        console.log('new user number is: '+newUserNumber);
        
        let cityState = city+', '+state;

        let objectToSend={
            userNumber:newUserNumber,
            name:name,
            city:cityState,
            latitude:latitude,
            longitude:longitude
        }
        console.log('object being sent from form.js: '+JSON.stringify(objectToSend));

        $.ajax('/form/new', {
            type: 'POST',
            data: objectToSend
        })
        .then(
            function () {
                //this never runs for some reason
                // location.reload();
                window.location.replace('/show/'+newUserNumber);
            }
        )

    }else{
        //give user feedback and let them know something is missing/invalid
    }

})

$('#searchUserNumber').on('click',function(){
    event.preventDefault();

    let enteredUser = $('#userNumberEntered').val().trim();
    console.log('user number entered and it is '+enteredUser)

    window.location.replace('/show/'+enteredUser);
    //need to add some sort of validation
})

function createUserNumber() {
    let newNumber = Math.round(Math.random() * 9999);
    //checknewNumber(newNumber)'
    console.log('new user number is: '+newNumber);

    return newNumber;
}

function checknewNumber(possibleUserNumber){
    //ajax call or something to check if that number already exists in the database
}