# Oak Grove School District Summer Camps 2026

This is the official website for Oak Grove School District's summer camps program, built with React and hosted on GitHub Pages.

## Quick Links

- **Live Site**: https://oakgrove-school.github.io/summer-camps
- **GitHub Repo**: https://github.com/oakgrove-school/summer-camps
- **Embedded in**: SchoolSites (via iframe)

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher) - [Download here](https://nodejs.org/)
- Git - [Download here](https://git-scm.com/)
- GitHub account (personal or organization)

### Initial Setup (One Time)

1. **Clone the repository**
   ```bash
   git clone https://github.com/oakgrove-school/summer-camps.git
   cd summer-camps
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Test locally**
   ```bash
   npm start
   ```
   This opens the site at `http://localhost:3000`

## Making Changes

### Edit Camp Information

All camp data is in `src/App.js`. Find the `camps` array and update:
- Camp name, emoji, grades, dates, times
- Instructor names
- Descriptions and vibes

### Edit Text Content

- **Header tagline**: Line 94 in `src/App.js`
- **Section titles**: Search for `<h2>` tags
- **Footer text**: Bottom of `src/App.js`

### Edit Colors

Colors use Oak Grove's official school palette:
- **Blue** (#003366, #0052A3) — Headers, buttons, accents
- **Gold** (#FFB81C) — Secondary accents
- **Cream** (#FFF8F0) — Background

To change colors, search for hex codes in `src/App.js` and `src/index.css`.

## Deploying Changes

### Simple Workflow (Recommended)

```bash
# 1. Make your changes in files
# 2. Save files

# 3. Stage changes
git add .

# 4. Commit with a message
git commit -m "Update camp descriptions for June"

# 5. Push to GitHub
git push origin main

# 6. Deploy to GitHub Pages
npm run deploy
```

The site updates automatically after a few seconds!

### What the Deploy Script Does

```bash
npm run deploy
```

This command:
1. Builds the React app (`npm run build`)
2. Pushes the built files to the `gh-pages` branch
3. GitHub Pages automatically serves the new version

## File Structure

```
summer-camps/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── App.js              # React component (main code)
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies & scripts
├── .gitignore              # Files to ignore in Git
└── README.md               # This file
```

## Embedding in SchoolSites

Use this iframe code to embed the site in SchoolSites:

```html
<iframe 
  src="https://oakgrove-school.github.io/summer-camps" 
  style="width:100%;height:800px;border:none;border-radius:8px;"
  title="Oak Grove Summer Camps 2026">
</iframe>
```

Adjust the `height` as needed for your page layout.

## Common Tasks

### Update a Camp's Information
1. Open `src/App.js`
2. Find the camp in the `camps` array (line ~30)
3. Edit the details
4. Save and deploy:
   ```bash
   git add src/App.js
   git commit -m "Update [Camp Name] details"
   git push origin main
   npm run deploy
   ```

### Add a New Camp
1. Open `src/App.js`
2. Find the `camps` array
3. Add a new object:
   ```javascript
   {
     id: 12,
     name: "New Camp Name",
     emoji: "🎪",
     grades: "K–3rd",
     dates: "June 15–18",
     times: "9:00–12:00 p.m.",
     instructor: "Instructor Name",
     description: "Camp description here.",
     vibe: "Theme or vibe"
   },
   ```
4. Save and deploy

### Change School Colors
Search for these hex colors in `src/App.js`:
- `#003366` (dark blue)
- `#0052A3` (medium blue)
- `#FFB81C` (gold)
- `#FFF8F0` (cream)

Replace with new colors and deploy.

## Troubleshooting

### "npm not found"
- Node.js isn't installed. [Download and install it](https://nodejs.org/)

### Changes not showing after deploy
- Wait 1-2 minutes for GitHub Pages to rebuild
- Hard refresh your browser (Ctrl+Shift+R on Windows/Linux, Cmd+Shift+R on Mac)
- Check that `npm run deploy` completed successfully

### Git commands not working
- Make sure Git is installed
- Check that you're in the project directory (`cd summer-camps`)

### "404 Not Found" after deploy
- Check that `homepage` in `package.json` matches your repo name
- Visit: `https://oakgrove-school.github.io/summer-camps`

## GitHub Pages Settings

Your repo should be configured:

1. Go to **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** (should be selected automatically)
4. Folder: **/ (root)**
5. Click **Save**

The site should be live in a few moments.

## Questions?

- For React help: [React Docs](https://react.dev)
- For GitHub Pages: [GitHub Pages Guide](https://pages.github.com/)
- For this project: Check the code comments in `src/App.js`

---

**Built with:** React, Tailwind CSS, Lucide Icons

**Maintained by:** Oak Grove School District
