# css-paint-cellular-autonoma

An example of using the [CSS Houdini Painting API](https://developer.mozilla.org/en-US/docs/Web/API/CSS_Painting_API), to paint CSS backgrounds of simple [cellular autonoma](https://mathworld.wolfram.com/ElementaryCellularAutomaton.html).

View it at [css-paint-cellular-autonoma.netlify.app](https://css-paint-cellular-autonoma.netlify.app).

[![Netlify Status](https://api.netlify.com/api/v1/badges/222df3cd-c2d4-48be-a449-ab1da5688c26/deploy-status)](https://app.netlify.com/sites/css-paint-cellular-autonoma/deploys)

![Example of CSS Paint cellular autonoma](/example.png)

## How to run the project locally

1. Clone the repository
2. `npm install`
3. `npm run dev`

The CSS worklet at [src/worklet.js](src/worklet.js) does all of the heavy lifting. It generates the grid and paints the background image with the CSS Houdini Painting API.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Svelte](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) extension.
