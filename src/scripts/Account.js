var username = document.getElementById("username");
var email = document.getElementById("email");
var confirm = document.getElementById("Confirm");
var Delete = document.getElementById("Delete");

username.style.display="none";
email.style.display="none";
confirm.style.display="none";
Delete.style.display="none";


document.querySelector("#change").onclick = function(event){
    if(username.style.display == "none"){
        username.style.display="flex";
        email.style.display="flex";
        confirm.style.display="flex";
    }else{
        username.style.display="none";
        email.style.display="none";
        confirm.style.display="none";
    }
}

document.querySelector("#Checker").onclick = function(event){
    if(Delete.style.display == "none"){
        Delete.style.display="flex";
    }else{
        Delete.style.display="none";
    }
}


document.querySelector("#log_out").onclick = function(event){
    localStorage.clear();
    window.location.href="index.html";
}

var username_main = document.querySelector("#username1");
username_main.innerHTML = localStorage.getItem("username");

document.querySelector('#Confirm').onclick = function(event){
    event.preventDefault();

    console.log(localStorage);

    let url = "http://localhost:5000/user/" + localStorage.getItem('id');

    let body = JSON.stringify({username: username.value, email: email.value}); //Цо таке
    console.log(body);

    putData(url, body).then(res => {
        username_main.innerHTML = username.value;
    }).then(res => window.location.href='Account.html');
    
}

async function putData(url="", data={}){
    const response = await fetch(url, {
        method: 'PUT',
        headers:{
            'Content-Type':'application/json',
            'Authorization': 'Basic ' + btoa(localStorage.getItem('username') + ':' + localStorage.getItem('password'))
        },
        body: data
    })
    .then(response => response.json())
    .then(data => {
        localStorage.setItem('username', data.username);
        localStorage.setItem('email', data.email);
    }).catch(error => console.error(error));

    console.log(response);

    return response;
}

//var id = localStorage.getItem("id");
//let url = ""