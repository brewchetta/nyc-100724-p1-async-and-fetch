// ASYNC JAVASCRIPT //

// let something = "SOMETHING"

// // NUMBER ONE
// console.log("1. Hello I am synchronous!")

// // NUMBER FOUR (after 5000 milliseconds)
// const timeout = setTimeout(() => console.log(something), 10000) // <---- asynchronous code
// console.log(timeout)

// setTimeout(() => something = "SOMETHING ELSE THAT ISNT THE FIRST THING", 100) // <---- asynchronous code

// // NUMBER TWO
// console.log("4. Hello I am ALSO synchronous!")

// // NUMBER THREE
// console.log("5. Hello also synchronous")

// // for (let i = 0; i < 1000000; i++) {
// //     console.log(i)
// // }

// FETCH //

const dadJokesId = document.querySelector('#dad-jokes-container')
dadJokesId.querySelector('p').remove()
// document.querySelector('#dad-jokes-id p').remove()
const newJokeButton = document.querySelector('#new-joke-button')

function fetchDadJoke() {
    fetch('https://icanhazdadjoke.com/', {
        headers: { 'Accept': `application/json` }
    }) // wait until promise is fulfilled then take the response and put it in .then
    .then((response) => response.json())
    .then((bodyData) => addsDadJokeToHTML(bodyData.joke))
}

function addsDadJokeToHTML(dadJoke) {
    const pTag = document.createElement('p')
    pTag.textContent = dadJoke
    dadJokesId.append(pTag)
}

newJokeButton.addEventListener("click", fetchDadJoke)

// WE WANT JSON
// Java Script Object Notation



// CAT FACTS

const catFactButton = document.querySelector('#new-cat-fact-button')
const catFactContainer = document.querySelector('#cat-facts-container')
let i = 0

function getCatFacts() {
    fetch('https://cat-fact.herokuapp.com/facts')
    .then(response => response.json())
    .then(data => addCatFact(data[i].text))
}

function addCatFact(catFact) {
    const pTag = document.createElement('p')
    pTag.textContent = catFact
    catFactContainer.append(pTag)
    if (i < 4) {
        i++
    } else {
        i = 0
    }
}

catFactButton.addEventListener("click", getCatFacts)


//   - HINT: Be sure to look at the data you get back so you know how to get the joke inside the response...


// Start up json-server with `json-sever db.json`. If you aren't able then attempt to install the json-server (installation depends on your OS). You can now fetch jokes from `http://localhost:3000/jokes`. Fetch the array of jokes, iterate through the array, and create a new paragraph tag for each joke just like above.



fetch('http://localhost:3000/jokes')
.then(res => res.json())
.then(data => console.log(data))



//   - HINT: Once again make sure you look at the data you get back, it WILL be different from the dad jokes APIs