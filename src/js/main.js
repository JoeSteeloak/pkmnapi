"use strict";

const url = "";

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