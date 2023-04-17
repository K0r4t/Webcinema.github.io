function elementFromHtml(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

const url = "http://localhost:5000/film/" + id;

fetch(url)
    .then(response => response.json())
    .then(element => {
            //const film = elementFromHtml(`            

            //`);

            

            var name = document.querySelector(".name");
            var state = document.querySelector(".state");
            var duration = document.querySelector(".duration");
            var created_at = document.querySelector(".created_at");
            var description = document.querySelector(".description_text");

            //name.textContent = element.name;
            //state.textContent = element.state;

            name.innerHTML = element.name;
            state.innerHTML = element.state;
            duration.innerHTML = element.duration;
            created_at.innerHTML = element.created_at;
            description.innerHTML = element.description;

            // film.id = element.id;       
            
            // var filmContainter = document.querySelector(".container");
            // filmContainter.appendChild(film);

            // var next_id = document.getElementById(element.id);
            //next_id.setAttribute("onClick", "window.location='pages/film.html?id=" + element.id + "'");

            console.log(element);
    })

    .catch(err => {
        console.log(err);
    })