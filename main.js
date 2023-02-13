import './style.css'

import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://suvangs.netlify.app/" target="_blank">
      <img src="/suvan.png" class="logo" alt="Suvan logo" />
    </a>    
   <div class="card">
   <h1>
      <span class="magic">
        <span class="magic-text">
          
          Thank you for contacting me.I will get back to you shortly.<br>Meanwhile you are free to check out my other projects.
          
        </span>
      </span>
      </h1>
    </div>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on My logo to go back
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
