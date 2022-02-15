const testSection = document.querySelector('#test');


const getAndRenderData =  () => {
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&involvedMaker=Rembrandt+van+Rijn&ps=25'  
    fetch(getURL).then(response => response.json())
      .then(response => {
        console.log(response.artObjects)
        response.artObjects.forEach(kunst => {
          testSection.insertAdjacentHTML( 'afterbegin', `<article><h2>${kunst.title}</h2> <img src="${kunst.webImage.url}"></article>`)
        })
      }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
  }
  getAndRenderData()

