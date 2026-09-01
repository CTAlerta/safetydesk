# SafetyDesk

A free, ad-supported HSE toolkit: Job Hazard Analysis templates, inspection
checklists, and toolbox talks. Built with [Astro](https://astro.build) —
every page is statically generated for search engines, and every tool works
without an account.

This README walks you through launching it for **$0**, step by step.

---

## What's already built

- 12 JHA templates, 10 checklist categories, 11 toolbox talks — all as
  separate, SEO-friendly pages
- Sitemap auto-generated at build time
- 3 ad placement zones (dashboard banner, in-content banner, sticky rail) —
  currently placeholders, ready for AdSense once you're approved
- Fully responsive (works on phone, tablet, desktop)

## What you'll need (all free)

1. A **GitHub account** — github.com/join
2. A **Vercel account** (recommended) or **Netlify account** — sign up
   using your GitHub account, it's one click
3. Node.js installed on your computer, if you want to preview changes
   locally before publishing — nodejs.org (LTS version)

---

## Step 1 — Put the code on GitHub

1. Go to github.com/new and create a new repository named `safetydesk`
   (Public is fine — it doesn't have to be private).
2. On your computer, open a terminal in this project folder and run:

   ```bash
   git init
   git add .
   git commit -m "Initial SafetyDesk site"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/safetydesk.git
   git push -u origin main
   ```

   Replace `YOUR-USERNAME` with your actual GitHub username.

## Step 2 — Deploy to Vercel (free)

1. Go to vercel.com/new and sign in with GitHub.
2. Click **Import** next to your `safetydesk` repository.
3. Vercel will auto-detect Astro — leave the default settings as they are.
4. Click **Deploy**. In about a minute, you'll get a live URL like:

   `https://safetydesk-yourname.vercel.app`

   That's it — your site is live, for free, with HTTPS included.

   *(Netlify works the same way if you prefer it: "Add new site" → "Import
   an existing project" → pick your GitHub repo → deploy.)*

## Step 3 — Update the site URL in the code

Once you have your live URL, open `astro.config.mjs` and change this line:

```js
site: 'https://safetydesk.example.com',
```

to your real URL, e.g.:

```js
site: 'https://safetydesk-yourname.vercel.app',
```

Also update the `Sitemap:` line in `public/robots.txt` to match. Commit and
push the change — Vercel will automatically redeploy:

```bash
git add .
git commit -m "Set real site URL"
git push
```

## Step 4 — Submit to Google (free, and this is what drives traffic)

1. Go to Google Search Console (search.google.com/search-console) and add
   your site (use the URL prefix method with your Vercel URL).
2. Verify ownership — Search Console will give you a meta tag or DNS
   record; the meta tag option is easiest for a Vercel subdomain.
3. Once verified, submit your sitemap: go to **Sitemaps** in the left menu
   and submit `sitemap-index.xml`.
4. Separately, set up Google Analytics (analytics.google.com, free) so you
   can see visitor traffic once it starts coming in.

Indexing isn't instant — expect it to take days to a few weeks before pages
start showing up in search results.

## Step 5 — Apply for Google AdSense (free, once you have some traffic)

1. Go to google.com/adsense and apply with your site URL.
2. AdSense generally wants to see original content and some real traffic
   history before approving a new site — this usually isn't instant.
3. **If you're rejected on a free `.vercel.app` subdomain**, the most
   common fix is buying a cheap custom domain (roughly $10-15/year from
   Namecheap, Cloudflare, or Google Domains) and pointing it at your Vercel
   project (Vercel has a free built-in flow for connecting custom domains).
   This alone often resolves an AdSense rejection.
4. Once approved, replace the placeholder `<div class="adslot">` markup in
   `src/components/AdSlot.astro` with the `<ins>` ad unit code AdSense gives
   you.

---

## Making changes after launch

To preview changes locally before publishing:

```bash
npm install
npm run dev
```

This starts a local server (usually `http://localhost:4321`) where you can
see your changes live. When you're happy with them:

```bash
git add .
git commit -m "Describe what you changed"
git push
```

Vercel automatically redeploys every time you push to GitHub — no manual
redeploy step needed.

## Where the content lives

All the actual template/checklist/talk content is in plain data files, not
mixed into page layout code, so you can add new content without touching
any design or logic:

- `src/data/jha.ts` — JHA templates
- `src/data/checklists.ts` — inspection checklist categories
- `src/data/toolboxTalks.ts` — toolbox talk scripts

To add a new item, copy an existing entry in the array and edit it — a new
page is generated automatically at build time, no extra routing code needed.

## Project structure

```
src/
  components/AdSlot.astro     — the ad placeholder, swap for real ad code later
  layouts/Layout.astro        — shared page shell (sidebar nav, SEO tags)
  data/                       — all content (see above)
  pages/
    index.astro                — homepage/dashboard
    jha/index.astro            — JHA list
    jha/[slug].astro           — JHA detail page template
    checklist/index.astro      — checklist list
    checklist/[slug].astro     — checklist detail page template
    toolbox-talks/index.astro  — talks list
    toolbox-talks/[slug].astro — talk detail page template
  styles/global.css            — design tokens and all styling
```
