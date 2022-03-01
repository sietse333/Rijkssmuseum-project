import { emptyText, url } from './vars.js'
import { hideLoading } from './loading.js'
import { renderHTML } from './render.js'


export function getData(url) {
    const data = fetch(url)
      .then(response => response.json())
      .then(data => {
        hideLoading()
        emptyText.textContent = "";
        renderHTML(data)
      })
      .catch(err => console.log(err))
  }

