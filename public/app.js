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
    }else{
        console.log("user MorningNumber found!: "+localStorage.getItem('userMorningNumber'));
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




//                                              Weather part






var x = document.getElementById("demo");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
//   x.innerHTML = "Latitude: " + position.coords.latitude + 
//   "<br>Longitude: " + position.coords.longitude;

  latitude = position.coords.latitude;
  longitude = position.coords.longitude;

  console.log(latitude);
  console.log(longitude);

  var location = {};
  location.latitude = latitude;
  location.longitude = longitude;
  $.ajax({
    type: "POST",
    url: '/api/weather',
    data: location,
    success: success,
  });

  function success(res){
    console.log("weather data :" + res.temp);
    $("#demo").text("Temp here is : "+res.temp);
  }
}
