import utils from '../helpers/utils';

const feedMe = (e) => {
  const eatId = e.target.closest('.button').id;
  document.getElementById('unhealthy').innerHTML = 'Unhealhty';
  console.error(eatId);
};


const feedEvents = () => {
  const feedButtons = document.getElementsById('unhealthy');
  for (let i = 0; i < feedButtons.length; i += 1) {
    feedButtons[i].addEventListener('click', feedMe);
  }
};

const eatBarButtons = () => {
  let domString = '';
  domString += '<div id = "eatQuad" >';
  domString += '<h2>Eat</h2>';
  domString += '<div id="myProgress">';
  domString += '<div id="eatBar"></div>';
  domString += '<div class = "row">';
  domString += '<button id = "unhealthy"><i class="fas fa-bacon"></i>Unhealthy</button>';
  domString += '<button id = "healthy"><i class="fas fa-apple-alt"></i>Healthy</button>';
  domString += '</div>';
  domString += '</div>';
  domString += '<div>';


  utils.printToDom('eat', domString);
  feedEvents();
  document.getElementById('unhealthy').addEventListener('click', feedMe);
  document.getElementById('healthy').addEventListener(' click', feedMe);
};

// const createHouseButton = (house) => {
  // const domString = `
    // <button id="${house.id}" class="house-button house-button-${house.name.toLowerCase()}">
      // <div>${house.name}</div>
      // <img src="${house.picture}">
    // </button>
  // `;
  // return domString;
// };
// 
// const buttonEventFunction = (e) => {
  // const houseId = e.target.closest('button').id;
  // const students = studentData.getStudents();
  // const filteredStudents = students.filter((x) => x.houseId === houseId);
  // studentList.createStudentList(filteredStudents);
// };
// 
export default { createHouseButton, buttonEventFunction };



export default { eatBarButtons };
