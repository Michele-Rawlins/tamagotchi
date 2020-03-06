import utils from '../helpers/utils';


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

const eatBarButtons = () => {
    let domString = "";
domString += '<div id = "quadEat" >';
domString += '<h2>Eat</h2>';
domString += '<div id="myProgress">';
domString += '<div id="eatBar"></div>';
domString += '<div class = "row">';
domString += '<button><i class="fas fa-bacon"></i></button>';
domString += '<button><<i class="fas fa-apple-alt"></i></button>';
domString += '</div>';
domString += '</div>';

utils.printToDom('eat',domString);


    
};


export default { eatBarButtons };