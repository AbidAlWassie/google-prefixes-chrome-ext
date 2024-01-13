// background.js
chrome.webNavigation.onCompleted.addListener(function (details) {
  // Check if the URL is a Google search page
  if (details.url && details.url.includes("google.com/search")) {
    chrome.scripting.executeScript({
      target: { tabId: details.tabId },
      function: addPrefixButtonToDiv
    });
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
        alert('Prefixes Button clicked!');
        // Add your desired functionality here when the button is clicked
      });

      // Append the new button to the div
      divElement.appendChild(prefixButton);
    }
  }
}
