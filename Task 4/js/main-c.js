'use strict';
// Create function 'showImages' which
// loads images.json which has links to images as an array.

// create a loop which builds the following HTML from every image in the array:
/*
<li>
    <figure>
        <a href="img/original/filename.jpg"><img src="img/thumbs/filename.jpg"></a>
        <figcaption>
            <h3>Title</h3>
        </figcaption>
    </figure>
</li>
*/
// Make the above HTML by using DOM methods.
// Create elements with createElement()
// Add attributes with setAttribute()
// Add elements with appendChild
// When the above HTML is ready append it to the <ul> element
const showImages = () => {

  const ul = document.querySelector('#list');

  fetch('images.json').then((response) => {
    return response.json();
  }).then((json) => {

    json.forEach((image) => {

      let node = document.createElement("li");
      let listImage = document.createElement("IMG")
      listImage.src = `img/original/${image.mediaUrl}`;
      node.class = "listImg";
      node.appendChild(listImage);
      ul.appendChild(node);

    });
  });
};

showImages();
