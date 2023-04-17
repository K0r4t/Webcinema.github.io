function elementFromHtml(html){
    const template = document.createElement("template");
    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}

fetch('http://localhost:5000/film/')
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            const film = elementFromHtml(`            
                <li style="cursor:pointer">
                    <a href="film.html?id=${element.id}'">
                        <img src="assets/Mavka.jpg" class="hero-img" alt="picture">
                        <p class="description">asdasd</p>
                        <span class="film_state">state</span>
                    </a>
                </li>
            `);

            var name = film.querySelector(".description");
            var state = film.querySelector(".film_state");

            //name.textContent = element.name;
            //state.textContent = element.state;

            name.innerHTML = element.name;
            state.innerHTML = element.state;

            film.id = element.id;       
            
            var filmContainter = document.querySelector(".Films");
            filmContainter.appendChild(film);

            var next_id = document.getElementById(element.id);
            //next_id.setAttribute("onClick", "window.location='pages/film.html?id=" + element.id + "'");

            console.log(element);
        });
    })

    .catch(err => {
        console.log(err);
    })