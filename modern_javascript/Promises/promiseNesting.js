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

// Nested Delays - Simulating sequential delays using setTimeout wrapped in promises.

function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

delay(1000)
    .then(() => {
        console.log(`1 second passed`);
        return delay(2000);
    })
    .then(() => {
        console.log(`2 more seconds passed`);
        return delay(3000);
    })
    .then(() => {
        console.log(`3 more seconds passed`);
    })


// file upload simulation - one file depends on another's success.
function uploadFile(file) {
    return new Promise((resolve, reject) => {
        console.log(`Uploading ${file}...`);
        setTimeout(() => resolve(`${file} uploaded`), 1000);
    });
}

uploadFile("file1.txt")
    .then((result) => {
        console.log(result);
        return uploadFile("file2.txt");
    })
    .then((result2) => {
        console.log(result2);
        return uploadFile("file3.txt");
    })
    .then((result3) => {
        console.log(result3);
    })
    .catch(error => console.log(error));