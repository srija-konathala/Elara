# Elara Landing Page

A simple, visual landing page for Elara: clinical trial recruitment and retention at Georgia Tech.

## Run locally

From **this** folder (the one that contains this README and `package.json`):

```bash
npm install
npm run dev
```

In the terminal, Vite will print something like:

```
➜  Local:   http://localhost:5173/
```

**Open that exact URL in your browser:** [http://localhost:5173](http://localhost:5173)

## Making sure you're on the right site

- **Correct project folder:**  
  `New Elara` (the folder with this README, `src/App.jsx`, and `package.json`).  
  If you have another folder named "Elara" or "elara" elsewhere, that may be a different project.

- **Correct URL:**  
  Use **http://localhost:5173** (port **5173**).  
  If you use a different port (e.g. 3000, 5174), you may be viewing a different app.

- **You should see:**  
  The hero headline **"Clinical trial recruitment and retention made easy"** and the line **"at Georgia Tech"** under it.  
  If you still see "Retention first recruitment for underrepresented clinical trial participants", you're on an old build or a different site.

- **Hard refresh:**  
  **Mac:** `Cmd + Shift + R`  
  **Windows/Linux:** `Ctrl + Shift + R`  
  Or open the site in an incognito/private window to avoid cache.

- **Only one dev server:**  
  If you run `npm run dev` in more than one project, each uses a different port. Close other terminals or stop other servers, then run `npm run dev` only in this **New Elara** folder and use the URL it prints (usually 5173).

## Build

```bash
npm run build
```

Output is in `dist/`.

## Stack

- React 18 + Vite
- Tailwind CSS
- Lucide React (icons)
- Nunito (Google Fonts)
