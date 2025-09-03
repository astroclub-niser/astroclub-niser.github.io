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

* Go to the `data/` folder and update the corresponding `.json` files to add/update events, astrophotographs, team info, magazine issues or talks. Strictly follow the structure of the previous entries.
* A detailed structure of the `public/` folder where all the external resources like pictures, documents etc. are stored.
```
public
│
└───astrophotographs (≤ 1080p versions of all the astrophotographs)
└───kshitij          (cover page of all kshitij editions)
└───logos            (all versions of the NAC logo)
└───posts            
│   └───project1     (contains images/docs used in a markdown post)
│   └───project2
└───photos           (all club photos organized by year)            
│   └───2025
│   └───2024
│   └───[...]
└───talks            (talk posters)   
└───team             (team members' headshots)
```
* Make sure that all the date formats follow the existing data within a `.json` data file, so that it is parsed accurately.

## How to add a new post

* To add a new post corresponding to an event or experiment, add the markdown file to the `_posts/` directory; the filename will be the page URL. 
* Add the file name to the corresponding field in the `projects.json` or `events.json` file, in the "*link*" or "*eventLink*" column respectively.
* In the `<post-name>.md` file, make sure that the first 5 lines are:
```
---
title: "YOUR TITLE"
date: YYYY-MM-DD
author: "AUTHOR1, AUTHOR2, ..."
---
```
* Now add the content in markdown language. Here is [a tool](https://markdownlivepreview.com/) that might be helpful to get started with markdown.
* Example: [astroclub-niser.github.io/projects/jupiters-moons](https://astroclub-niser.github.io/projects/jupiters-moons)

## Maintenance

* Update Next.js version artifacts in `.github/workflows` regularly.