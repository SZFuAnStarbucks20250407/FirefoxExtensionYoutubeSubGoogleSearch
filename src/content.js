// Observe subtitle container
const observer = new MutationObserver(() => {
  // Subtitle lines appear inside .ytp-caption-segment or span elements
  document.querySelectorAll('.ytp-caption-segment').forEach(segment => {
    if (!segment.dataset.clickable) {
      segment.dataset.clickable = "true";

      // Split words into spans
      const words = segment.innerText.split(/\s+/);
      segment.innerHTML = "";
      words.forEach(word => {
        const span = document.createElement("span");
        span.innerText = word + " ";
        span.style.cursor = "pointer";
        span.style.textDecoration = "underline";
        span.style.textDecorationStyle = "dotted";
        span.addEventListener("click", () => {
          const url = "https://www.google.com/search?q=" + encodeURIComponent(word);
          window.open(url, "_blank");
        });
        segment.appendChild(span);
      });
    }
  });
});

// Start observing captions
observer.observe(document.body, { childList: true, subtree: true });

