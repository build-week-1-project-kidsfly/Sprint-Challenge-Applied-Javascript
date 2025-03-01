// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// Grabbed .headerContainer
const headerCont = document.querySelector('.header-container');

function Header() {

    // Created header div
    const header = document.createElement('div');
    header.classList.add('header');

    // Span - Date
    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'SMARCH 28, 2019';
    header.appendChild(date);

    // H1
    const lambdaTimes = document.createElement('h1');
    lambdaTimes.textContent = 'Lambda Times';
    header.appendChild(lambdaTimes);

    // Span - temp
    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    header.appendChild(temp);

    // Added header component to .headerContainer
    headerCont.appendChild(header);

    return header;
}

// Called the Header function
Header();