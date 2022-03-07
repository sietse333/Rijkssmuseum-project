import { emptyText, url } from './vars.js'
import { hideLoading } from './loading.js'
import { renderHTML } from './render.js'


export const getData = (url) =>{
    const data = fetch(url)
      .then(response => response.json())
      .then(data => {
        hideLoading()
        emptyText.textContent = "";
        renderHTML(data)
      })
      .catch(err => emptyText.textContent = "Failed to load paintings please try again!" )
  }
