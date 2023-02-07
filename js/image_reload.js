function randomImage(){
    var images = [
     'images/intro.jpg',
     'images/intro_2.jpg',
     'images/intro_3.jpg',
     'images/intro_4.jpg',
     'images/intro_5.jpg',
     'images/intro_6.jpg'];
    var size = images.length;
    var x = Math.floor(size * Math.random());
    console.log(x);
    var element = document.getElementsByClassName('site-hero');
    console.log(element);
    element[0].style["background-image"] = "url("+ images[x] + ")";
}
  
document.addEventListener("DOMContentLoaded", randomImage);
