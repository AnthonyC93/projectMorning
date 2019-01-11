if(!localStorage.getItem('userMorningInfo')){
    alert("there is no user userMorningInfo here");
    
    //send to /form/ to give user option of entering existing userNumber or creating new profile
    window.location.replace('/form');
}else{
    let objUserInfo = JSON.parse(localStorage.getItem('userMorningInfo'));
    alert("userMorningInfo found!: "+objUserInfo)
    
    window.location.replace('/show/'+objUserInfo.userNumber);
}