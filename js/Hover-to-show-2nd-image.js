  document.addEventListener(&quot;DOMContentLoaded&quot;, function () {
    var posts = document.querySelectorAll(&quot;.post&quot;);

    posts.forEach(function (post) {
      var postBody = post.querySelector(&quot;.post-body&quot;);
      var images = postBody.querySelectorAll(&quot;img&quot;);

      if (images.length &gt; 1) {
        // Get the second image URL
        var secondImageUrl = images[1].src;

        // Get the second image placeholder
        var secondImageElement = post.querySelector(&quot;.second-image&quot;);

        if (secondImageElement) {
          secondImageElement.src = secondImageUrl; // Set the second images src
        }

        // Add hover effects to show the second image
        post.addEventListener(&quot;mouseenter&quot;, function () {
  secondImageElement.style.opacity = &quot;1&quot;; // Display the second image
    secondImageElement.style.transform = &quot;scale(1.5)&quot;; 


        });

        post.addEventListener(&quot;mouseleave&quot;, function () {
            secondImageElement.style.opacity = &quot;0&quot;; // Hide the second image
      secondImageElement.style.transform = &quot;scale(1)&quot;; // Display the second image


        });
      }
    });
  });
