// Remove a single element by CSS selector path
function removeElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      element.remove();
    } else {
      console.error(`Element not found: ${selector}`);
    }
}
// remove the top ads div
removeElement("div#tads");
// remove the bottom ads div
removeElement("div#bottomads");
