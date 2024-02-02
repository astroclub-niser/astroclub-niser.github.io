<img align="right" src="/public/logos/nac_logo_dark_circle.png" width=150>

# The Official Website of NAC
Made with [Next.js](https://nextjs.org/). Currently hosted [here](https://astroclub-niser.github.io/).

## Running the site locally

First, clone this repository, then run the development server:

```bash
npm install # install node_modules if not done already
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. Remove the `output: "export"` line in the `next.config.js` before running locally. Edit the files as you like.

## To add/update data

* Go to the `data/` folder and update the corresponding `.json` files to add/update events, astrophotographs or talks.
* All club photos are arranged year-wise in the folder in the `public/photos/<year>` directory.
* To add a new post corresponding to an event or project, add the markdown file to the `_posts/` directory; the filename will be the page URL. Add the file name to the corresponding field in the `projects.json` or `events.json` file.
