
//Sends a "get" request to get a list of comments from the API.

let bandsiteAPI = 'https://project-1-api.herokuapp.com/';
let showsEndpoint = 'showdates';
let postEndpoint = 'post/';
let keyApi = `?api_key=bab75cb4-c532-4fcd-add1-0c2b0361be14`;

axios.get(`${bandsiteAPI}${showsEndpoint}${keyApi}`)
    .then(response => {
        console.log(response.data);
        let showsArray = response.data;
        displayShows(showsArray);
    })
    .catch(error => {
        console.log('Uh oh! There was an error:', error)
    })

//Declaring a function which will create different elements whenever this function is called.

displayShows = (arr) => {
        let showsContainer = document.querySelector(".shows-container");
       
        let showsHeader = document.createElement("h2");
        showsHeader.classList.add("shows__header");
        showsHeader.innerText = "Shows";
        showsContainer.appendChild(showsHeader);

        let showsCover = document.createElement("div");
        showsCover.classList.add("shows__cover");
        showsContainer.appendChild(showsCover);

        let showsTitles = document.createElement("div");
        showsTitles.classList.add("shows__titles");
        showsCover.appendChild(showsTitles);

        let title_1 = document.createElement("h4");
        title_1.classList.add("shows__title");
        title_1.innerText = "DATES";
        showsTitles.appendChild(title_1);

        let title_2 = document.createElement("h4")
        title_2.classList.add("shows__title");
        title_2.innerText = "VENUE";
        showsTitles.appendChild(title_2);

        let title_3 = document.createElement("h4")
        title_3.classList.add("shows__title");
        title_3.innerText = "LOCATION";
        showsTitles.appendChild(title_3);
         

    arr.forEach(element => {

        let showsCont = document.createElement("div");

        showsCont.classList.add("shows");
        showsCover.appendChild(showsCont);
        
        let showsList = document.createElement("ul");
        showsList.classList.add("shows__list");
        showsCont.appendChild(showsList);

        let showsItem = document.createElement("li");
        showsItem.classList.add("shows__item");
        showsItem.innerText = "DATE";
        showsList.appendChild(showsItem);
        //
        let showDate = document.createElement("span");
        showDate.classList.add("shows__item-date");
        showDate.innerText =element.date;
        showsList.appendChild(showDate);

        let showsItem2 = document.createElement("li");
        showsItem2.classList.add("shows__item");
        showsItem2.innerText = "VENUE";
        showsList.appendChild(showsItem2);
        //
        let showVenue = document.createElement("span");
        showVenue.classList.add("shows__item-venue");
        showVenue.innerText = element.place;
        showsList.appendChild(showVenue);

        let showsItem3 = document.createElement("li");
        showsItem3.classList.add("shows__item");
        showsItem3.innerText = "LOCATION";
        showsList.appendChild(showsItem3);
        //
        let showLocation = document.createElement("span");
        showLocation.classList.add("shows__item-location");
        showLocation.innerText = element.location;
        showsList.appendChild(showLocation);

        let showButton = document.createElement("button");
        showButton.classList.add("shows__button");
        showButton.innerText = "BUY TICKETS";
        showsCont.appendChild(showButton);

    })
}
