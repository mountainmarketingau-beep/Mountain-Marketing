# Mountain Marketing — static site

A plain HTML/CSS/JS recreation of the Mountain Marketing homepage, ready for free hosting on GitHub Pages.

## Files
- `index.html` — the page
- `styles.css` — all styling
- `script.js` — mobile-friendly form handling (see note below)
- `CNAME` — tells GitHub Pages to serve this at mountainmarketingau.com

## 1. Create the repo
1. Go to https://github.com/new
2. Name it whatever you like (e.g. `mountain-marketing-site`)
3. Keep it **Public** (required for free GitHub Pages), don't initialize with a README
4. Click **Create repository**

## 2. Upload the files
Easiest no-terminal way:
1. On your new repo's page, click **uploading an existing file**
2. Drag in `index.html`, `styles.css`, `script.js`, and `CNAME`
3. Commit the files

(Or, if you're comfortable with git: `git init`, `git add .`, `git commit -m "initial site"`, `git remote add origin <your repo URL>`, `git push -u origin main`)

## 3. Enable GitHub Pages
1. In the repo, go to **Settings → Pages**
2. Under "Build and deployment", set Source to **Deploy from a branch**
3. Branch: `main`, folder: `/ (root)` → Save
4. GitHub will give you a URL like `https://yourusername.github.io/mountain-marketing-site`

## 4. Point mountainmarketingau.com at it (GoDaddy DNS)
In GoDaddy → your domain → DNS, add/edit these records (remove any conflicting default A/CNAME records for @ and www first):

| Type  | Name | Value                  |
|-------|------|------------------------|
| A     | @    | 185.199.108.153        |
| A     | @    | 185.199.109.153        |
| A     | @    | 185.199.110.153        |
| A     | @    | 185.199.111.153        |
| CNAME | www  | yourusername.github.io |

Back in the repo's **Settings → Pages**, enter `mountainmarketingau.com` as the custom domain and save (this confirms the CNAME file). Once DNS propagates (up to 24-48 hrs, often much faster), tick **Enforce HTTPS**.

## Note on the contact form
GitHub Pages only serves static files — there's no server to receive form submissions. Right now the form just shows a success message locally without sending anywhere. To actually receive submissions, sign up for a free plan on a form service like Formspree (formspree.io) or Getform, and point the form at the endpoint they give you. Ask me to wire that up once you've picked one.
