import { sectionArea } from './vars.js'
import { generateObserver } from './observer.js'
import { getData } from './data.js'

// The data is being rendered into the html page
export function renderHTML(data) {
    console.log(data)
    data.artObjects.forEach(kunst => {
      sectionArea.insertAdjacentHTML('afterbegin', `<article class="hallo"><h2>${kunst.title}</h2> <img src="${kunst.webImage.url}"></article>`)
    })
    generateObserver();
  }