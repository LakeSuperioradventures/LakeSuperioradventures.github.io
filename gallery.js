function upDate(previewPic){
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";
  document.getElementById("image").innerHTML = previewPic.alt;
}
function unDo(){
	 document.getElementById("image").style.backgroundImage = "url('')";
   document.getElementById("image").innerHTML = "Hover over an image to display here.";
   document.getElementById("image").style.backgroundColor = "#8e68ff";	
}
function focusFunction(){
  console.log('Image focused:',img.alt);
}
function focusBlur(){
  console.log('Image blurred:',img.alt);
}
function setImages(){
    options = ["DSC_0574.JPG","IMG_2385.jpg","IMG_2382.jpg","IMG_2373.jpg","NorthShore3.JPG","DSC_0569.JPG","IMG_2383.jpg","DSC_0577.JPG", "DSC_0578.JPG", "IMG_2497.JPG","DSC_0610.JPG","DSC_0617.JPG","DSC_0596.JPG","DSC_0599.JPG","IMG_2499.jpg","DSC_0619.JPG","DSC_0611.JPG", "DSC_0581.JPG"]
    currentImages = document.querySelectorAll(".flex img, #image")
    for (var i = 0; i < currentImages.length; i++) {
    console.log("Image + i")
    currentImages[i].setAttribute("tabindex","0")}
}
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

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
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

function setImages(){
  options = ["DSC_0574.JPG","IMG_2385.jpg","IMG_2382.jpg","IMG_2373.jpg","NorthShore3.JPG","DSC_0569.JPG","IMG_2383.jpg","DSC_0577.JPG", "DSC_0578.JPG", "IMG_2497.JPG","DSC_0610.JPG","DSC_0617.JPG","DSC_0596.JPG","DSC_0599.JPG","IMG_2499.jpg","DSC_0619.JPG","DSC_0611.JPG", "DSC_0581.JPG"]
  currentImages = document.querySelectorAll(".row img")
  for (var i = 0; i < currentImages.length; i++) {
  console.log("Image + i")
  currentImages[i].setAttribute("tabindex","0")}
}





  