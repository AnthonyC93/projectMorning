$('select').formSelect();
let latitude;
let longitude;
$('#newUserAdd').on('click',function(){
    console.log('new user button clicked!');

    let name = $('#name').val().trim();
    let city = $('#homeCity').val().trim();
    let state =$('#state').val().trim();
    

    let locationToSend={
        city:city,
        state:state
    }

    $.ajax('/api/cityPosition', {
        type: 'POST',
        data: locationToSend,
        success: success
    });
    

    function success(response){
        latitude = response.lat;
        longitude = response.lng;

    }
        
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
            data: objectToSend,
        })
        .then(
            function () {
                //this never runs
                location.reload();
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