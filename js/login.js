var emailInput = document.querySelector('#emailInput');
var passInput = document.querySelector('#passInput');
var logBtn = document.querySelector('#logBtn');

var userEmail = /^[\w]{4,10}[\w]{4,10}\W(gmail|yahoo)(\.com)$/i;
var userPass = /^[\w]\w{8}$/i;

var users = [];
users = JSON.parse(localStorage.getItem('users')) || [];


function inputValidation(regex, inputValue, alert) {

    if (regex.test(inputValue)) {
        alert.classList.add('d-none');
        return true
    } else {
        alert.classList.remove('d-none');
        return false
    }


};


function loginchek(e, p) {


    var validUser = false
    for (var i = 0; i < users.length; i++) {
        if (e === users[i].userEmail && p === users[i].userPass) {
            console.log('valid');
            localStorage.setItem('loggedInUser', JSON.stringify(users[i]));
            window.location.href = 'home.html'
            displayUser();
            validUser = true;
            return;
        }

    };

    if (!validUser) {
        messageDiv.innerHTML = '';

        var loginMess = document.createElement('p');
        var loginTxt = document.createTextNode('Incorrect email or password');
        loginMess.append(loginTxt);
        loginMess.classList.add('text-center', 'text-danger', 'text-capitalize', 'fw-medium');
        messageDiv.append(loginMess);
    }




}


logBtn.addEventListener('click', function (e) {
    e.preventDefault();
    loginchek(emailInput.value, passInput.value);
});


