/*Variabler*/
const girls = document.querySelector(".output-girls");
const boys = document.querySelector(".output-boys");
const both = document.querySelector(".output-both");

/*Arrays*/
let arrayGirls = [
  "Alm",
  "Ida",
  "Clara",
  "Olivia",
  "Freja",
  "Emma",
  "Luna",
  "Agnes",
  "Nora",
];

let arrayBoys = [
  "Oscar",
  "Karl",
  "William",
  "Oliver",
  "Alfred",
  "August",
  "Valdemar",
  "Malthe",
  "Arthur",
  "Emil",
];

let arrayBoth = [
  "Alpha",
  "Alfie",
  "Andy",
  "Andrea",
  "Angel",
  "Antonie",
  "Bobbie",
  "Benny",
  "Billie",
  "Björk",
];

/*Array girls*/
arrayGirls.forEach((element) => {
  girls.innerHTML += `
  
  <p>${element}</p>
  
  
  `;
});

/*Array Boys*/
let sortedArrayBoys = arrayBoys.sort();

sortedArrayBoys.map((element) => {
  boys.innerHTML += `
    
    <p>${element}</p>
    
    
    `;
});

/*Array Both*/
let filteredArrayBoth = arrayBoth.filter((element) => element.length > 5);

both.innerHTML = ` <p>${filteredArrayBoth.join("<br>")}</p> `;
