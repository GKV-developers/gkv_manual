// docs/javascripts/figures.js

(function () {
  "use strict";

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

  // Wrap <img id="fig:..."> into <div class="figure" id="fig:...">
  // and add a <p class="fig-caption"> with the alt text.
  function wrapImageAsFigure(img) {
    var parent = img.parentNode;
    if (!parent) {
      return null;
    }

    var wrapper = document.createElement("div");
    wrapper.className = "figure";

    // Move id from <img> to wrapper so that #fig:... links hit the wrapper
    var figId = img.id;
    if (figId) {
      wrapper.id = figId;
      img.removeAttribute("id");
    }

    // Insert wrapper before the image and move the image inside the wrapper
    parent.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    // Use alt text as caption body
    var altText = img.getAttribute("alt") || "";
    if (altText) {
      var caption = document.createElement("p");
      caption.className = "fig-caption";
      caption.textContent = altText; // Number will be added later
      wrapper.appendChild(caption);
    }

    return wrapper;
  }

  // Add "Figure X.Y: " prefix for images
  // and "Figure X.Y" label below code figures.
  function numberFigures() {
    var usedChapterNumber = {};
    var counter = 0;

    // Process images and code-figures in document order
    var nodes = document.querySelectorAll('img[id^="fig:"], figure.code-figure');

    nodes.forEach(function (node) {
      var figure = null;

      if (node.matches('img[id^="fig:"]')) {
        // Image case: wrap into .figure and caption
        figure = wrapImageAsFigure(node);
      } else if (node.matches("figure.code-figure")) {
        // Code figure case: use the <figure> itself
        figure = node;

        // If this function runs multiple times (e.g., print_site, etc.),
        // remove old labels to avoid duplicates.
        var oldLabel = figure.querySelector(".code-figure-label");
        if (oldLabel && oldLabel.parentNode) {
          oldLabel.parentNode.removeChild(oldLabel);
        }
      }

      if (!figure) {
        return;
      }

      var chapterLabel = getChapterLabelOfElement(figure); // e.g. "1" or "A"
      if (!usedChapterNumber[chapterLabel]) {
        usedChapterNumber[chapterLabel] = chapterLabel;
        counter = 0;
      }
      counter += 1;

      // Determine figure number (e.g., "1.1", "A.3", or just "1" if no chapter)
      var number;
      if (chapterLabel) {
        number = chapterLabel + "." + counter;
      } else {
        number = String(counter);
      }

      // Store the pure number for references
      figure.setAttribute("data-fig-number", number);

      if (figure.classList.contains("figure")) {
        // Image figure: add "Figure X.Y: <caption>" to fig-caption
        var caption = figure.querySelector(".fig-caption");
        if (caption) {
          var body = caption.textContent || "";
          caption.textContent = "Figure " + number + ": " + body;
        }
      } else if (figure.classList.contains("code-figure")) {
        // Code figure: append a label below the whole figure
        var label = document.createElement("div");
        label.className = "code-figure-label";
        label.textContent = "Figure " + number;
        figure.appendChild(label);
      }
    });
  }

  // Replace text of [1.1](#fig:...){reference-type="ref" reference="fig:..."}
  // with the actual figure number determined above.
  function updateFigureReferences() {
    // Select anchors that correspond to figure references
    var refs = document.querySelectorAll('a[reference-type="ref"][reference^="fig:"]');
    refs.forEach(function (ref) {
      var targetId = ref.getAttribute("reference"); // e.g. "fig:MPI_ranks_communicators_1"
      if (!targetId) {
        return;
      }

      var figure = document.getElementById(targetId);
      if (!figure) {
        return;
      }

      var number = figure.getAttribute("data-fig-number");
      if (!number) {
        return;
      }

      // Replace link text with the figure number (e.g., "1.1")
      ref.textContent = number;
    });
  }

  function onReady(fn) {
    if (document.readyState === "complete" || document.readyState === "interactive") {
      // Call on next tick to ensure DOM is fully built
      setTimeout(fn, 0);
    } else {
      document.addEventListener("DOMContentLoaded", fn);
    }
  }

  onReady(function () {
    numberFigures();
    updateFigureReferences();
  });

})();
