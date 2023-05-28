function loginB(){
    var username = document.querySelector('#userid').value;
    var password = document.querySelector('#passid').value;
    var key = JSON.parse(user);
    var user = localStorage.getItem('user');


    if(username == '' && password == ''){
        alert('Please input what is required!');
    } else if((username == key.username || username == key['email']) && password == key.password){
        alert('Success! Click ok to continue');
        window.location.href = 'mainpage.html';
        return false;
    } else {
        alert('User Not Found!');
    }
}

function registrationB(){
    var username = document.querySelector('#reguser');
    var password = document.querySelector('#regpass');
    var email = document.querySelector('#regemail');

    if(username.value == '' || password.value == '' || email.value == ''){
        alert('Please input what is required!');
    } else {
        var user = {
            username: username.value,
            password: password.value,
            email: email.value
        }

        var json = JSON.stringify(user);

        localStorage.setItem('user', json);
        console.log('User Added');
        alert('You are now registered! Click ok to continue');
        username.value = '';
        password.value = '';
        email.value = '';
    }
}