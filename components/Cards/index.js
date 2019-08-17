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
        headLine.textContent = obj.data;
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
        img.src = obj.data;
        imgDiv.appendChild(img);

        // Author Name - span
        const authorName = document.createElement('span');
        authorName.textContent = `By ${obj.data}`;
        author.appendChild(authorName);


        return card;
}


axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then((item) => {
        const headlinesData = item.data;
        // console.log(item.data);
        const programs = Object.keys(item.data.articles);
        programs.forEach(instance => {
                item.data.articles[instance].forEach(thing => {
                        document.querySelector('.cards-container').appendChild(Cards(thing));
                })
        });
        // console.log(Cards(headlinesData));
        // cardsCont.appendChild(card);

    })
    .catch(() => {
        console.log('error....');
    })