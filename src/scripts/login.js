if (localStorage.length>0){
    window.location.href="Account.html";
}

document.querySelector("#login_but").onclick=function(event){
    event.preventDefault();

    let username = document.querySelector("#username").value;
    let password = document.querySelector("#password").value;

    fetch('http://localhost:5000/user/login', {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + btoa(username + ':' + password)
        }
      }).then(response => {
        if (response.ok) {
          localStorage.setItem('username', username);
          localStorage.setItem('password', password);
        }
        
        else if (response.status === 401) {
            alert("Wrong username or password");
            return;
        }
        
    }).catch(error => console.error(error));


    let url = 'http://localhost:5000/user/name/' + username

    fetch(url, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa(username + ':' + password)
        }
      }).then(response => response.json()).then(data => {
        localStorage.setItem('email', data.email);
        localStorage.setItem('id', data.id);
        console.log(localStorage);
      }).then(res => window.location.href = 'index.html').catch(error => console.error(error));
      //.then(res => window.location.href = 'index.html').catch(error => console.error(error));
}