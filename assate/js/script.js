const bar = document.getElementById('bar');
const colse = document.getElementById('colse');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  })
}

if (close) {
  colse.addEventListener('click', ()=> {
    nav.classList.remove('active');
  })
}


// * Change Image Js

var MainImg = document.getElementById('MainImg');
var smallImg = document.getElementsByClassName('small-img');
smallImg[0].onclick = function() {
  MainImg.src = smallImg[0].src;
}
smallImg[1].onclick = function() {
  MainImg.src = smallImg[1].src;
}
smallImg[2].onclick = function() {
  MainImg.src = smallImg[2].src;
}
smallImg[3].onclick = function() {
  MainImg.src = smallImg[3].src;
}


// * Product details Js

function myFunction() {
  location.href='sproduct.html';
}