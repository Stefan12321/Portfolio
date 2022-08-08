function getSkills(){
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host ;
    var skills_apy_url = baseUrl + "/api/skills/";
    fetch(skills_apy_url).then(function (response) {
        return response.json();
    }).then(function (json) {
        var row = document.getElementsByClassName("row skills");
        for(let i = 0; i < json.length;i++){
            let col = document.createElement('div');
            col.className = "col-4";
            col.innerHTML = `<div class="card text-center">
                                <img class="card-img-top" src="media/${json[i]["icon"]}" alt="">
                                <div class="card-body">
                                <h4 class="card-title">${json[i]["name"]}</h4>
                                <p class="card-text">${json[i]["description"]}</p>
                                </div>
                            </div>`;
            row[0].append(col);
        }
    })
}

document.onload = getSkills();