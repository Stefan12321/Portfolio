
window.onload = main();
function main() {
  let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let dragholder = document.querySelector(".dragholder");
let sidebarContent = document.querySelector(".sidebar-content");
let hiddenSedebarWidth = 185;
  /* listen to the touchMove event,
every time it fires, grab the location
of touch and assign it to box */

  dragholder.addEventListener('touchmove', function (e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];

    sidebar.style.cssText = `transform: translateX(${touchLocation.pageX}px)`;

  })

  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. */

  dragholder.addEventListener('touchend', function (e) {
    // current box position.
    if ( sidebar.style.transform === "translateX(200px)") {
      anime({
        targets: '.sidebar',
        translateX: 20
      });
    }
    else if(sidebar.style.transform === "translateX(20px)"){
      anime({
        targets: '.sidebar',
        translateX: 200
      });

    }
    else {
      anime({
        targets: '.sidebar',
        translateX: 20
      });
    
      // var touchPos = parseInt(sidebar.style.left);
      // console.log(touchPos);
      // animate({
      //   duration: 500,
      //   timing: function (timeFraction) {
      //     return Math.pow(timeFraction, 5)
      //   },
      //   draw: function (progress) {

      //     sidebar.style.cssText = `left: ${-hiddenSedebarWidth + (hiddenSedebarWidth + touchPos) - (-hiddenSedebarWidth + (hiddenSedebarWidth + touchPos)) * progress}px`;
      //   }
      // });
    }
  })


  onloadAnimation();
}



function onloadAnimation() {
  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });
  tl.add({
    targets: '.sidebar',
    translateX: 200
  });
  var getUrl = window.location;
  var baseUrl = getUrl.protocol + "//" + getUrl.host;
  var skills_apy_url = baseUrl + "/api/projects";
  fetch(skills_apy_url).then(function (response) {
    return response.json();
  }).then(function (json) {
    console.log(json);
    var mainContent = document.getElementsByClassName("main-content");
    // mainContent[0].style = "opacity: 0";
    for (let i = 0; i < json.length; i++) {
      let col = document.createElement('div');
      col.className = `col-12 el-${i}`;
      col.innerHTML = `<h1 id="${json[i]["name"]}">${json[i]["name"]}</h1>
                     <p class="text-justify">${json[i]["description"]}</p>`
      col.style = "opacity: 0";
      mainContent[0].append(col);
      if (json[i]["photos"].length > 0) {
        console.log("PHOTO");
        let col = document.createElement('div');
        col.className = `el-${i}`;
        col.style = "opacity: 0";
        let list = document.createElement('ul');
        list.className = "ulist";
        for (let j = 0; j < json[i]["photos"].length; j++) {
          photo = json[i]["photos"][j];
          let item = document.createElement("li");
          item.className = "list_item";
          item.innerHTML = `<a class="btn"
           data-toggle="modal"
           data-target="#photo-${j}-${photo["id"]}">
            <img class="small_image" src="${photo["photo"]}" width="64px" height="64px">
        </a>
        <div class="modal fade"
             id="photo-${j}-${photo["id"]}"
             tabindex="-1"
             role="dialog"
             aria-labelledby="exampleModalLabel"
             aria-hidden="true">

            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="container-fluid container-slider">
                            <div class="row">
                                <div class="col-12">
                                    <img class="window_image" id="image" src="${photo["photo"]}"
                                         alt="Click on button"/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-footer">
                        <button type="button"
                                class="btn btn-secondary"
                                data-dismiss="modal">
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>`
          list.append(item);
        }
        col.append(list);
        mainContent[0].append(col);
      }

    }
    for (let i = 0; i < json.length; i++) {
      console.log("time");
      tl.add({
        targets: `.el-${i}`,
        opacity: [0, .5, 1],
        duration: 500,
        loop: true,
        easing: 'spring(1, 80, 10, 0)'

      }, '-=250');
    }






  })

}
