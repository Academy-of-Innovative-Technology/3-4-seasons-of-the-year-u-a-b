var winter = ["December, ", "January, ", "February"];
var spring = ["March, ", "April, ", "May"];
var summer = ["June, ", "July, ", "August"];
var fall = ["September,", "October, ", "November"];

var winterImages = ["https://cdn.cosmos.so/b4a8f873-a48a-4fdf-8712-b095407cca88?format=jpeg", "https://cdn.cosmos.so/bae3d0d7-1d9f-4ac9-8330-061fdff8cf06?format=jpeg", "https://cdn.cosmos.so/05e5be5d-05b8-46b1-acfe-069ee1af6d95?format=jpeg", "https://cdn.cosmos.so/71765f54-ac27-4099-a23a-cc5cb582bb20?format=jpeg"];
var springImages = ["https://cdn.cosmos.so/519c7ff6-3125-45a9-bbc2-6c30d8c1b6fe?format=jpeg", "https://cdn.cosmos.so/eec65385-af19-4b4c-9575-4d028852e4be?format=jpeg", "https://cdn.cosmos.so/284f5165-7f55-4f8b-ac31-6ef2b6457b57?format=jpeg", "https://cdn.cosmos.so/47968959-d837-467d-8400-96601e8b053d?format=jpeg"];
var summerImages = ["https://cdn.cosmos.so/9a190394-e339-4c55-9d1b-78a54dd265c5?format=jpeg", "https://cdn.cosmos.so/51fdc509-eabe-4747-82f8-29b37494c490?format=jpeg", "https://cdn.cosmos.so/8db10585-92e6-4bce-915b-869339a44a25?format=jpeg", "https://cdn.cosmos.so/dab92ad0-fe03-4568-bd48-54f60e6d2173?format=jpeg"];
var fallImages = ["https://cdn.cosmos.so/54eb6666-ba4d-4725-b699-aea26c7cec61?format=jpeg", "https://cdn.cosmos.so/34217c28-d301-4044-871c-6068ba81128f?format=jpeg", "https://cdn.cosmos.so/7292860a-1ec5-40df-aaf6-61c32a4348fb?format=jpeg", "https://cdn.cosmos.so/cd509880-4cfc-4f7f-b35c-919056e10c3a?format=jpeg"];

let winterContainer = document.querySelector("#winterContainer");
let springContainer = document.querySelector("#springContainer");
let summerContainer = document.querySelector("#summerContainer");
let fallContainer = document.querySelector("#fallContainer");


function displayWinter() {
winter.forEach((month) => winterContainer.insertAdjacentHTML("beforeend", month));
winterImages.forEach((image) => winterContainer.insertAdjacentHTML("beforeend", `<div class="grid"><img src="${image}" class="winterImg"></div>`));
}



function displaySpring() {
spring.forEach((month) => springContainer.insertAdjacentHTML("beforeend", month));
springImages.forEach((image) => springContainer.insertAdjacentHTML("beforeend", `<div class="grid"><img src="${image}" class="winterImg"></div>`));
}

function displaySummer() {
summer.forEach((month) => summerContainer.insertAdjacentHTML("beforeend", month));
summerImages.forEach((image) => summerContainer.insertAdjacentHTML("beforeend", `<div class="grid"><img src="${image}" class="winterImg"></div>`));
}

function displayFall() {
fall.forEach((month) => fallContainer.insertAdjacentHTML("beforeend", month));
fallImages.forEach((image) => fallContainer.insertAdjacentHTML("beforeend", `<div class="grid"><img src="${image}" class="winterImg"></div>`));
}


function displayAllSeasons() {
	displayWinter();
displaySpring();
displaySummer();
displayFall();
	
}

displayAllSeasons();
