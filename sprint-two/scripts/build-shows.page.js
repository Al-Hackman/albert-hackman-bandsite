
//Declaring an Array of objects with the dafault details in mockup

let showsArray = [
    {
        Date:"Mon Dec 17 2018",
        Venue: "Ronald Lane",
        Location:"San Francisco, CA",
    },
    {
        Date:"Tue 18 2019",
        Venue: "Pier 3 East",
        Location:"San Francisco, CA",
    },
    {
        Date:"Fri Jul 22 2019",
        Venue: "View Loungue",
        Location:"San Francisco, CA",
    },
    {
        Date:"Sat Aug 12 2019",
        Venue: "Hyatt Agency",
        Location:"San Francisco, CA",
    },
    {
        Date:"Fri Sep 05 2019",
        Venue: "Moscow Center",
        Location:"San Francisco, CA",
    },
    {
        Date:"Wed Aug 11 2019",
        Venue: "Pres Club",
        Location:"San Francisco, CA",
    }
];


//Declaring a function which will create different elements whenever this function is called.
//Again this function takes the array created above as an argument to display the values. 

displayShows = () => {
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
         

    for (let i = 0; i < showsArray.length; i++){

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
        showDate.innerText = showsArray[i].Date;
        showsList.appendChild(showDate);

        let showsItem2 = document.createElement("li");
        showsItem2.classList.add("shows__item");
        showsItem2.innerText = "VENUE";
        showsList.appendChild(showsItem2);
        //
        let showVenue = document.createElement("span");
        showVenue.classList.add("shows__item-venue");
        showVenue.innerText = showsArray[i].Venue;
        showsList.appendChild(showVenue);

        let showsItem3 = document.createElement("li");
        showsItem3.classList.add("shows__item");
        showsItem3.innerText = "LOCATION";
        showsList.appendChild(showsItem3);
        //
        let showLocation = document.createElement("span");
        showLocation.classList.add("shows__item-location");
        showLocation.innerText = showsArray[i].Location;
        showsList.appendChild(showLocation);

        let showButton = document.createElement("button");
        showButton.classList.add("shows__button");
        showButton.innerText = "BUY TICKETS";
        showsCont.appendChild(showButton);

    }
}

//This is to Invoke(call) the function, with the array as it's argument.

displayShows(showsArray);