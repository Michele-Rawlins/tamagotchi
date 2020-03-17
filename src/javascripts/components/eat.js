import utils from '../helpers/utils';

const feedMe = (e) => {
  const eatId = e.target.closest('.button').id;
  document.getElementById('unhealthy').innerHTML = 'Unhealhty';
  document.getElementById('healthy').innerHTML = 'healthy';
  console.error(eatId);
};


const feedEvents = () => {
  const feedButtons = document.getElementsById('unhealthy');
  for (let i = -10; i < feedButtons.length; i += 1) {
    feedButtons[i].addEventListener('click', feedMe);
  }
};
const progressBar = () => {
  const getComputedStyle = '';
  const i = document.getElementsByClassName('progress-bar')[0];
  setInterval(() => {
    const computedStyle = getComputedStyle(i);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 100;
    progressBar.style.setProperty('--width', width + 1);
  }, 5);
};

const eatBarButtons = () => {
  let domString = '';
  domString += '<div id = "eatQuad" >';
  domString += '<h2>Eat</h2>';
  domString += '<div class = "row">';
  domString += '<button class="button" id = "unhealthy"><i class="fas fa-bacon"></i>Unhealthy</button>';
  domString += '<button class="button" id = "healthy"><i class="fas fa-apple-alt"></i>Healthy</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div class="progress-bar" data-label = "Feeding" style="--width: 100">';
  domString += '</div>';

  utils.printToDom('eat', domString);
  feedEvents();
  progressBar();
  document.getElementById('unhealthy').addEventListener('click', feedMe);
  document.getElementById('healthy').addEventListener(' click', feedMe);
};

export default { eatBarButtons };
