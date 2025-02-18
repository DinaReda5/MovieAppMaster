// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");




menuIcon.onclick = () => {
  navbar.classList.toggle("active");
}
window.onscroll = () => {
  navbar.classList.remove("active");
}
window.addEventListener('scroll', () => {
    header.classList.toggle("shadow" , window.scrollY > 0);
});



window.addEventListener('scroll', function() {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
      header.classList.add('bg-white', 'shadow-custom');
      header.classList.remove('text-red-600');
      document.querySelectorAll('.navbar a').forEach(link => {
          link.classList.add('text-black');
          link.classList.remove('text-red-600');
      });
      document.querySelector('.logo').classList.add('text-black');
      document.querySelector('.logo').classList.remove('text-white');
  }
  else {
        header.classList.remove('bg-white', 'shadow-custom');
        header.classList.add('text-white');
        document.querySelectorAll('.navbar a').forEach(link => {
            link.classList.remove('text-black');
            link.classList.add('text-red-600');
        });
        document.querySelector('.logo').classList.remove('text-black');
        document.querySelector('.logo').classList.add('text-white');
    }
});