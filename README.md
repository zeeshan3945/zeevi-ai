# ZeeVi.ai — Company Website

A single-page site for ZeeVi.ai (data annotation + computer vision solutions).
Pure HTML/CSS/JS — no build step, no dependencies.

## Run locally

```bash
cd site
python3 -m http.server 8765
```

Then open http://localhost:8765

> Tip: opening `index.html` directly with `file://` works too, but PDFs and the
> portfolio render most reliably when served over a local server.

## Add a new portfolio document

1. Drop the PDF into the **`portfolio/`** folder.
2. (Optional but recommended) Generate a cover thumbnail from its first page:

   ```bash
   cd site
   ./make-cover.sh portfolio/my-new-project.pdf
   # → creates assets/covers/my-new-project.jpg
   ```

3. Open **`portfolio.js`** and add one block to the `PORTFOLIO` array:

```js
{
  title: "My New Project",
  client: "Client name / domain",
  category: "Image Segmentation",      // or "Object Detection", "Video Annotation"
  summary: "One or two sentences about the work.",
  tags: ["Segmentation", "Drone Imagery"],
  cover: "assets/covers/my-new-project.jpg", // omit to show a 📄 icon instead
  file: "portfolio/my-new-project.pdf", // path to the PDF you added
  accent: "#6366f1",                    // any hex color for the card
}
```

Refresh the page — the new card appears automatically and opens the PDF on click.
`cover` is optional; if you leave it out, the card shows a document icon.

## Update the CV

Replace **`assets/Zeeshan-Khan-CV.pdf`** with a new file of the same name.

## Files

| File           | Purpose                                  |
|----------------|------------------------------------------|
| `index.html`   | Page structure                           |
| `styles.css`   | All styling                              |
| `main.js`      | Interactions + renders the portfolio     |
| `portfolio.js` | **Edit this** to add/remove documents    |
| `portfolio/`   | Your portfolio PDFs                      |
| `assets/`      | CV and other static assets               |

## Deploy

Drag the whole `site/` folder onto **Netlify Drop** (app.netlify.com/drop),
or push to GitHub and enable **GitHub Pages**, or any static host. No config needed.
