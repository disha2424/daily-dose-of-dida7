
        const buttons = document.querySelectorAll('.button');
    const gridButtons = document.querySelectorAll('.grid-button');
        const heading = document.querySelector('h1');
        const newElements = document.getElementById('newElements');
        const overlays = document.querySelectorAll('.overlay');
        document.addEventListener("DOMContentLoaded", function () {
    const commentText = document.getElementById("comment-text");
    const submitButton = document.getElementById("submit-comment");
    const commentList = document.getElementById("comment-list");

 buttons.forEach(button => {
            button.addEventListener('click', () => {
                buttons.forEach(button => button.style.display = 'none');
                heading.style.display = 'none';
                newElements.classList.remove('hidden');
            });
        });


        gridButtons.forEach((button, index) => {
            button.addEventListener('click', () => {
               
                overlays[index].style.display = 'block';
            });
        });

        overlays.forEach((overlay, index) => {
            const closeButton = overlay.querySelector('.closeButton');
            closeButton.addEventListener('click', () => {
             
                overlays[index].style.display = 'none';
            });
        });

          submitButton.addEventListener("click", function () {
        const text = commentText.value.trim();
        if (text) {
            addComment(text);
            commentText.value = "";
        }
    });

    function addComment(text) {
        const comment = document.createElement("div");
        comment.className = "comment";
        comment.innerText = text;
        commentList.appendChild(comment);
    }
});