

var nameInput = document.querySelector('#nameInput');
var emailInput = document.querySelector('#emailInput');
var passInput = document.querySelector('#passInput');
var logBtn = document.querySelector('#logBtn')

// rejex
var userName = /^[\w]{4,16}\s?[\w]{4,16}$/i;
var userEmail = /^[\w]{4,10}[\w]{4,10}\W(gmail|yahoo)(\.com)$/i;
var userPass = /^[\w]\w{8}$/i;

var signupBtn = document.querySelector('#signupBtn');

var users = [];
users = JSON.parse(localStorage.getItem('users')) || [];


function addUser() {
    var userData = {

        userName: nameInput.value,
        userEmail: emailInput.value,
        userPass: passInput.value,
    }
    
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));
    console.log(users);
    
}


// registeration validation

// 1-inputs

function inputValidation(regex, inputValue, alert) {
    
    if (regex.test(inputValue)) {
        alert.classList.add('d-none');
        return true
    } else {
        alert.classList.remove('d-none');
        return false
    }
    
    
};


function emailExists(email) {
    for (var i = 0;i< users.length; i++) {
        if (
            users[i].userEmail === email
            
        ) {
            return true
        } return false
    }
};



function validAll() {
    
    var nameV = inputValidation(/^[\w][\w ?_-]{3,15}$/i, nameInput.value, alertName);
    var emailV = inputValidation(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, emailInput.value, alertEmail);
    var passV = inputValidation(/^[\w]\w{8}$/i, passInput.value, alertPass)

    messageDiv.innerHTML = '';
    
    // if all inputs empty

    if (nameInput.value === '' || emailInput.value === '' || passInput.value === '') {
        var inputFals = document.createElement('p');
        var emptyTxt = document.createTextNode('all feild requerd');
        inputFals.append(emptyTxt)
        inputFals.classList.add('text-center', 'text-danger', 'text-capitalize', 'fw-medium')
        messageDiv.append(inputFals);
        return false
    }
    
    // email check
    if (emailV === emailExists(emailInput.value)) {
        
        var emailCheck = document.createElement('p');
        var checkTxt = document.createTextNode('email is exsiste');
        emailCheck.append(checkTxt)
        emailCheck.classList.add('text-center', 'text-danger', 'text-capitalize', 'fw-medium')
        messageDiv.append(emailCheck);
        return false
    }
    
    // all input check
    
    if (nameV && emailV && passV) {
        addUser()
        var inputsCheck = document.createElement('p');
        var checkTxt = document.createTextNode('success');
        var spinner = document.createElement('div');
        spinner.classList.add('spinner-border', 'ms-2')
        
        inputsCheck.append(checkTxt)
        inputsCheck.append(spinner)
        
        inputsCheck.classList.add('text-center', 'text-success', 'text-capitalize', 'fw-medium')
        messageDiv.append(inputsCheck);
        setTimeout(function() {
            window.location.href ='index.html' 
                        
        }, 1000);
        return true;
    } else {
        
        return false;
    }
};

// events

signupBtn.addEventListener('click', function (e) {
    e.preventDefault();
    validAll();
});


nameInput.addEventListener('blur', function () {
    inputValidation(/^[\w][\w ?_-]{3,15}$/i, nameInput.value, alertName);
})
emailInput.addEventListener('blur', function () {
    inputValidation(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i, emailInput.value, alertEmail);
})
passInput.addEventListener('blur', function () {
    inputValidation(/^[\w]\w{8}$/i, passInput.value, alertPass);
})

