function showClickedImage($) {
  
  const mainImage = document.getElementById('screen');
  const slideContainer = document.getElementById('slide-container');
  // const firstImage = slideContainer.querySelector('img');
  const imageArray = slideContainer.querySelectorAll('img');
  const firstImage = imageArray[0];
  
  mainImage.src = firstImage.src;
  mainImage.classList.add('show');

  slideContainer.addEventListener('click', function(event) {
    mainImage.classList.remove('show');
    setTimeout(function() {
      mainImage.src = event.target.src;
      mainImage.classList.add('show');
    }, 350);
  });

  imageArray.forEach(function(imgElem) {
    imgElem.addEventListener('mouseover', function(e) {
      this.classList.add('scaleup');
    });

    imgElem.addEventListener('mouseout', function(e) {
      this.classList.remove('scaleup');
    });
  }); 

  // slideContainer.addEventListener('mouseover', function(event) {
  //   // console.log(event.target);
  //   // event.target.classList.add('scaleup');

  //   let image = event.target;
  //   image.classList.add('scaleup');

  //   image.addEventListener('mouseout', function(event) {
  //     this.classList.remove('scaleup');
  //   });
  // });
};

jQuery(document).ready(showClickedImage($));
