// Show preview of URLs when popup loads
window.addEventListener('load', async () => {
  const tabs = await chrome.tabs.query({ currentWindow: true });
  const validUrls = tabs.filter(t => t.url && (t.url.startsWith('http://') || t.url.startsWith('https://')));
  const count = document.getElementById('count');
  count.textContent = `Ready to copy ${validUrls.length} link${validUrls.length !== 1 ? 's' : ''}`;
});

document.getElementById('copyBtn').addEventListener('click', async () => {
  const button = document.getElementById('copyBtn');
  const status = document.getElementById('status');

  button.disabled = true;
  status.className = '';
  status.textContent = '';

  try {
    // Get all tabs in the current window
    const tabs = await chrome.tabs.query({ currentWindow: true });

    // Extract URLs and filter out chrome:// and other non-http(s) URLs
    const urls = tabs
      .map(tab => tab.url)
      .filter(url => url && (url.startsWith('http://') || url.startsWith('https://')))
      .join('\n');

    if (urls.length === 0) {
      status.className = 'error';
      status.textContent = 'No valid URLs found';
      button.disabled = false;
      return;
    }

    // Copy to clipboard
    await navigator.clipboard.writeText(urls);

    status.className = 'success';
    status.textContent = 'Copied to clipboard!';
  } catch (error) {
    status.className = 'error';
    status.textContent = `Error: ${error.message}`;
  } finally {
    button.disabled = false;
  }
});
