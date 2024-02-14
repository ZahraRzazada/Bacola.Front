// // -------------------Home-Slider-----------------
$('.home-slider1').slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: false,
          slidesToScroll: 1
        }
      }
    ]
  });
  $('.product-slider').slick({
    dots: false,
    infinite: false,
    speed: 300,
    arrows:true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          dots: false,
          arrows:true,
          slidesToScroll: 1
        }
      }
     
    ]
  });
// --------------------------------------------

//Shop Product----------------------------------
$('.main-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  arrows: false,
  fade: true,
  // Infinity:true,
  asNavFor: '.addition-img'
});
$('.addition-img').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 500,
  asNavFor: '.main-img',
  dots: true,
  arrows:false,
  centerMode: true,
  focusOnSelect: true,
  // slide: 'div'
});
//-----------------------------------------------

//TabMneu--------------------------
let tabbuttons=document.querySelectorAll('#Tabmenu .container .tabmenu .links button')
console.log(tabbuttons);
console.log("salam");
for(let tbtn of tabbuttons){
tbtn.onclick=function(){
let x=document.querySelector('.tabactive')
x.classList.remove('tabactive')
tbtn.classList.add('tabactive')
let data_id=this.getAttribute('data-id')
let items=document.querySelectorAll('#Tabmenu .container .tabmenu  .contents div')
for( let div of items){
if(div.getAttribute('id')===data_id){
  div.classList.remove('d-none')
}
else{
  div.classList.add('d-none')
}
}
}
}
//-------------------------------
// Up button--------------------
let up=document.getElementById('Up')
window.onscroll=function(){
  if(document.documentElement.scrollTop>200){
up.style.opacity='1'
  }
  else{
    up.style.opacity='0'
  }
}
//---------------------------------


//Category Dropdown----------------
// var dbtn=document.querySelector("header .header-nav .container .all-categories .collapsed ");
// // console.log(dbtn);
// var dropdown=document.querySelector("header .header-nav .container .all-categories .dropdown-category");
// dropdown.classList


  var dropdown=document.querySelector("header .header-nav .container .all-categories .dropdown-category");
  console.log(dropdown);
  // dropdown.classList.toggle("show");
