

var swiper = new Swiper(".mySwiper", {
      loop:true,
      navigation: {
        nextEl: "#swiper-button-next",
        prevEl: "#swiper-button-prev",
      },
    });



//   let sliderSlide = document.querySelectorAll(".swiper-slide")

//   function swiperRestart (slider){
//     let i = 0;
//     setInterval(()=>{git

//       slider.forEach((slide) => {
//       slide.style.display = "none";
//     });

//     // Show current slide
//     slider[i].style.display = "block";

//       i++;
//       if(i>=slider.length){
//         i=0;
//       }

//     }, 3000)
//   }

// swiperRestart(sliderSlide)


const cartValue = document.querySelector(".cart-value")
const cartIcon = document.querySelector(".cart-icon")
const cartTab = document.querySelector(".cart-tab")
const cartCloseBtn = document.querySelector(".cart-remove")

cartIcon.addEventListener("click",() => {
    cartTab.classList.add("cart-tab-active")
})




cartCloseBtn.addEventListener("click",() =>{
  
  cartTab.classList.remove("cart-tab-active")
})


async function loadProducts() {
  const response = await fetch('./products.json');
  const products = await response.json();

  console.log(products);
}

loadProducts();
