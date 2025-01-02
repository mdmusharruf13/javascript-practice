/**
 * Sequential Data Fetching 
 * suppose you need to fetch user details, then use the user ID to fetch their posts, and then use the post ID to fetch comments.
 */

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((users) => {
        console.log("users: ", users.splice(0, 3));
        return fetch(`https://jsonplaceholder.typicode.com/posts/${users[0].id}/comments`);
    })
    .then(response => response.json())
    .then(result => {
        console.log("comments: ", result)
        return fetch(`https://jsonplaceholder.typicode.com/posts/${result[0].postId}/todos`);
    })
    .then(response => response.json())
    .then(result => {
        console.log("todos: ", result.splice(0, 3));
    })
    .catch(error => console.log(error));