// declare a callback for when the element tree is modified
const mutationObserver2 = new MutationObserver(() => {
    let el2 = document.querySelector('link[type="image/png"]');
if (el2) el2.remove();
  });
  
  // start watching for changes in the app
  mutationObserver2.observe(document.getElementById("app-mount"), {
    childList: true,
    subtree: true,
  });

