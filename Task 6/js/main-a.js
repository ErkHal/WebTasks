//Select buttons
const addButton = document.querySelector("#add");
const changeButton = document.querySelector("#change");
const toggleButton = document.querySelector("#toggle");
//Select paragraphs
const firstPara = document.querySelector('p');
const secondPara = document.querySelector('p:nth-child(2)');
const thirdPara = document.querySelector('p:nth-child(3)');
//Add eventListeners

changeButton.addEventListener('click', (evt) => {

console.log(secondPara.getAttribute('class'));

  if(secondPara.classList.contains('red')) {
    secondPara.classList.replace('red', 'blue');
  } else {
    secondPara.classList.replace('blue', 'red');
  }
});

addButton.addEventListener('click', (evt) => {

  if(!firstPara.classList.contains('red')) {
      firstPara.classList.add('red');
  }
});

toggleButton.addEventListener('click', (evt) => {

  if(!thirdPara.classList.contains('green')) {
    thirdPara.classList.add('green');
  } else {
    thirdPara.classList.remove('green');
  }
});
