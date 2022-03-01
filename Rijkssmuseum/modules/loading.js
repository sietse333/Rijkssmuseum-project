import { emptyText, sectionArea } from './vars.js'

// Skeleton that is being showed when the page is loading
export function displayLoading() {
    sectionArea.classList.add("skeleton");
    setTimeout(() => {
      sectionArea.classList.remove("skeleton");
      emptyText.textContent = "Failed to load paintings please try again!";
    }, 4000);
  }
  
export function hideLoading() {
    sectionArea.classList.remove("skeleton");
  }

  displayLoading()