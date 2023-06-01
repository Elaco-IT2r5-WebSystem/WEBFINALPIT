function registrationB(){
    var fullname = document.querySelector('#regname');
    var username = document.querySelector('#reguser');
    var password = document.querySelector('#regpass');
    var email = document.querySelector('#regemail');
    var patt = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    var valiemail = patt.test(email.value);
    
    if(fullname.value == '' ||username.value == '' || password.value == '' || valiemail == false){

    } else if (fullname.value != '' ||username.value != '' || password.value != '' || valiemail == true){
        var user = {
            fullname: fullname.value,
            username: username.value,
            password: password.value,
            email: email.value
        }

        var json = JSON.stringify(user);
        localStorage.setItem('user', json);
        console.log('User Added');
        alert('You are now registered! Click ok to continue');
        fullname.value = '';
        username.value = '';
        password.value = '';
        email.value = '';
    }
}

function loginB(){
    var username = document.querySelector('#getuser').value;
    var password = document.querySelector('#getpass').value;
    var user = localStorage.getItem('user');
    var key = JSON.parse(user); 
    
     if((username == key.username || username == key['email']) && password == key.password){
        alert('Success! Click ok to continue');
        window.location.href = 'mainpage.html';
        return false;
    } if((username != key.username || username != key['email']) && password != key.password){
        alert('User Not Found!');
    }

    else (username == '' && password == '')
    {

    }
}