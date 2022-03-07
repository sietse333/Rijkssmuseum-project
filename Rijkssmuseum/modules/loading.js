import { emptyText, sectionArea } from './vars.js'

// Skeleton that is being showed when the page is loading
export const displayLoading = () =>{
    sectionArea.classList.add("skeleton");
  }
  
export const hideLoading = () =>{
    sectionArea.classList.remove("skeleton");
  }

  displayLoading()