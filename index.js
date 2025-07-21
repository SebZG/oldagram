const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
    {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
];

const mainEl = document.querySelector("main");

mainEl.innerHTML = posts.map(p => `
        <section class="post">

            <div class="user-wrapper">
                <img src="${p.avatar}" alt="user's avatar">
                <div class="name-location-wrapper">
                    <p class="full-name">${p.name}</p>
                    <p class="location">${p.location}</p>
                </div>
            </div>

            <div class="content-wrapper">
                <img src="${p.post}" alt="post content">
            </div>

            <div class="icons-wrapper">
                <button><img src="./images/icon-heart.png" alt="heart icon"></button>
                <button><img src="./images/icon-comment.png" alt="comments icon"></button>
                <button><img src="./images/icon-dm.png" alt="share icon"></button>
            </div>

            <div class="likes-wrapper">
                <p>${p.likes} likes</p>
            </div>

            <div class="comments-wrapper">
                <p class="comments-username">${p.username}</p>
                <p class="comments-comment">${p.comment}</p>
            </div>
            
        </section>
`).join("");