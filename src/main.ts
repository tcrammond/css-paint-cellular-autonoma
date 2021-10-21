import 'css-paint-polyfill'

import App from './App.svelte'

import workletURL from "./worklet.js?url"

(async function () {
  CSS.paintWorklet.addModule(workletURL)
})()

const app = new App({
  target: document.getElementById('app')
})

export default app
