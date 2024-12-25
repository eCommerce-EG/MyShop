document.addEventListener("DOMContentLoaded", function () {
    var posts = document.querySelectorAll(".post");

    posts.forEach(function (post) {
        var postBody = post.querySelector(".post-body");
        var images = postBody.querySelectorAll("img");

        if (images.length > 1) {
            // Get the second image URL
            var secondImageUrl = images[1].src;

            // Get the second image placeholder
            var secondImageElement = post.querySelector(".second-image");

            if (secondImageElement) {
                secondImageElement.src = secondImageUrl; // Set the second image's src
            }

            // Add hover effects to show the second image
            post.addEventListener("mouseenter", function () {
                secondImageElement.style.opacity = "1"; // Display the second image
                secondImageElement.style.transform = "scale(1.5)";
            });

            post.addEventListener("mouseleave", function () {
                secondImageElement.style.opacity = "0"; // Hide the second image
                secondImageElement.style.transform = "scale(1)"; // Reset transform
            });
        }
    });
});
