// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>    //item.
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

// Accessing Cards Container
const cardsCont = document.querySelector('.cards-container');

function Cards(obj) {
        const cardsCont = document.querySelector('.cards-container');
        // Card creation
        const card = document.createElement('div');
        card.classList.add('card');

        // Headline creation
        const headLine = document.createElement('div');
        headLine.classList.add('headline');
        headLine.textContent = obj.headline;
        card.appendChild(headLine);

        // Author - div
        const author = document.createElement('div');
        author.classList.add('author');
        card.appendChild(author);

        // Img Container - div
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-container');
        author.appendChild(imgDiv);

        // Img src - img
        const img = document.createElement('img');
        img.src = obj.authorPhoto;
        imgDiv.appendChild(img);

        // Author Name - span
        const authorName = document.createElement('span');
        authorName.textContent = `By ${obj.authorName}`;
        author.appendChild(authorName);

        return card;
}

// Api Request
axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((item) => {
        // Data from Api
        const headlinesData = item.data.articles;
        // Programs extracts the keys from the data
        const programs = Object.keys(item.data.articles);
        // Iterated over programs to extract headlines and
        // pass information to appended Cards component
        programs.forEach(x => {
                headlinesData[x].forEach(y => {
                        cardsCont.appendChild(Cards(y));
                })
        });
    })
    .catch(() => {
        // In case if something goes wrong
        console.log('error....');
    });