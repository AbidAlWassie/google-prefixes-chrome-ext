// content.js
// Function to add a new button to the DOM
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

// Execute the function once to check if the button needs to be added immediately
addPrefixButtonToDiv();
