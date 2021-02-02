const getPosts = (callback) => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "GET",
        mode: "cors"
    })
    .then(res => res.json())
    .then(posts => {
        callback(posts);
    })
}

export {getPosts}