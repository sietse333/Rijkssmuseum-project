
import { getData } from './data.js'

export const searchBalk = document.querySelector('#searchbalk');
// Searchfunctie
export function search() {
  let searchTerm = searchBalk.value;
  let url = "https://www.rijksmuseum.nl/api/nl/collection?key=2mU4mudb&q=" + searchTerm + "&ps=5";
  console.log(url);
  getData(url);
}
searchBalk.addEventListener("keyup", function (e) {
  search();
});


