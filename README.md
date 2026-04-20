# ClickSaver - Chrome Extension

A simple Chrome extension that copies all open tab URLs from the current window to your clipboard, separated by newline characters.

## Features

- One-click copying of all tab URLs
- Filters out non-http/https URLs (chrome://, chrome-extension://, etc.)
- Shows success/error feedback
- Displays count of copied URLs

## Installation

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable "Developer mode" (toggle in top right)
4. Click "Load unpacked"
5. Select the `clicksaver` folder
6. The extension icon should appear in your Chrome toolbar

## Usage

1. Click the ClickSaver extension icon in the toolbar
2. Click the "Copy All Tab URLs" button
3. All HTTP/HTTPS URLs from open tabs will be copied to your clipboard
4. You can now paste them anywhere (Ctrl+V or Cmd+V)

## How It Works

- Uses the `chrome.tabs` API to query all tabs in the current window
- Filters out non-web URLs (like chrome:// pages)
- Joins URLs with newline characters
- Uses the Clipboard API to copy to your clipboard

## Requirements

- Chrome/Chromium browser
- No special permissions required beyond `tabs` permission

## Notes

- The extension only copies URLs from the current window
- Chrome system pages (chrome://, chrome-extension://, etc.) are automatically filtered out
- Only http:// and https:// URLs are copied
