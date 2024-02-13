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
// $('.main-img').slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: '.addition-img'
// });
// $('.addition-img').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: '.main-img',
//   dots: true,
//   centerMode: true,
//   focusOnSelect: true
// });
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
