function getSkills() {
    var tl = anime.timeline({
        easing: 'easeOutExpo',
        duration: 100
    });
    var getUrl = window.location;
    var baseUrl = getUrl.protocol + "//" + getUrl.host;
    var skills_apy_url = baseUrl + "/api/skills/";
    fetch(skills_apy_url).then(function (response) {
        return response.json();
    }).then(function (json) {
        anime({
            targets: '.line-drawing .lines path',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function(el, i) { return i * 250 },
            direction: 'alternate',
            loop: false
          });
        var row = document.getElementsByClassName("row skills");
        for (let i = 0; i < json.length; i++) {
            let col = document.createElement('div');
            col.className = `col-xl-3 col-lg-4 col-md-6 col-sm-12 col-card card_${i}`;
            col.innerHTML = `<div class="card text-center ">
                                <img class="card-img-top z-depth-2"  src="media/${json[i]["icon"]}" alt="" data-holder-rendered="true">
                                <div class="card-body">
                                <h4 class="card-title">${json[i]["name"]}</h4>
                                <p class="card-text">${json[i]["description"]}</p>
                                </div>
                            </div>`;
            col.style = "opacity: 0";
            row[0].append(col);
        }
        for (let i = 0; i < json.length; i++) {
            tl.add({
                targets: `.card_${i}`,
                opacity: [0, .5, 1],
                duration: 500,
                loop: true,
                easing: 'spring(1, 80, 10, 0)'

            }, '-=250');

        }
    })
}

document.onload = getSkills();