'use strict';
// Create function 'showImages' which
// adds the loaded HTML content to <ul> element
const showImages = () => {

  const list = document.querySelector(".pictureList");
  const request = new XMLHttpRequest();

  fetch("images.html").then((fetchResponse) => {

    return fetchResponse.text();

  }).then((myElements) => {
    list.innerHTML = myElements;
    
  });
};

showImages();
