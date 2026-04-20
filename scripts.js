// This is an array of objects (Pokemon)
// I loaded in thier information from the data.js file I will include in the repo
const originalPokemon = [...pokemon];
let currentList = [...pokemon];


// This function adds cards the page to display the data in the array
function showCards(array = pokemon) {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  for (let i = 0; i < array.length; i++) {
    let currentPokemon = array[i];
    let imageURL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + currentPokemon.dexNum + ".png"; 
    //I needed a way to systemteically get pictures of the pokemon I hope this is okay.
    const nextCard = templateCard.cloneNode(true); 
    // Copy the template card
    nextCard.onclick = function() { openPopup(currentPokemon); };
    editCardContent(nextCard, currentPokemon.name, imageURL, currentPokemon.classification, currentPokemon.heightFt, currentPokemon.weightLbs, currentPokemon.dexNum); 
    // Edit what is displayed on the card, shows releveant pokmone information.
    cardContainer.appendChild(nextCard); 
    // Add new card to the container 
    // This part of the code doesn't scale very well! After you add your
    // own data, you'll need to do something totally different here.
  }
}

function editCardContent(card, newTitle, newImageURL, newClassification, newHeight, newWeight, newDexNum) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = newTitle;

  const cardImage = card.querySelector("img");
  cardImage.src = newImageURL;
  cardImage.alt = newTitle + " Sprite";

  const pokemonClassification = card.querySelector(".classification");
  pokemonClassification.textContent = newClassification;

  const pokemonHeight = card.querySelector(".height");
  pokemonHeight.textContent = newHeight + "ft";

  const pokemonWeight = card.querySelector(".weight");
  pokemonWeight.textContent = newWeight + "lbs";

  const pokedexNum = card.querySelector(".dexNum");
  pokedexNum.textContent = "Pokedex #" + newDexNum;

  // You can use console.log to help you debug!
  // View the output by right clicking on your website,
  // select "Inspect", then click on the "Console" tab
  // console.log("new card:", newTitle, "- html: ", card);
}

// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", function() {
  showCards();
});


//unused but edited from starter code
// function quoteAlert() {
//   console.log("Button Clicked!");
//   alert("I like water pokemon!");
// }

//unused but edited from starter code
// function removeLastCard() {
//   pokemon.pop();
//   showCards();
// }

function filterBySize(size) {
  let result;
  switch(size){
     case'small':
     result =pokemon.filter(function(item) {
     return item.heightFt < 2 && item.weightLbs < 50;
     });
     showCards(result)
     currentList = result;
     break;

     case'medium':
     result =pokemon.filter(function(item) {
     return item.heightFt >= 2 && item.heightFt <= 4 &&  item.weightLbs >= 50 && item.weightLbs <= 100;
     });
     showCards(result)
     currentList = result;
     break;

     case'large':
     result =pokemon.filter(function(item) {
     return item.heightFt >= 4 && item.weightLbs >= 100;
     });
     showCards(result)
     currentList = result;
     break;
     }
}

function toggleFilter(){
  document.getElementById("filter-menu").classList.toggle("open")
}

function enterCatalog(){
  document.getElementById("landing-page").style.display = "none";
}

function sortByAlpha(){
  let sortedPokemon = currentList.sort(function(a, b) {
  if (a.name < b.name) return -1;
  if (a.name > b.name) return 1;
  return 0;
});
showCards(sortedPokemon)
}

function toggleSort(){
  document.getElementById("sort-menu").classList.toggle("open")
}

function sortByDefault(){
  let sorted = currentList.sort(function(a, b) {
    if (a.dexNum < b.dexNum) return -1;
    if (a.dexNum > b.dexNum) return 1;
    return 0;
  });
  showCards(sorted);

}

function openPopup(pokemon){
 document.getElementById('popup-name').textContent = pokemon.name; 
 document.getElementById('popup-sprite').src = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + pokemon.dexNum + ".png";
 document.getElementById('popup-size-label').textContent = Math.round(pokemon.heightFt / 5.6 * 100) + "% of average human height.";
 document.getElementById('popup-factoid').textContent = pokemon.factoid;
 document.getElementById('popup-overlay').classList.add("active");
}

function closePopup(){
  document.getElementById('popup-overlay').classList.remove("active");
}


/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */

// Your final submission should have much more data than this, and
// you should use more than just an array of strings to store it all.