# Firestarter

Small Firefox config to disable most of the junk and slightly improve privacy and user experience

This is a very minimal config, so it should be compatible with all modern Firefox versions and is unlikely to get broken by updates.

😌 **Want to achieve true peace of mind?**

Consider using [Zen Browser](https://zen-browser.app/) instead to save yourself headaches.
All updates will be free from the junk, regardless of what Mozilla decides next.

## Tweaks

### Privacy

- Disable telemetry and data collection
- Disable experiments
- Disable some APIs used for tracking/fingerprinting (that don't break websites or functionality)

### Decluttering/debloating

- Disable AI features
- Disable Mozilla self-promo (Mozilla VPN)
- Disable ads (Firefox Suggest, sponsored links)
- Disable first-run popups

### UI

- Hide the tab close button and show it on hover
  - You can enable always showing the close button on active tabs
- Remove the left side separator on the tab bar

### Extras

- Enable more natural smooth scrolling
- Show full URLs in the address bar
- Enable smoother font rendering on Windows

## Screenshots

### Before

<img width="560" height="44" alt="firefox_xgWPOO9tHD" src="https://github.com/user-attachments/assets/0586349d-0c02-4673-b368-b7c85207d7cd" />

### After

<img width="560" height="45" alt="firefox_p3jwjHXCM4" src="https://github.com/user-attachments/assets/0017a464-4412-4470-87f4-56322bb2fbe4" />

## Installing

> [!WARNING]
> Install this config right after a fresh Firefox installation or after creating a new profile.
> Installing on a profile already in use can cause issues. Use at your own risk.

1. Download this repository
2. Go to `about:support`
3. Click on the _open profile folder_ button
4. Close Firefox completely
5. Copy the `chrome` folder and the `user.js` file from this repository to the profile folder you just opened
6. Restart Firefox

## What's Next?

I recommend installing some extensions to enhance your browsing experience:

- [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/) - Block ads and trackers
- [Dark Reader](https://addons.mozilla.org/en-US/firefox/addon/darkreader/) - Dark mode for websites
- [Bitwarden](https://addons.mozilla.org/en-US/firefox/addon/bitwarden-password-manager/) - Better password manager (multiplatform)
- [FastForward](https://addons.mozilla.org/en-US/firefox/addon/fastforwardteam/) - Skip annoying URL shorteners
- [behind!](https://addons.mozilla.org/en-US/firefox/addon/behind/) - Reveal images hidden in the background of websites
- [Image Search Options](https://addons.mozilla.org/en-US/firefox/addon/image-search-options/) - Add options for reverse image search
- [SponsorBlock](https://addons.mozilla.org/en-US/firefox/addon/sponsorblock/) - Skip sponsored segments on YouTube
- [Return YouTube Dislike](https://addons.mozilla.org/en-US/firefox/addon/return-youtube-dislikes/) - Bring back dislikes on YouTube
- [YouTube Row Fixer](https://addons.mozilla.org/en-US/firefox/addon/youtube-row-fixer-extension/) - Make homepage less claustrophobic
- [YouTube No Translation](https://addons.mozilla.org/en-US/firefox/addon/youtube-no-translation/) - Turn off AI auto-dubbing and auto-translations
- [Minimal Theme for Twitter](https://addons.mozilla.org/en-US/firefox/addon/minimaltwitter/) - Remove clutter

## Acknowledgements

- [Soft-Bred and Brave-Fox](https://github.com/Soft-Bred/Brave-Fox) for [this cool document about styling Firefox](https://brave-fox.notion.site/Overflow-Files-adf332802aab4dcf98785f9b7307ea5f)
- [r/FirefoxCSS](https://www.reddit.com/r/FirefoxCSS) community
- [Disable AI in Firefox article](https://flamedfury.com/posts/disable-ai-in-firefox/) by FlamedFury
