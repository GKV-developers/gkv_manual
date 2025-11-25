// Add language badge and copy button to code blocks (works with readthedocs theme)
document.addEventListener('DOMContentLoaded', () => {
  // Select code blocks produced by Markdown fences (```bash etc.)
  const codeNodes = document.querySelectorAll('div.highlight pre, pre > code');

  codeNodes.forEach((node) => {
    const pre = node.closest('pre') || node.parentElement;
    if (!pre) return;

    // Wrap <pre> with a positioned container
    const wrapper = document.createElement('div');
    wrapper.className = 'codeblock-wrap';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);

    // Determine language from class "language-xxx"
    const codeEl = pre.querySelector('code') || pre; // fallback
    let lang = '';
    (codeEl.classList || []).forEach((c) => {
      if (c.startsWith('language-')) lang = c.replace('language-', '');
    });
    if (!lang) lang = 'text';

    // Create language badge
    const badge = document.createElement('span');
    badge.className = 'code-lang-badge';
    badge.textContent = lang;
    wrapper.appendChild(badge);

    // Create copy button
    const btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.type = 'button';
    btn.setAttribute('aria-label', 'Copy code');
    // Simple clipboard icon (SVG)
    btn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v16h13c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 18H8V7h11v16z"/>
      </svg>
    `;
    wrapper.appendChild(btn);

    // Copy logic
    btn.addEventListener('click', async () => {
      const text = (codeEl.innerText || codeEl.textContent || '').replace(/\s+$/, '');
      try {
        await navigator.clipboard.writeText(text);
        btn.classList.add('copied');
        btn.setAttribute('aria-label', 'Copied!');
        setTimeout(() => {
          btn.classList.remove('copied');
          btn.setAttribute('aria-label', 'Copy code');
        }, 1400);
      } catch (e) {
        // Fallback if Clipboard API not available
        const ta = document.createElement('textarea');
        ta.value = text;
        ta.style.position = 'fixed';
        ta.style.opacity = '0';
        document.body.appendChild(ta);
        ta.select();
        try { document.execCommand('copy'); } catch {}
        document.body.removeChild(ta);
      }
    });
  });
});
