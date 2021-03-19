
let commentArray = [
    {
        name:"Michael Lyons",
        date: "12/18/2018",
        statement:"They BLEW the ROOF off their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed.",
    },
    {
        name: "Gary Wong",
        date: "12/12/2018",
        statement: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myslef.",
    },
    {
        name: "Theodore Duncan",
        date: "11/15/2018",
        statement: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favourite ever!"
    }
];


duplicate = () => {

    for(let i = 0; i < 3; i++){
        let commentContainer = document.querySelector(".saved-comment");
        let photo = document.createElement("img");
        photo.classList.add("saved-comment__photo");
        commentContainer.appendChild(photo);
        let pastComment = document.createElement("div");
        pastComment.classList.add("saved-comment__comments");
        commentContainer.appendChild(pastComment);
        let commentName = document.createElement("h4");
        commentName.classList.add("saved-comment__name");
        commentName.innerText = commentArray[i].name;
        pastComment.appendChild(commentName);
        let commentDate = document.createElement("span");
        commentDate.classList.add("saved-comment__date");
        commentDate.innerText = commentArray[i].date;
        commentName.appendChild(commentDate);
        let mainComment = document.createElement("p");
        mainComment.classList.add("saved-comment__content");
        mainComment.innerText = commentArray[i].statement;
        pastComment.appendChild(mainComment);
    }
}


for(let i=0; i<1; i++){
    duplicate(commentArray[i]);
}


//creating an event to add new comment

let submitButton = document.querySelector('#submit-comment');
// let textName = document.querySelector('#full-name');
// let textComment = document.querySelector('#input-comment');
eventHandler = event => {
    event.preventDefault();

    let item = document.createElement("h4");
    let textName = document.querySelector('#full-name').value;
    item.innerText = textName;

    let item2 = document.createElement("p");
    let textComment = document.querySelector("#input-comment").value;
    item2.innerText = textComment;

    let listItems = document.querySelector('.saved-comment__comments');
    listItems.prepend(item2);
    listItems.prepend(item);
    listItems.removeChild(listItems.lastElementChild);
    document.querySelector('#full-name').value = ' ';
    document.querySelector('#input-comment').value = ' ';

}

submitButton.addEventListener('click', eventHandler);