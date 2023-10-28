function changeBackgroundColor() {
  // Fetch the CSS file via AJAX
  fetch('https://www.blackjackapprenticeship.com/wp-content/cache/autoptimize/css/autoptimize_23881e785af66e516b682fb120320cea.css')
    .then(response => response.text())
    .then(cssText => {
      // Manipulate the CSS text to change the background color
      const updatedCssText = cssText.replace(/background-color:\s*#[a-zA-Z0-9]+;/g, 'background-color: #252525;');
      
      // Create a new style element and add the updated CSS text
      const styleElement = document.createElement('style');
      styleElement.textContent = updatedCssText;
      document.head.appendChild(styleElement);
    });
}

// Run the function
changeBackgroundColor();
