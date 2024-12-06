var logout = document.querySelector('#logout a');

function displayUser() {
    console.log('displayUser');
    var loggedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    var htmlMarkUp = '';
    var cardBody = document.querySelector('#cardBody');
    console.log(loggedUser.userName);

    htmlMarkUp =
        `
        <h1 class="card-title text-capitalize text-center txt-color">welcome ${loggedUser.userName}</h1>
        `
    cardBody.innerHTML = htmlMarkUp


}

window.onload = displayUser;

logout.addEventListener('click', function (e)
{
    e.preventDefault();
    window.location.href ='index.html'
})