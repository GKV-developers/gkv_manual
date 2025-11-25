// Extract chapter prefix from the H1 number injected by enumerate-headings.
// e.g. "1" or "A1". Make it available to MathJax and other scripts.
document.addEventListener('DOMContentLoaded', () => {
  const h1NumSpan = document.querySelector('h1 .enumerate-headings-plugin');
  const prefix = h1NumSpan ? h1NumSpan.textContent.trim() : '';
  // e.g., "1", "2", ..., "A1", "A2"
  window.MJX_CHAPTER_PREFIX = prefix;
});
