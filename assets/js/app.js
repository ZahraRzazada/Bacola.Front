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
  arrows: true,
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
        arrows: true,
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
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  // slide: 'div'
});
//-----------------------------------------------

//TabMneu--------------------------
let tabbuttons = document.querySelectorAll('#Tabmenu .container .tabmenu .links button')
console.log(tabbuttons);
console.log("salam");
for (let tbtn of tabbuttons) {
  tbtn.onclick = function () {
    let x = document.querySelector('.tabactive')
    x.classList.remove('tabactive')
    tbtn.classList.add('tabactive')
    let data_id = this.getAttribute('data-id')
    let items = document.querySelectorAll('#Tabmenu .container .tabmenu  .contents div')
    for (let div of items) {
      if (div.getAttribute('id') === data_id) {
        div.classList.remove('d-none')
      }
      else {
        div.classList.add('d-none')
      }
    }
  }
}
//-------------------------------
// Up button--------------------
let up = document.getElementById('Up')
window.onscroll = function () {
  if (document.documentElement.scrollTop > 200) {
    up.style.opacity = '1'
  }
  else {
    up.style.opacity = '0'
  }
}
//---------------------------------


//Category Dropdown----------------

// var dbtn = document.querySelector("header .header-nav .container .all-categories .collapsed ");
// // // console.log(dbtn);
// // var dropdown=document.querySelector("header .header-nav .container .all-categories .dropdown-category");
// // dropdown.classList


// var dropdown = document.querySelector("header .header-nav .container .all-categories .dropdown-category");
// console.log(dropdown);
// // dropdown.classList.toggle("show");


// var dbtn = document.querySelector("header .header-nav .container .all-categories .collapsed ");
// function togglevisible(dbtn) {
//   var element = document.querySelector("header .header-nav .container .all-categories .dropdown-category");
//   if (element.style.display === "none") {
//     element.style.display = "block";
//   } else {
//     element.style.display = "none";
//   }
// }


function toggleDiv() {
  var dropdown = document.querySelector("header .header-nav .container .all-categories .dropdown-category ")
  if (dropdown.style.display === "none") {
    dropdown.style.display = "block";
  } else {
    dropdown.style.display = "none";
  }
}


// $(document).ready(function () {
//   console.log(tgglebtn)
//   $('header .header-nav .container .toggle-btn').click(function () {
//     $('header .header-nav .container .all-categories .dropdown-category').toggleClass('opened closed');
//   });
// });

// const listItems = document.querySelectorAll("header .header-nav .container .all-categories .dropdown-category .subc");

// console.log(listItems)

// Add event listeners to each < li > element
// listItems.forEach(item => {
//   item.addEventListener('mouseover', () => {
//     // Add the 'hovered' class when mouse enters
//     item.classList.add('hovered');
//   });

//   item.addEventListener('mouseout', () => {
//     // Remove the 'hovered' class when mouse leaves
//     item.classList.remove('hovered');
//   });
// });






//---Cartd button HomeSlider
const allAddToCart = document.querySelectorAll("#Hometop .container .row .right-part .best-seller .best-body .product-slider .product .product-card .card-content .product-fade-block .product-button-group .add-to-cart");
const allQuantityCounter = document.querySelectorAll("#Hometop .container .row .right-part .best-seller .best-body .product-slider .product .product-card .card-content .product-fade-block .product-button-group .quantity");

//quantity and addToCart buttons display values
for (let i = 0; i < allAddToCart.length; i++) {
  allAddToCart[i].addEventListener("click", function () {
    allAddToCart[i].style.display = "none";
    allQuantityCounter[i].style.display = "flex";
  });
}

//---Cartd button Homebottom
const allAddToCart2 = document.querySelectorAll("#Hometop .container .row .right-part .new-product .container .product .product-card .card-content .product-fade-block .product-button-group .add-to-cart");
const allQuantityCounter2 = document.querySelectorAll("#Hometop .container .row .right-part .new-product .container .product .product-card .card-content .product-fade-block .product-button-group .quantity ");
// console.log(allAddToCart2)
// console.log(allQuantityCounter2)
//quantity and addToCart buttons display values
for (let i = 0; i < allAddToCart2.length; i++) {
  allAddToCart2[i].addEventListener("click", function () {
    allAddToCart2[i].style.display = "none";
    allQuantityCounter2[i].style.display = "flex";
  });
}

//---Cartd button Homebottom
const allAddToCart3 = document.querySelectorAll("#Shop-part .container .row .shop-primary .container .product .product-card .card-content .product-fade-block .product-button-group .add-to-cart");
const allQuantityCounter3 = document.querySelectorAll("#Shop-part .container .row .shop-primary .container .product .product-card .card-content .product-fade-block .product-button-group .quantity ");
//quantity and addToCart buttons display values
for (let i = 0; i < allAddToCart3.length; i++) {
  allAddToCart3[i].addEventListener("click", function () {
    allAddToCart3[i].style.display = "none";
    allQuantityCounter3[i].style.display = "flex";
  });
}

//---Cartd button Homebottom
const allAddToCart4 = document.querySelectorAll("#Shop-bottom .container .recently .rproduct-body .products .product .product-card .card-content .product-fade-block .product-button-group .add-to-cart");
const allQuantityCounter4 = document.querySelectorAll("#Shop-bottom .container .recently .rproduct-body .products .product .product-card .card-content .product-fade-block .product-button-group .quantity ");
//quantity and addToCart buttons display values
for (let i = 0; i < allAddToCart4.length; i++) {
  allAddToCart4[i].addEventListener("click", function () {
    allAddToCart4[i].style.display = "none";
    allQuantityCounter4[i].style.display = "flex";
  });
}
