import utils from '../helpers/utils';

// create bar in javascript without bootstrap
function move = () => {
  if ( i == 0) {
    i = 1;
    const elem = document.getElementById("eatBar");
    const width = 1;
    const id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

//creating div for Eat Quad.  Contains 2 buttons Healthy button adds 10.  Unhealthy takes away 3.
const eatBarButtons = () => {
    let domString = "";
domString += '<div id = "eatQuad" >';
domString += '<h2>Eat</h2>';
domString += '<div id="myProgress">';
domString += '<div id="eatBar"></div>';
domString += '<div class = "row">';
domString += '<button id = "unhealthy"><i class="fas fa-bacon"></i>Unhealthy</button>';
domString += '<button id = "healthy"><<i class="fas fa-apple-alt"></i>Healthy</button>';
domString += '</div>';
domString += '</div>';
domString += '<div>';


utils.printToDom('eat',domString);
document.getElementById('unhealthy').addEventListener(click,feedMe)
document.getElementById('healthy').addEventListener(click, feedMe)
    
};

const feedMe = () => {
  // const eatId = e.target.closest('.row').id;
  document.getElementById("unhealthy").innerHTML='Unhealhty';
  // const eatPosition = dinos.findIndex((p) => p.id === eatId);
  // if(dinos[eatPosition].health < 90) {
    // dinos[eatPosition].health += 10;
    // printDinos(dinos);
  // } else if (dinos[eatPosition].health > 89 && dinos[eatPosition].health < 100) {
    // dinos[eatPosition].health = 100;
    // printDinos(dinos);
  }
// }







export default { eatBarButtons };