let sidebar = document.querySelector(".sidebar");
let content = document.querySelector(".content");
let dragholder = document.querySelector(".dragholder");
let sidebarContent = document.querySelector(".sidebar-content");
let hiddenSedebarWidth = 185;

function animate({ duration, draw, timing }) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    let timeFraction = (time - start) / duration;
    if (timeFraction > 1) timeFraction = 1;

    let progress = timing(timeFraction)

    draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

window.onload = function () {

  /* listen to the touchMove event,
  every time it fires, grab the location
  of touch and assign it to box */

  dragholder.addEventListener('touchmove', function (e) {
    // grab the location of touch
    var touchLocation = e.targetTouches[0];

    sidebar.style.cssText = `left: ${touchLocation.pageX - hiddenSedebarWidth}px`;

  })

  /* record the position of the touch
  when released using touchend event.
  This will be the drop position. */

  dragholder.addEventListener('touchend', function (e) {
    // current box position.
    if (sidebar.style.left === "0px") {
      animate({
        duration: 500,
        timing: function (timeFraction) {
          return Math.pow(timeFraction, 5)
        },
        draw: function (progress) {
          sidebar.style.cssText = `left: ${progress * -hiddenSedebarWidth}px`;
        }
      });
    }
    else {
      var touchPos = parseInt(sidebar.style.left);
      console.log(touchPos);
      animate({
        duration: 500,
        timing: function (timeFraction) {
          return Math.pow(timeFraction, 5)
        },
        draw: function (progress) {

          sidebar.style.cssText = `left: ${-hiddenSedebarWidth + (hiddenSedebarWidth + touchPos) - (-hiddenSedebarWidth + (hiddenSedebarWidth + touchPos)) * progress}px`;
        }
      });
    }
  })


}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}


function test(){
  var row = document.getElementsByClassName("row skills");
for(let i = 0; i < 4;i++){
  var tl = anime.timeline({
    easing: 'easeOutExpo',
    duration: 750
  });
  let col = document.createElement('div');
  col.className = `col-xl-3 col-lg-4 col-md-6 col-sm-12 col-card card_${i}`;
  col.innerHTML = `<div class="card text-white bg-primary an">
  <img class="card-img-top" src="holder.js/100px180/" alt="">
  <div class="card-body">
    <h4 class="card-title">Title</h4>
    <p class="card-text">Text</p>
  </div>
</div>`;
col.style = "opacity: 0";
  row[0].append(col);
  // await sleep(1000);
}
for(let i = 0; i < 4;i++){
  tl.add({
    targets: `.card_${i}`,  
    opacity: ['0', '1'],
    duration: 1000 - i * 300,

  });
}

}
test();
