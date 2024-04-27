// Get the modal
var modal = document.getElementById("mySubmit");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("closeSubmit")[0];

// When the user clicks on the button, open the modal
function Submitted() {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    if (fname != "" && lname != "" && email != "" && phone != "") {
        modal.style.display = "block";
    }
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}