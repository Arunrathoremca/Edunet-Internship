// Example JavaScript for interactive features

document.addEventListener('DOMContentLoaded', () => {
    // Add event listeners for like and comment buttons
    const likeButtons = document.querySelectorAll('.like-btn');
    const commentButtons = document.querySelectorAll('.comment-btn');

    likeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('liked');
            button.textContent = button.classList.contains('liked') ? '❤️ Liked' : '❤️';
        });
    });

    commentButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Comment functionality is not implemented in this demo.');
        });
    });
});
