import App from './App.svelte'
import workletURL from "./worklet.js?url"

// Make sure the polyfill is loaded before rendering the app.
if (window.CSS && window.CSS.paintWorklet) {
  init()
} else {
  import('css-paint-polyfill').then(init)
}

async function init () {
  CSS.paintWorklet.addModule(workletURL)
  const app = new App({
    target: document.getElementById('app')
  })
}
