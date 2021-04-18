const current = document.querySelector('#current');
const modal = document.getElementById('imageModal');
const images = document.querySelectorAll('.images img');
const closeBtn = document.getElementsByClassName('closeBtn')[0];


// Listen for click on image
images.forEach(img => img.addEventListener('click', imgClick));

// listen for close click
closeBtn.addEventListener('click', closeModal);

// Listen for Outside click
window.addEventListener('click', outsideClick);


// function to close modal
function closeModal(){
  modal.style.display = 'none';
}

// function close modal if outside click
function outsideClick(e){
  if(e.target == modal){
    modal.style.display = 'none';
  }
}



function imgClick(e) {

  current.src = e.target.src;
  console.log(current.src)
  modal.style.display = 'block';
}
