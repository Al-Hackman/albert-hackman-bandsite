
//Declaring an Array with the default 3 comments given in the mockup.

// let commentArray = [
//     {
//         name:"Michael Lyons",
//         date: "12/18/2018",
//         statement:"They BLEW the ROOF off their last show, once everyone started figuring out they were going. This is still simply the greatest opening of concert I have EVER witnessed.",
//     },
//     {
//         name: "Gary Wong",
//         date: "12/12/2018",
//         statement: "Every time I see him shred I feel so motivated to get off my couch and hop on my board. He's so talented! I wish I can ride like him one day so I can really enjoy myself.",
//     },
//     {
//         name: "Theodore Duncan",
//         date: "11/15/2018",
//         statement: "How can someone be so good!!! You can tell he lives for this and loves to do it every day. Everytime I see him I feel instantly happy! He's definitely my favourite ever!"
//     }
// ];



let bandsiteAPI = 'https://project-1-api.herokuapp.com/';
let commentEndpoint = 'comments';
let postEndpoint = 'post/';
let keyApi = `?api_key=bab75cb4-c532-4fcd-add1-0c2b0361be14`;
getAllComments = () =>{
    axios.get(`${bandsiteAPI}${commentEndpoint}${keyApi}`)
    .then(response => {
        console.log(response.data);
        let commentArray = response.data;
        duplicate(commentArray.reverse().slice(0, 3))
    })
    .catch(error => {
        console.log('Uh oh! There was an error:', error)
    })
}

getAllComments();

//Declaring a function to create various elements and add values as well based on the arguments.

duplicate = (arr) => {

    let commentContainer = document.querySelector(".saved-comment");
    
    arr.forEach(element => {
        
        let photoComment = document.createElement("div");
        photoComment.classList.add("saved-comment__cover");
        commentContainer.appendChild(photoComment);

        let photo = document.createElement("div");
        photo.classList.add("saved-comment__photo");
        photoComment.appendChild(photo);

        let pastComment = document.createElement("div");
        pastComment.classList.add("saved-comment__comments");
        photoComment.appendChild(pastComment);

        let commentName = document.createElement("h4");
        commentName.classList.add("saved-comment__name");
        commentName.innerText = element.name;
        pastComment.appendChild(commentName);

         // Convert timestamp to date
        let date = new Date(element.timestamp);
        let month = date.getMonth() +1;
        let day = date.getDate();
        let year = date.getFullYear();

        let commentDate = document.createElement("span");
        commentDate.classList.add("saved-comment__date");
        commentDate.innerText = `${month}/${day}/${year}`,
        commentName.appendChild(commentDate);

        let mainComment = document.createElement("p");
        mainComment.classList.add("saved-comment__content");
        mainComment.innerText = element.comment;
        pastComment.appendChild(mainComment);

        let likeDelete = document.createElement("div");
        likeDelete.classList.add("saved-comment__like-del");
        pastComment.appendChild(likeDelete);

        let likeCount = document.createElement("span");
        likeCount.classList.add("saved-comment__count");
        likeDelete.appendChild(likeCount).innerHTML=element.likes;

        let likeComment = document.createElement("img");
        likeComment.classList.add("saved-comment__like");
        likeComment.setAttribute("src","./assets/icons/PNG/like.png");
        likeComment.setAttribute('alt', "Like this comment");
        likeComment.setAttribute('data-comment_id', element.id);
        likeComment.setAttribute('data-like_count', element.likes);
        likeComment.addEventListener('click', likeThisComment)
        likeCount.appendChild(likeComment);

        let delComment = document.createElement("img");
        delComment.classList.add("saved-comment__delete");
        delComment.setAttribute("src","./assets/icons/PNG/delete.png");
        delComment.setAttribute('alt', "Delete Comment");
        likeDelete.appendChild(delComment);
    
});
}

//Invoking(calling) the function with the array as the argument.

// duplicate(commentArray);


//Creating an Event Handler to add new comment.
// This function also clears up the old history on saved comments and builds a new array with the latest comment on top.

let submitButton = document.querySelector('#submit-comment');
let textName = document.querySelector('#full-name');
let textComment = document.querySelector('#input-comment');

displayComment = event => {
    event.preventDefault();

    document.querySelector('.saved-comment').innerHTML = '';

    let item = document.createElement("h4");
    let textName = document.querySelector('#full-name').value;
    item.innerText = textName;

    let item2 = document.createElement("p");
    let textComment = document.querySelector("#input-comment").value;
    item2.innerText = textComment;

    let today = new Date();
    let month = today.getMonth() +1;
    let year = today.getFullYear();
    let date = today.getDate();
    
    let newCom = {
	"name": textName,
	"comment": textComment,
    }

 
    axios.post(`${bandsiteAPI}${commentEndpoint}${keyApi}`, newCom, {headers: {'Content-Type': 'application/json'}} )
    .then(response => {
        console.log(response);
        getAllComments();
    })
    .catch(err => {
        console.log(err)
    })

    // commentArray.unshift(newCom);
    // commentArray.pop();
   
    // duplicate(commentArray);

    
    document.querySelector('#full-name').value = '';
    document.querySelector('#input-comment').value = '';
}

function likeThisComment() {
    console.log('this comment', this.dataset.comment_id)
    console.log('this comment count', this.dataset.like_count++)
    // call api to update the likes
}

//Invoke(call) the function when the button is clicked.

submitButton.addEventListener('click', displayComment);

// delComment.addEventListener('click', deleteComment(id))
