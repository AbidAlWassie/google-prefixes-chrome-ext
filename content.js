// filename: content.js

// Listen for messages from the background script
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  // Check if the request is to execute a script
  if (request.action === "executeScript") {
    // Execute the content script in the context of the page
    addPrefixButtonToDiv();
  }
});

// Function to be executed in the context of the page
function addPrefixButtonToDiv() {
  // Find the specific div element with class 'dRYYxd'
  const divElement = document.querySelector('div.dRYYxd');

  if (divElement) {
    // Check if the button is already added to avoid duplicates
    if (!divElement.querySelector('button.prefixButton')) {
      // Create a new button and add it to the div
      const prefixButton = document.createElement('button');
      prefixButton.textContent = 'Prefixes';
      prefixButton.className = 'prefixButton'; // Adding a class for identification

      // Add click event listener to the new button
      prefixButton.addEventListener('click', function () {
        // Find the textarea with the class 'gLFyf'
        const textarea = document.querySelector('textarea.gLFyf');

        // Check if the textarea is not null or undefined
        if (textarea) {
          // Update the text inside the textarea
          textarea.value = 'Your updated text here';
        } else {
          console.error('Textarea not found');
        }
      });

      // Append the new button to the div
      divElement.appendChild(prefixButton);
    }
  }
}
