// Javascript code for Hero image sliders

// $(document).ready(function(){
//   $('.index-hero').slick({
//     autoplay: true,
//     autoplaySpeed: 2000,
//     dots:true,
//     arrows:true
//   });
// });


window.onscroll = funtion();{myFunction()};

var header = docuemt.getElementById('myHeader');
var sticky = header.offsetTop;

function myFunction() {
  if(window.pageYOffset > sticky){
    header.classList.add('sticky');
  } else {
    header.classList.remove(sticky);
  }
}