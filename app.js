function registrationB(){
    let username = document.querySelector('#reguser');
    let password = document.querySelector('#regpass');
    let email = document.querySelector('#regemail');

    if(username.value == '' || password.value == '' || email.value == ''){
        alert('Please input what is required!');
    } else {
        let user = {
            username: username.value,
            password: password.value,
            email: email.value
        }

        let json = JSON.stringify(user);

        localStorage.setItem('user', json);
        console.log('User Added');
        alert('You are now registered! Click ok to continue');
        username.value = '';
        password.value = '';
        email.value = '';
    }
}

function loginB(){
    let username = document.querySelector('#getuser').value;
    let password = document.querySelector('#getpass').value;
    let user = localStorage.getItem('user');
    let key = JSON.parse(user);

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