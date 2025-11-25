(function () {
  const p = location.pathname;
  if (p.endsWith('/print_page.html') || p.endsWith('/print_page')) {
    document.documentElement.classList.add('is-print-page');
  }
})();