"use strict";

const url = "https://pokeapi.co/api/v2/pokemon/";

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