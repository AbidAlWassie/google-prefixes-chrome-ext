// filename: background.js

chrome.webNavigation.onCompleted.addListener(function (details) {
  // Check if the URL is a Google search page
  if (details.url && details.url.includes("google.com/search")) {
    // Send a message to the content script to execute the script
    chrome.tabs.sendMessage(details.tabId, { action: "executeScript" });
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
