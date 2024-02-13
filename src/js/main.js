"use strict";
let fetchedData = [];
const url = "https://pokeapi.co/api/v2/pokemon/1/";

//hämta data
async function fetchAPI() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new error(`error: ${response.status}`);
        }
        const data = await response.json();
        //skicka data till array
        fetchedData = data;
    }
    catch (error) {
        document.getElementById("error").innerHTML = "<p>Något gick fel...</p>"
    }
}

fetchAPI().then(() => {
    //när fetchAPI är klar anropas denna
    //för att visa data
    displayData();
})


function displayData() {
    const pokeList = document.getElementById("poke");
    pokeList.innerHTML = "";
    fetchedData.array.forEach((item) => {
        pokeList.innerHTML += `<div class="pokemon">${item}</div>`
        
    });
}
