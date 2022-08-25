const navbarEl = document.querySelector(".navbar");
const bottomcontainerEL =document.querySelector(".bottom-container");

console.log(bottomcontainerEL.offsetTop);

window.addEventListener("scroll",()=>{
   if(window.scrollY> bottomcontainerEL.offsetTop-navbarEl.offsetHeight-40){
    navbarEl.classList.add("active");

   }
   else{
    navbarEl.classList.remove("active")
   }

})
