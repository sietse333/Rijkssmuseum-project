

// Function for making the paintings slide in and out
export function showandhideArticles(entries, observer) {
    entries.forEach(entry => {
      const targetClass = entry.target.classList;
      if (entry.isIntersecting) {
        targetClass.add('observed')
      } else {
        targetClass.remove('observed')
      }
    });
  };