# ClickSaver - Chrome Extension

A lightweight Chrome extension that instantly copies all open tab URLs from the current window to your clipboard, separated by newline characters. Perfect for saving, sharing, or organizing your browsing sessions.

## ✨ Features

- **One-Click Copy** — Copy all tab URLs with a single click
- **Smart Filtering** — Automatically filters out non-web URLs (chrome://, extensions, etc.)
- **Link Preview** — See how many links will be copied before you click
- **Instant Feedback** — Clear success/error messages
- **Lightweight** — Minimal permissions, no tracking, no data collection

## 📦 Installation

### Option 1: Load from Source (For Development)

1. **Clone or Download** this repository:
   ```bash
   git clone https://github.com/victor-torres/clicksaver.git
   cd clicksaver
   ```

2. **Open Chrome Extensions**:
   - Go to `chrome://extensions/` in your Chrome address bar
   - Or: Menu → More tools → Extensions

3. **Enable Developer Mode**:
   - Toggle the **"Developer mode"** switch in the top right corner

4. **Load the Extension**:
   - Click **"Load unpacked"**
   - Select the `clicksaver` folder you cloned
   - The extension icon should now appear in your Chrome toolbar

### Option 2: Install from Chrome Web Store (Coming Soon)
The extension will be available on the Chrome Web Store soon for one-click installation.

## 🚀 Usage

1. **Open multiple tabs** in Chrome
2. **Click the ClickSaver icon** in your toolbar (top right)
3. **Click "Copy All Tab URLs"** button
4. See the preview showing how many links will be copied
5. **Paste anywhere** — use Ctrl+V (Windows/Linux) or Cmd+V (Mac)

### Example Output
```
https://github.com/victor-torres/clicksaver
https://www.google.com
https://stackoverflow.com
https://developer.chrome.com
```

## 🔒 Privacy & Permissions

- **Zero data collection** — No tracking, analytics, or external requests
- **Minimal permissions** — Only uses the `tabs` permission to read tab URLs
- **No login required** — Completely offline and private
- **Local clipboard only** — URLs never leave your device

## 🛠️ How It Works

The extension uses the Chrome `tabs` API to:
1. Query all tabs open in the current window
2. Extract their URLs
3. Filter out non-HTTP/HTTPS URLs (chrome pages, extensions, etc.)
4. Join them with newline characters
5. Copy to your clipboard using the modern Clipboard API

## 📋 Requirements

- **Chrome/Chromium** browser (version 88+)
- **Developer mode enabled** for loading unpacked extensions (if installing from source)

## 🤝 Contributing

Found a bug or have a feature idea? Contributions are welcome!

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the MIT License.

## 💡 Tips & Tricks

- **Organize tabs** — Copy all URLs, open a text editor, and organize them
- **Share sessions** — Quickly share what you're working on with teammates
- **Archive research** — Save all your research links for later reference
- **Bulk bookmarking** — Copy links and import them to your bookmark manager

## 🐛 Troubleshooting

### Extension won't load?
- Make sure Developer mode is enabled (`chrome://extensions/`)
- Check that you selected the correct folder
- Try refreshing the extension page

### "No valid URLs found" error?
- You may have only chrome:// or extension pages open
- Open at least one regular website (http/https)

### Copy button is disabled?
- Reload the extension: Go to `chrome://extensions/` and click the refresh icon next to ClickSaver

## 📧 Support

For issues, questions, or suggestions, please open an [issue on GitHub](https://github.com/victor-torres/clicksaver/issues).

---

**Made with ❤️ for productivity**
