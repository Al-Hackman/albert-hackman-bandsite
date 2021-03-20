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


        let showsContainer = document.querySelector(".shows-container");

        let showsCont = document.createElement("div");
        showsCont.classList.add("shows");
        showsContainer.appendChild(showsCont);
        
        let showsHeader = document.createElement("h2");
        showsHeader.classList.add("shows__header");
        showsCont.appendChild(showsHeader);

        let showsTitles = document.createElement("h4");
        showsTitles.classList.add("shows__titles");
        showsCont.appendChild(showsTitles);

        let showsList = document.createElement("ul");
        showsList.classList.add("shows__list");
        showsCont.appendChild(showsList);

        let showsItem = document.createElement("li");
        showsItem.classList.add("shows__item");
        showsItem.innerText = "Date";
        showsList.appendChild(showsItem);

        let showDate = document.createElement("span");
        showDate.classList.add("shows__item-date");
        showDate.innerText = showsArray[].Date


        // let commentDate = document.createElement("span");
        // commentDate.classList.add("saved-comment__date");
        // commentDate.innerText = commentArray[i].date;
        // commentName.appendChild(commentDate);

        // let mainComment = document.createElement("p");
        // mainComment.classList.add("saved-comment__content");
        // mainComment.innerText = commentArray[i].statement;
        // pastComment.appendChild(mainComment);