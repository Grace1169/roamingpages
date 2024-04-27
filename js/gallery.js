
var modal = document.getElementById("bigImage01");
var img = document.getElementById("smallImage01");
var modalImg = document.getElementById("img01");
img.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementById("close-image01");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

var modal02 = document.getElementById("bigImage02");
var img02 = document.getElementById("smallImage02");
var modalImg02 = document.getElementById("img02");
img02.onclick = function(){
  modal02.style.display = "block";
  modalImg02.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementById("close-image02");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal02.style.display = "none";
}

var modal03 = document.getElementById("bigImage03");
var img03 = document.getElementById("smallImage03");
var modalImg03 = document.getElementById("img03");
img03.onclick = function(){
  modal03.style.display = "block";
  modalImg03.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementById("close-image03");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal03.style.display = "none";
}

var modal04 = document.getElementById("bigImage04");
var img04 = document.getElementById("smallImage04");
var modalImg04 = document.getElementById("img04");
img04.onclick = function(){
  modal04.style.display = "block";
  modalImg04.src = this.src;
}

// Get the <span> element that closes the modal
var span = document.getElementById("close-image04");

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal04.style.display = "none";
}