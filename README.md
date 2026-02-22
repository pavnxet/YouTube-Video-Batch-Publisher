# YouTube Video Batch Publisher

A Chrome extension designed to automate the process of publishing multiple draft videos on YouTube Studio. Save time by batch publishing your uploads with a single click.

## Features

- **Batch Publish**: Automatically publish all draft videos visible on your YouTube Studio content page.
- **Visibility Options**: choose between **Public**, **Unlisted**, or **Private** visibility for your videos.
- **"Made for Kids" Setting**: Automatically handles the "Made for Kids" selection (defaults to "No, it's not made for kids").

## Installation

1.  Clone or download this repository to your local machine.
2.  Open Google Chrome and navigate to `chrome://extensions/`.
3.  Enable **Developer mode** in the top right corner.
4.  Click the **Load unpacked** button.
5.  Select the folder containing the extension files (where `manifest.json` is located).
6.  The extension should now appear in your list of installed extensions.

## Usage

1.  Navigate to your [YouTube Studio Content Dashboard](https://studio.youtube.com/).
2.  Ensure you are on the **Content** tab where your video list is displayed.
3.  (Optional) Filter your videos to show only **Drafts**.
4.  Click the **YouTube Video Batch Publisher** icon in your Chrome toolbar.
5.  Select your desired **Visibility** (Public, Unlisted, or Private) from the dropdown menu.
6.  Click the **Publish All Drafts** button.
7.  The extension will iterate through the visible draft videos, set the visibility, and publish them. Please wait for the process to complete. Do not close the tab while the script is running.

## Credits

This project is based on and inspired by [YouTube-Video-Batch-Publisher](https://github.com/pavnxet/YouTube-Video-Batch-Publisher).

## Disclaimer

This extension automates actions on YouTube Studio. Use it responsibly. The authors are not responsible for any unintended actions or account issues.
