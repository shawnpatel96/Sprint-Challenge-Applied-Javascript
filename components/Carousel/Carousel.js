/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
<div class="carousel-container">
  
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
  </div>
  
*/


function carouselCreator(){
  // Creating Elements
  const carousel=document.createElement('div');
  const leftButton= document.createElement('div');
  const mountainsImage= document.createElement('img');
  const computerImage=document.createElement('img');
  const treesImage=document.createElement('img');
  const turnTableImage=document.createElement('img');
  const rightButton=document.createElement('div');

  // Appendiung CHildren to parent
  carousel.append(leftButton);
  carousel.append(mountainsImage);
  carousel.append(treesImage);
  carousel.append(computerImage);
  carousel.append(turnTableImage);
  carousel.append(rightButton);
  // Adding Class Names
  carousel.classList.add('carousel');
  leftButton.classList.add('left-button');
  rightButton.classList.add('right-button');

  // text content....img content more like
  mountainsImage.src= './assets/carousel/mountains.jpeg'
  computerImage.src='./assets/carousel/computer.jpeg'
  treesImage.src='./assets/carousel/trees.jpeg'
  turnTableImage.src='./assets/carousel/turntable.jpeg'
  
// Event Listeners for both buttons

let currentIndex =0;
let imageArray=[mountainsImage, computerImage, treesImage, turnTableImage]

  leftButton.addEventListener('click', ()=>{
    currentIndex--
      if(currentIndex===0){
        currentIndex=imageArray.length;
    }
    
    
})

  rightButton.addEventListener('click',()=>{
    currentIndex++
    if(currentIndex===imageArray.length){
      currentIndex=0;
    }
  })
  return carousel;
}

const carousel= document.querySelector('.carousel-container');
carousel.append(carouselCreator());


// let currentIndex =0;
// let imageArray=[mountainsImage, computerImage, treesImage, turnTableImage]

//   leftButton.addEventListener('click', ()=>{
//     currentIndex--
//       if(currentIndex===0){
//         currentIndex=imageArray.length;
//     }
    
    
// })

//   rightButton.addEventListener('click',()=>{
//     currentIndex++
//     if(currentIndex===imageArray.length){
//       currentIndex=0;
//     }
//   })