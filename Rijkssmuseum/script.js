const Sectionvak = document.querySelector('#test');
const emptytext = document.querySelector('#empty');
const fotoFoto = document.querySelector('.fotofoto');
const fotoText = document.querySelector('.fototext');


function displayLoading() {
    Sectionvak.classList.add("skeleton");
    setTimeout(() => {
        Sectionvak.classList.remove("skeleton");
        emptytext.textContent = "Failed to load paintings please try again!";
    }, 4000);
}

function hideLoading() {
    Sectionvak.classList.remove("skeleton");
}

displayLoading()

const getAndRenderData = () => {
    const getURL = 'https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&involvedMaker=Rembrandt+van+Rijn&ps=25'
    fetch(getURL).then(response => response.json())
        .then(response => {
            hideLoading()
            emptytext.textContent = "";
            response.artObjects.forEach(kunst => {
                Sectionvak.insertAdjacentHTML('afterbegin', `<article class="hallo"><h2>${kunst.title}</h2> <img src="${kunst.webImage.url}"></article>`)
            })
            generateObserver();
        }).catch(error => document.body.insertAdjacentHTML('beforebegin', error))
}

getAndRenderData()



function generateObserver(){
//Intersection Observer experiment
const observer = new IntersectionObserver(showandhideArticles); // er wordt intersection object aangemaakt
const elements = document.querySelectorAll('.hallo');
elements.forEach(element => {
  observer.observe(element) 

});
}

function showandhideArticles(entries, observer) { 
  entries.forEach(entry => {
    const targetClass = entry.target.classList;
    if(entry.isIntersecting) {
      targetClass.add('observed')
    } else {
      targetClass.remove('observed')
    }
  });
};
