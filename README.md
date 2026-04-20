# Water Pokemon Catalog

A catalog of 115 Water-type Pokemon built for the Snap Engineering Academy Stage 2 project.

**Live site:** https://kagurainig0.github.io/Pokatalog_SEA26/

---

## What it does

- Displays 115 Water-type Pokemon as cards with their name, image, Pokedex number, classification, height, and weight
- Filter by size: smaller than human, human size, or larger than human
- Sort alphabetically or by Pokedex number
- Click any card to open a popup with a fun fact and a size comparison to the average human
- Reset button to clear all filters and sorting

## How I built it

Vanilla HTML, CSS, and JavaScript. No frameworks, no libraries, no external APIs.

Pokemon data is stored in `data.js` as an array of objects. Sprite images are loaded from the public PokeAPI sprite repository using each Pokemon's Pokedex number.

## Files

- `index.html` — page structure
- `style.css` — all styling
- `data.js` — Pokemon data (115 objects)
- `scripts.js` — all JavaScript logic
