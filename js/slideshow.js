let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("img-slideshows");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
}

let slideIndex02 = 1;
showSlides02(slideIndex02);

function plusSlides02(n) {
  showSlides02(slideIndex02 += n);
}

function currentSlide02(n) {
  showSlides02(slideIndex02 = n);
}

function showSlides02(n) {
  let i;
  let slides = document.getElementsByClassName("img-slideshows02");
  let dots = document.getElementsByClassName("dot02");
  if (n > slides.length) {slideIndex02 = 1}    
  if (n < 1) {slideIndex02 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex02-1].style.display = "block";  
  dots[slideIndex02-1].className += " active-dot";
}

let slideIndex03 = 1;
showSlides03(slideIndex03);

function plusSlides03(n) {
  showSlides03(slideIndex03 += n);
}

function currentSlide03(n) {
  showSlides03(slideIndex03 = n);
}

function showSlides03(n) {
  let i;
  let slides = document.getElementsByClassName("img-slideshows03");
  let dots = document.getElementsByClassName("dot03");
  if (n > slides.length) {slideIndex03 = 1}    
  if (n < 1) {slideIndex03 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex03-1].style.display = "block";  
  dots[slideIndex03-1].className += " active-dot";
}

let slideIndex04 = 1;
showSlides04(slideIndex04);

function plusSlides04(n) {
  showSlides04(slideIndex04 += n);
}

function currentSlide04(n) {
  showSlides04(slideIndex04 = n);
}

function showSlides04(n) {
  let i;
  let slides = document.getElementsByClassName("img-slideshows04");
  let dots = document.getElementsByClassName("dot04");
  if (n > slides.length) {slideIndex04 = 1}    
  if (n < 1) {slideIndex04 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex04-1].style.display = "block";  
  dots[slideIndex04-1].className += " active-dot";
}

let slideIndex05 = 1;
showSlides05(slideIndex05);

function plusSlides05(n) {
  showSlides05(slideIndex05 += n);
}

function currentSlide05(n) {
  showSlides05(slideIndex05 = n);
}

function showSlides05(n) {
  let i;
  let slides = document.getElementsByClassName("img-slideshows05");
  let dots = document.getElementsByClassName("dot05");
  if (n > slides.length) {slideIndex05 = 1}    
  if (n < 1) {slideIndex05 = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex05-1].style.display = "block";  
  dots[slideIndex05-1].className += " active-dot";
}