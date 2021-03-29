
// This function fetches the data from the API and invokes other functions to populate it.

let bandsiteAPI = 'https://project-1-api.herokuapp.com/';
let commentEndpoint = 'comments';
let postEndpoint = 'post/';
let keyApi = `?api_key=bab75cb4-c532-4fcd-add1-0c2b0361be14`;

const getAllComments = () =>{
    document.querySelector('.saved-comment').innerHTML = '';
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

let duplicate = (arr) => {

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

        let likeContainer = document.createElement("span");
        likeContainer.classList.add("saved-comment__like-container");
        likeDelete.appendChild(likeContainer);

        let likeCount = document.createElement("span");
        likeCount.classList.add("saved-comment__count");
        likeContainer.appendChild(likeCount).innerText=element.likes + (element.likes > 1 ? ' likes' : ' like');

        let likeComment = document.createElement("img");
        likeComment.classList.add("saved-comment__ld");
        likeComment.setAttribute("src","./assets/icons/PNG/like.png");
        likeComment.setAttribute('alt', "Like this comment");
        likeComment.setAttribute('data-comment_id', element.id);
        likeComment.setAttribute('data-like_count', element.likes);
        likeComment.addEventListener('click', likeThisComment)
        likeContainer.appendChild(likeComment);

        let delComment = document.createElement("img");
        delComment.classList.add("saved-comment__ld");
        delComment.setAttribute("src","./assets/icons/PNG/delete.png");
        delComment.setAttribute('alt', "Delete Comment");
        delComment.setAttribute('data-comment_id', element.id);
        delComment.addEventListener('click', deleteThisComment)
        likeDelete.appendChild(delComment);

});
}

//Creating an Event Handler to add new comment.

let submitButton = document.querySelector('#submit-comment');
let textName = document.querySelector('#full-name');
let textComment = document.querySelector('#input-comment');

let displayComment = event => {
    event.preventDefault();

    let item = document.createElement("h4");
    let textName = document.querySelector('#full-name').value;
    item.innerText = textName;

    let item2 = document.createElement("p");
    let textComment = document.querySelector("#input-comment").value;
    item2.innerText = textComment;
    
    let newCom = {
	    "name": textName,
	    "comment": textComment,
        }
 
    axios.post(`${bandsiteAPI}${commentEndpoint}${keyApi}`, newCom, {headers: {'Content-Type': 'application/json'}} )
    .then(response => {
        submitButton.disabled = true;
        console.log(response);
        getAllComments();
    })
    .catch(err => {
        console.log(err)
    })

    document.querySelector('#full-name').value = '';
    document.querySelector('#input-comment').value = '';
}


//Like Comment Function
function likeThisComment(e) {
    e.preventDefault();
    console.log('this comment', this.dataset.comment_id)
    let comID = this.dataset.comment_id;
    axios.put(`${bandsiteAPI}${commentEndpoint}/${comID}/like${keyApi}`)
    .then(res => {
        console.log('new like', res.data)
        getAllComments();
    })
    .catch(err => {
        console.log('like error', err)
    })
}

//Delete Comment Function
function deleteThisComment(e) {
    e.preventDefault();
    console.log('this comment', this.dataset.comment_id)
    let comID = this.dataset.comment_id;
    axios.delete(`${bandsiteAPI}${commentEndpoint}/${comID}${keyApi}`)
    .then(res => {
        getAllComments();
    })
    .catch(err => {
        console.log('Delete error', err)
    })
}


//This function prevents users from submitting empty comments.
submitButton.disabled = true;

const enableSubmitBtn = () => {
    console.log('blured')
    let textNameInput = document.querySelector("#full-name").value;
    let textCommentInput = document.querySelector("#input-comment").value;

    if (textNameInput ==="" || textCommentInput==="") {
        submitButton.disabled = true;
    } else {
        submitButton.disabled = false;
    }
}

document.querySelector("#full-name").addEventListener('keyup', enableSubmitBtn)
document.querySelector("#input-comment").addEventListener('keyup', enableSubmitBtn)


//Invoke(call) the function when the button is clicked.

submitButton.addEventListener('click', displayComment);

