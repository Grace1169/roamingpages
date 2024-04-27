document.getElementsByClassName('img-cat')[0].click()
function openCity(evt, cityName) {
    var i,
        tabcontent,
        tablinks;
    tabcontent = document.getElementsByClassName("travel-content");
    for (i = 0; i < tabcontent.length; i++) {
       tabcontent[i].style.display = "none";
   }
   tablinks = document.getElementsByClassName("img-cat");
   for (i = 0; i < tablinks.length; i++) {
       tablinks[i].className = tablinks[i].className.replace(" active", "");
   }
   document.getElementById(cityName).style.display = "block";
   evt.currentTarget.className += " active";
}