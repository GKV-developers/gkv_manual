// docs/javascripts/mathjax.js
(function () {
  // ------------------------------------------------------------
  // Utilities
  // ------------------------------------------------------------
  function sanitizePrefix(p) {
    return (p || '').toString().trim().replace(/[.\s]+$/, '');
  }

  // Convert appendix numbers to letters: 1 -> A, 2 -> B, ...
  function numberToLetter(n) {
    let x = parseInt(n, 10), s = '';
    if (!isFinite(x) || x <= 0) return '';
    while (x > 0) {
      x--;
      s = String.fromCharCode(65 + (x % 26)) + s;
      x = Math.floor(x / 26);
    }
    return s;
  }

  // ------------------------------------------------------------
  // Detect chapter prefix on normal (non-print) pages
  // ------------------------------------------------------------
  function detectChapterPrefix() {
    const h1 = document.querySelector('h1');
    if (h1) {
      const span = h1.querySelector('.enumerate-headings-plugin');
      if (span) {
        const t = sanitizePrefix(span.textContent || ''); // "A", "B", "1", etc.
        if (/^[A-Z]+$/.test(t)) return t;       // A, B, ...
        if (/^\d+$/.test(t)) return t;          // 1, 2, ...
      }
      const raw = sanitizePrefix(h1.textContent || '');
      const m = raw.match(/^([A-Z]+|\d+)(?:[.\s]+)/); // "A Title", "1. Title", "1 Title"
      if (m) return m[1];
    }

    // Fallback for appendix pages in normal single-page view
    if (location.pathname.includes('/appendix/')) {
      const h2span = document.querySelector('h2 .enumerate-headings-plugin');
      if (h2span) {
        const first = (h2span.textContent || '').trim().split('.')[0];
        if (/^\d+$/.test(first)) return numberToLetter(first);
      }
      return 'A';
    }

    // Default chapter prefix if nothing else is found
    return '1';
  }

  function detectAndStorePrefix() {
    const p = detectChapterPrefix();
    window.__chapterPrefix = p;
    // Also expose to other scripts (e.g., table-numbering.js)
    window.MJX_CHAPTER_PREFIX = p;
    return p;
  }

  function currentPrefix() {
    return (window.__chapterPrefix || detectAndStorePrefix()).trim();
  }

  // ------------------------------------------------------------
  // Detect whether we are on the combined print-site page
  // ------------------------------------------------------------
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

  // ------------------------------------------------------------
  // On print-site: renumber equations per section[heading-number]
  // (this adjusts the labels next to the equations themselves)
  // ------------------------------------------------------------
  function renumberEquationsBySection() {
    if (!isPrintPage()) return;

    // Sections injected by the print-site plugin
    const sections = document.querySelectorAll('section.print-page[heading-number]');
    if (!sections.length) return;

    sections.forEach((section) => {
      const rawPrefix = section.getAttribute('heading-number') || '';
      const cleaned = sanitizePrefix(rawPrefix);
      if (!cleaned) return;

      // For appendix pages we often get "A.1", "A.2", ..., "A.6".
      // We only want the part before the first dot ("A" or "2").
      const prefix = cleaned.split('.')[0];  // "2.3" -> "2", "A.6" -> "A"
      if (!prefix) return;

      // Find labels of display equations inside this section.
      //
      // MathJax v3 (print_page) structure example:
      //
      // <mjx-labels>
      //   <mjx-itable>
      //     <mjx-mtr>
      //       <mjx-mtd id="mjx-eqn:1.21">
      //         <mjx-mtext>(1.21)</mjx-mtext>
      //
      const labelNodes = section.querySelectorAll(
        'mjx-labels mjx-mtd[id^="mjx-eqn:"] > mjx-mtext'
      );

      if (!labelNodes.length) return;

      let localIndex = 0;
      labelNodes.forEach((mtext) => {
        localIndex += 1;
        const newText = `(${prefix}.${localIndex})`;
        mtext.textContent = newText;
      });

      // At this point only the equation labels (next to the equations)
      // are updated for this section.
      // Inline \eqref text is fixed separately by syncEqrefsWithLabels().
    });
  }

  // ------------------------------------------------------------
  // On print-site: sync \eqref outputs with the (already corrected) labels
  //
  // Idea:
  //   - \eqref usually becomes an <a> element whose href points to the
  //     MathJax equation id, such as:
  //       <a href="mjx-eqn%3Aeq%3Agyrokinetic_ordering"> ... </a>
  //   - The corresponding equation label is rendered inside:
  //       <mjx-mtd id="mjx-eqn:eq:gyrokinetic_ordering"> <mjx-mtext>(2.1)</mjx-mtext> ...
  //   - We:
  //       1. Decode the href to get the target id.
  //       2. Find the label node for that id.
  //       3. Copy the label text (e.g. "(2.1)") into the <a> element.
  // ------------------------------------------------------------
  function syncEqrefsWithLabels() {
    if (!isPrintPage()) return;

    const anchors = document.querySelectorAll('a[href*="mjx-eqn"]');
    if (!anchors.length) return;

    anchors.forEach((a) => {
      const rawHref = a.getAttribute('href');
      if (!rawHref) return;

      // Remove a leading "#" if present
      let h = rawHref.replace(/^#/, '');
      let targetId;
      try {
        // href is often URL-encoded, e.g. "mjx-eqn%3Aeq%3Agyrokinetic_ordering"
        targetId = decodeURIComponent(h);
      } catch (e) {
        // If decoding fails, just use the raw string
        targetId = h;
      }

      if (!targetId) return;

      const target = document.getElementById(targetId);
      if (!target) return;

      // Find the equation label text, usually inside <mjx-mtext>(2.1)</mjx-mtext>
      const labelNode = target.querySelector('mjx-mtext') || target;
      const labelText = (labelNode.textContent || '').trim();
      if (!labelText) return;

      // Replace the content of the <a> with the label text.
      // This may discard some extra MathJax markup,
      // but ensures that the visible number matches the equation label.
      a.textContent = labelText;
    });
  }

  // ------------------------------------------------------------
  // MathJax configuration
  // ------------------------------------------------------------
  window.MathJax = {
    loader: { load: ['[tex]/ams', '[tex]/boldsymbol', '[tex]/tagformat'] },
    tex: {
      packages: { '[+]': ['ams', 'boldsymbol', 'tagformat'] },
      inlineMath: [['\\(', '\\)'], ['$', '$']],
      displayMath: [['\\[', '\\]'], ['$$', '$$']],
      processEscapes: true,
      processEnvironments: true,
      tags: 'ams',
      tagformat: {
        // Normal pages:
        //   number(3) => "(1.3)", "(A.2)", etc., based on currentPrefix().
        //
        // On print_page:
        //   - MathJax first assigns numbers normally, typically "(1.n)".
        //   - Then renumberEquationsBySection() overwrites labels per section
        //     (e.g., "(2.1)", "(2.2)", ...).
        //   - Finally syncEqrefsWithLabels() copies those corrected labels
        //     into any \eqref anchors.
        number: (n) => {
          const p = sanitizePrefix(currentPrefix());
          const nn = String(n).replace(/^\.+/, '');
          return p ? `${p}.${nn}` : `${nn}`;
        }
      },
      macros: {
        bm: ['\\boldsymbol{#1}', 1],
      }
    },
    options: {
      ignoreHtmlClass: '.*|',
      processHtmlClass: 'arithmatex'
    },
    startup: {
      ready: () => {
        // Detect initial chapter prefix when MathJax starts
        detectAndStorePrefix();
        MathJax.startup.defaultReady();
      }
    }
  };

  // ------------------------------------------------------------
  // Retypeset + print-site post-processing
  // ------------------------------------------------------------
  async function retypeset() {
    detectAndStorePrefix();
    try { MathJax.startup?.output?.clearCache?.(); } catch (_) {}
    try { MathJax.typesetClear(); } catch (_) {}
    try { MathJax.texReset(); } catch (_) {}
    try {
      await MathJax.typesetPromise();
      // On print-site, adjust equation labels by section prefix
      renumberEquationsBySection();
      // Then make \eqref outputs match the (already fixed) labels
      syncEqrefsWithLabels();
    } catch (e) {
      console.error('MathJax typeset error:', e);
    }
  }

  // Initial load
  window.addEventListener('load', () => {
    retypeset();
  });

  // Hook into mkdocs-material SPA navigation (document$ is provided by mkdocs-material)
  if (window.document$ && typeof window.document$.subscribe === 'function') {
    window.document$.subscribe(() => {
      setTimeout(retypeset, 0);
    });
  }
})();
