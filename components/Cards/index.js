// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
  // grabbing
  const cards= document.querySelector(".cards-container")
axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response=>{
    console.log(response)
   const myArray= Object.values(response.data.articles)
   myArray.forEach(items=>{
       items.forEach(item=>{
        cards.append(cardCreator(item))
       })
       console.log(myArray)
    })
})
.catch(error=>{
    console.log("no data", error)
})
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />    // CHILD OF IMG-CONTIANER
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//

function cardCreator(object){
    // Creating Elements
    const card= document.createElement('div');       // Parent Element
    const headline= document.createElement('div');
    const author=document.createElement('div');
    const imgContainer= document.createElement('div');    
    const image=document.createElement('img');        // CHILD OF IMAGE CONATINER
    const authorName=document.createElement('span');

    // Adding Class Names
    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');


    //Appending CHildrend to paretn
    card.appendChild(headline);
    card.appendChild(author);
    author.appendChild(imgContainer);
    imgContainer.appendChild(image);            // Image appended to imgCOntainer not card
    author.appendChild(authorName);

    // Text content
    headline.textContent=object.headline;
    image.src=object.authorPhoto;
    authorName.textContent=`By: ${object.authorName}`;

    return card;

}


