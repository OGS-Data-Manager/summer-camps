# Embedding in SchoolSites

This document explains how to embed the Summer Camps website in your SchoolSites CMS.

## Quick Copy-Paste

1. Go to your SchoolSites page where you want the camps to appear
2. Add an **HTML Block** or **Custom HTML** widget
3. Paste this code:

```html
<iframe 
  src="https://oakgrove-school.github.io/summer-camps" 
  style="width:100%;height:1000px;border:none;border-radius:8px;"
  title="Oak Grove Summer Camps 2026">
</iframe>
```

4. Save

That's it! The camps website will display in that iframe.

## Customizing the Iframe

### Height
The `height:1000px` controls how much space the iframe takes. Adjust as needed:
- **800px** - Compact, user scrolls more
- **1000px** - Standard, good balance
- **1200px** - Large, less scrolling needed

### Width
`width:100%` makes it full-width. You can also use:
- `width:800px` - Fixed width
- `width:90%` - Slightly narrower with margins

### Example: Narrower & Shorter
```html
<iframe 
  src="https://oakgrove-school.github.io/summer-camps" 
  style="width:90%;height:800px;border:none;border-radius:8px;margin:20px auto;display:block;"
  title="Oak Grove Summer Camps 2026">
</iframe>
```

## Mobile Considerations

The camps website is **fully responsive** — it works great on phones, tablets, and desktops. The iframe will automatically adapt to different screen sizes.

## If the Iframe Doesn't Show

1. **Check the URL**: Make sure it's exactly:
   ```
   https://oakgrove-school.github.io/summer-camps
   ```

2. **Wait for deployment**: After updates, give GitHub Pages 1-2 minutes to rebuild

3. **Refresh your page**: Hard refresh (Cmd+Shift+R or Ctrl+Shift+R)

4. **Check SchoolSites permissions**: Some HTML might be blocked by SchoolSites security

## Updates to the Camps

When you update camp information in the GitHub repo, those changes appear automatically in the iframe. No need to change the SchoolSites HTML!

1. Update camps in the repo
2. Run `npm run deploy`
3. Wait 1-2 minutes
4. The iframe refreshes automatically

## Alternative: Direct Link

If iframes don't work in SchoolSites, you can link to the site directly:

```html
<a href="https://oakgrove-school.github.io/summer-camps" target="_blank">
  View Summer Camps →
</a>
```

This opens the site in a new tab/window.

---

**Questions?** Check the main README.md for more detailed instructions.
