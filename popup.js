document.getElementById('copyBtn').addEventListener('click', async () => {
  const button = document.getElementById('copyBtn');
  const status = document.getElementById('status');
  const count = document.getElementById('count');

  button.disabled = true;
  status.className = '';
  status.textContent = '';
  count.textContent = '';

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
    status.textContent = '✓ Copied to clipboard!';
    count.textContent = `${tabs.filter(t => t.url && (t.url.startsWith('http://') || t.url.startsWith('https://'))).length} URLs`;
  } catch (error) {
    status.className = 'error';
    status.textContent = `Error: ${error.message}`;
  } finally {
    button.disabled = false;
  }
});
