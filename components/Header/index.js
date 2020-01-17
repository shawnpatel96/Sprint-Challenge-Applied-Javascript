// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    // Creating Elements
    const header= document.createElement('div');     // Parent Element
    const date= document.createElement('span');
    const h1= document.createElement('h1');
    const temp=document.createElement('span');
    
    //Assigning Class Names
    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');


    //Appending Children to Parent
    header.append(date);
    header.append(h1);
    header.append(temp);


    // Text Content
    date.textContent="SMARCH 28, 2019"
    h1.textContent="Lambda Times"
    temp.textContent="98°"

    return header;


    }
    const headerContainer= document.querySelector('.header-container');

    headerContainer.append(Header());
