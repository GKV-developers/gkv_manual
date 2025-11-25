// docs/javascripts/bibliography.js

(function () {

  // --- Detect whether we are on the combined print-site page ---
  function isPrintPage() {
    const html = document.documentElement;
    // Option 1: dedicated class on <html>
    if (html && html.classList && html.classList.contains('is-print-page')) {
      return true;
    }
    // Option 2: root container element for print page
    if (document.getElementById('print-site-page')) return true;
    // Option 3: URL check (default when using mkdocs-print-site-plugin)
    if (location.pathname.indexOf('print_page') !== -1) return true;
    return false;
  }

  // find previous parent section tag in print-site.
  // visit parent and visit parent and ...
  function findPrevParentSection(el) {
    if (!el) return null;
    var pn = el.parentNode;
    while (pn) {
      if (pn?.matches('section')) {
        break;
      }
      pn = pn.parentNode;
    }
    return pn;
  }

  // find previous h1 tag in normal site.
  function findPrevH1(el) {
    const res = document.evaluate(
      'preceding::h1[1]', // previous h1
      el,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    );
    return res.singleNodeValue; // if nothing, return null
  }

  // Get chapter label (e.g., "1", "2", "A", "B")
  // we can estimate the chapter number by `findPrevH1` (normal site) or `findPrevParentSection` (print-site).
  function getChapterLabelOfElement(el) {
    var chapterNumber;
    // explore current chapter number.
    if (isPrintPage()) {
      // check parent section tag.
      var numSec = findPrevParentSection(el);
      if (!numSec) {
        return "";
      }
      const rawNumber = numSec.getAttribute("heading-number"); // e.g. "2" or "2.3"
      chapterNumber = rawNumber.split(".")[0];
    } else {
      // check previous h1 tag and span
      var prevh1 = findPrevH1(el);
      var numSpan = prevh1.querySelector(".enumerate-headings-plugin");
      if (!numSpan) {
        return "";
      }
      const rawNumber = numSpan.textContent.trim(); // e.g. "2" or "2.3"
      chapterNumber = rawNumber.split(".")[0];
    }
    if (!chapterNumber) {
      return "";
    }
    return chapterNumber;
  }

  // Main function to renumber bibliography and citations on the current page
  function renumberBibliography() {

    // Build a map from bib-key to local index within this page
    var bibItems = document.querySelectorAll(".thebibliography .bibitem");
    var bibIndex = {};
    var bibChapter = {};
    var usedChapterNumber = {};
    var counter = 1;

    // calculate chapter numbers for each bibItems.
    // we can estimate the chapter number by `findPrevH1` (normal site) or `findPrevParentSection` (print-site).
    bibItems.forEach(function (item) {
      var key = item.getAttribute("data-bib-key");
      if (!key) {
        return;
      }


      var chapterNumber = getChapterLabelOfElement(item); // e.g. "1" or "A"
      if (!chapterNumber) {
        return;
      }

      if (!usedChapterNumber[chapterNumber]) {
        usedChapterNumber[chapterNumber] = chapterNumber;
        counter = 1;
      }
      // Assign index only once per key
      if (!bibIndex[key]) {
          bibIndex[key] = counter++;
          bibChapter[key] = chapterNumber;
      }

      var label = "[" + bibChapter[key] + "-" + bibIndex[key] + "]";

      // Prepend label if we have not done so yet
      if (item.getAttribute("data-bib-labeled") !== "true") {
        item.insertAdjacentText("afterbegin", label + " ");
        item.setAttribute("data-bib-labeled", "true");
      }
    });

    // Update inline citations
    var cites = document.querySelectorAll(".bib-ref[data-bib-key]");
    cites.forEach(function (cite) {
      var key = cite.getAttribute("data-bib-key");
      if (!key) {
        return;
      }

      var idx = bibIndex[key];
      var chapterNumber = bibChapter[key];
      if (!idx) {
        // No corresponding bibliography item found
        return;
      }

      var label = "[" + chapterNumber + "-" + idx + "]";
      // Replace link text with the label
      cite.textContent = label;
    });
  }

  // Support Material for MkDocs' instant navigation (document$ global)
  if (typeof document$ !== "undefined") {
    document$.subscribe(function () {
      renumberBibliography();
    });
  } else {
    document.addEventListener("DOMContentLoaded", renumberBibliography);
  }
})();
