document.querySelector("#reg_but").onclick=function(event){
    event.preventDefault();

    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let password1 = document.getElementById('password1').value;

    if (password != password1){
        alert("Password do not match");
        window.location.href="Signup.html";
    }

    let body = JSON.stringify({username: username, email:email, password: password});

    console.log(body);

    let url = 'http://localhost:5000/user/create';

    postData(url, body)
    .then(response => {
        window.location.href = "login.html";
    });
  }

  async function postData(url="", data={}){
    const response = await fetch(url, {
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body:data
    })
    .catch(error => {
        console.error(error);
    });

    return response.json();
}