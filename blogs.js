// script.js
const blogPosts = [
    "blogs/worm-movement-3-19-24.html",
    "blog-post-2.html",
    // Add more blog post file paths as needed
];

let currentPostIndex = 0;

function fetchAndDisplayPost(url) {
    fetch(url)
        .then(response => response.text())
        .then(html => {
            document.getElementById('blog-posts').innerHTML = html;
        })
        .catch(error => console.error('Error fetching blog post:', error));
}

function showNextPost() {
    currentPostIndex = (currentPostIndex + 1) % blogPosts.length;
    fetchAndDisplayPost(blogPosts[currentPostIndex]);
}

function showPrevPost() {
    currentPostIndex = (currentPostIndex - 1 + blogPosts.length) % blogPosts.length;
    fetchAndDisplayPost(blogPosts[currentPostIndex]);
}

document.getElementById('next-btn').addEventListener('click', showNextPost);
document.getElementById('prev-btn').addEventListener('click', showPrevPost);

// Display the first blog post initially
fetchAndDisplayPost(blogPosts[currentPostIndex]);
