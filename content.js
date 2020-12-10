// declare a callback for when the element tree is modified
const mutationObserver = new MutationObserver(() => {
    let el = document.querySelector('nav[aria-label="Servers sidebar"]');
    if (el) el.remove();
  });
  
  // start watching for changes in the app
  mutationObserver.observe(document.getElementById("app-mount"), {
    childList: true,
    subtree: true,
  });