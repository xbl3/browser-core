import { registerContentScript, CHROME_MSG_SOURCE } from '../core/content/helpers';

registerContentScript('https://cliqz.com/search?q=*', (window, chrome, windowId) => {
  const URLSearchParams = window.URLSearchParams;
  const searchParams = new URLSearchParams(window.location.search);
  const queries = searchParams.getAll('q');
  const query = queries[queries.length - 1];

  function queryCliqz(q) {
    chrome.runtime.sendMessage({
      source: CHROME_MSG_SOURCE,
      windowId,
      payload: {
        module: 'core',
        action: 'queryCliqz',
        args: [
          decodeURIComponent(q)
        ],
      },
    });
  }

  if (!query) {
    return;
  }

  queryCliqz(query);

  window.document.addEventListener('DOMContentLoaded', () => {
    const content = window.document.querySelector('.post-content');
    if (content) {
      content.innerHTML = '';

      const rowContainer = window.document.createElement('div');
      rowContainer.classList.add('row-container');

      const row = window.document.createElement('div');
      row.classList.add('row');
      row.classList.add('limit-width');
      row.classList.add('row-parent');
      rowContainer.appendChild(row);

      const p = window.document.createElement('p');
      // TODO: need translations
      p.innerText = 'Search Cliqz for: ';
      row.appendChild(p);

      const anchor = window.document.createElement('a');
      anchor.innerText = query;
      anchor.classList.add('btn');
      anchor.addEventListener('click', queryCliqz.bind(null, query));
      p.appendChild(anchor);

      content.appendChild(rowContainer);
    }
  });
});
