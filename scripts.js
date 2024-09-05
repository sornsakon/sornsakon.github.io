// scripts.js
document.addEventListener('DOMContentLoaded', function () {
    // Get the popup, the iframe inside it, and the button
    var popup = document.getElementById('iframe-popup');
    var iframe = document.getElementById('popup-iframe');
    var closeBtn = document.querySelector('.close-btn');
    var iframeButton = document.getElementById('iframe-button');

    // Add click event listeners to all links with the class 'popup-trigger'
    var triggers = document.querySelectorAll('.popup-trigger');
    triggers.forEach(function (trigger) {
        trigger.addEventListener('click', function (e) {
            e.preventDefault(); // Prevent default link behavior

            // Get the URL, width, height, and button details from the data attributes
            var src = this.getAttribute('data-src');
            var width = this.getAttribute('data-width');
            var height = this.getAttribute('data-height');
            var showButton = this.getAttribute('data-show-button') === 'true';
            var buttonUrl = this.getAttribute('data-button-url');

            // Set the iframe's src, width, and height
            iframe.src = src;
            iframe.style.width = width + 'px';
            iframe.style.height = height + 'px';

            // Show or hide the button based on the data-show-button attribute
            if (showButton) {
                iframeButton.style.display = 'block';
                iframeButton.onclick = function () {
                    window.open(buttonUrl, '_blank'); // Open the button URL in a new tab
                };
            } else {
                iframeButton.style.display = 'none';
            }

            // Show the popup
            popup.style.display = 'flex';
        });
    });

    // Close popup when the close button is clicked
    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none'; // Hide the popup
        iframe.src = ''; // Clear the iframe source to stop loading
    });

    // Close popup when clicking outside the popup content
    window.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none'; // Hide the popup
            iframe.src = ''; // Clear the iframe source to stop loading
        }
    });
});
