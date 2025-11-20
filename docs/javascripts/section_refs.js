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

// Resolve section reference links using numbers from mkdocs-enumerate-headings-plugin
document.addEventListener("DOMContentLoaded", () => {
  // All links that should be converted, e.g. <a class="sec-ref" data-target-id="sec:foo">
  const refs = document.querySelectorAll("a.sec-ref[data-target-id]");

  // for Section 2.`5`
  // count the number of h2 tag between previous h1 tag and current tag.
  // <h1></h1>
  // <h2></h2> tags
  // <h2></h2> current h2 tag
  function countTagsBetweenPrevtagAndCurrent(el, prevTagName, countTagName) {
    const prevTagNameLow = prevTagName.toLowerCase();
    const prevTag = document.evaluate(
      `preceding::${prevTagNameLow}[1]`,
      el,
      null,
      XPathResult.FIRST_ORDERED_NODE_TYPE,
      null
    ).singleNodeValue;
    if (!prevTag) {
      return 0;
    }

    const walker = document.createTreeWalker(
      document.body,
      NodeFilter.SHOW_ELEMENT,
      null
    );

    walker.currentNode = prevTag;

    let count = 0;
    let node = walker.nextNode(); // prevTag の次の要素からスタート

    // counting `countTagName` between prevTag and currentTag.
    const countTagNameUp = countTagName.toUpperCase();
    while (node && node !== el) {
      if (node.tagName === countTagNameUp) {
        count++;
      }
      node = walker.nextNode();
    }

    return count;
  }

  if (isPrintPage()) {
    // This page and appendix pages are the same page.
    refs.forEach(ref => {
      const targetId = ref.dataset.targetId;
      if (!targetId) {
        return;
      }
      const heading = document.querySelector(`[id$="${targetId}"]`);
      if (!heading) {
        return;
      }
      const numSec = findPrevParentSection(heading);
      if (!numSec) {
        return;
      }
      var numberText = numSec.getAttribute("heading-number"); // e.g. "2" or "A.6"
      if (!numberText) {
        return;
      }

      const htags = ["H1", "H2", "H3", "H4", "H5", "H6"];
      const to = htags.indexOf(heading.tagName);
      // count htags[i + 1] tag between previsou htags[i] and current tag.
      for (let i = 0; i < to; ++i) {
        const prevTags = htags[i];
        const searchTag = htags[i + 1];
        let num = countTagsBetweenPrevtagAndCurrent(heading, prevTags, searchTag); // e.g. count `H2` tags between `H1` and current
        if (searchTag === heading.tagName) {
          num += 1; // count tag itself.
        }
        numberText = `${numberText}.${num}`;
      }

      // Use data-prefix if provided; fall back to "Section"
      const prefix = ref.dataset.prefix || "Section";

      // Set visible text, e.g. "Secsion 2.5" or "Appendix A.1"
      ref.textContent = `${prefix} ${numberText}`;
    });
    return;
  }

  // For normal site. (This page and appendix page are not the same page.)

  // Simple in-memory cache to avoid fetching the same page multiple times
  const pageCache = new Map(); // key: page URL without hash, value: parsed HTMLDocument

  function getPageDocument(url) {
    // Strip hash fragment
    const cleanUrl = url.split("#")[0];

    if (pageCache.has(cleanUrl)) {
      return Promise.resolve(pageCache.get(cleanUrl));
    }

    return fetch(cleanUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Failed to fetch ${cleanUrl}: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        pageCache.set(cleanUrl, doc);
        return doc;
      });
  }

  refs.forEach(link => {
    const targetId = link.dataset.targetId;
    const url = link.href;

    if (!targetId || !url) {
      return;
    }

    getPageDocument(url)
      .then(doc => {
        const heading = doc.getElementById(targetId);
        if (!heading) {
          console.warn(`sec-ref: heading with id '${targetId}' not found in ${url}`);
          return;
        }

        // The number is inserted by mkdocs-enumerate-headings-plugin as a span
        const numSpan = heading.querySelector(".enumerate-headings-plugin, .enumerate-headings-plugins");
        if (!numSpan) {
          console.warn(`sec-ref: no heading number span found for '${targetId}' in ${url}`);
          return;
        }

        const numberText = numSpan.textContent.trim();
        if (!numberText) {
          return;
        }

        // Use data-prefix if provided; fall back to "Section"
        const prefix = link.dataset.prefix || "Section";

        // Set visible text, e.g. "Sec. 2.3" or "Appendix A.1"
        link.textContent = `${prefix} ${numberText}`;
      })
      .catch(err => {
        console.error("sec-ref: error resolving link", err);
      });
  });
});
