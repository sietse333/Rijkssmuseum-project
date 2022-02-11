const main = document.getElementById("voorkant");
const lol = document.querySelectorAll('.lol');


function switchitup() {
    var voorkant = document.getElementById("voorkant");
    var achterkant = document.getElementById("achterkant");
    if (voorkant.style.display === "none") {
      voorkant.style.display = "block";
      achterkant.style.display = "none";
    } else {
      voorkant.style.display = "none";
      achterkant.style.display = "block";
    }
  }

// unknowingly used event delegation.   

main.onmouseleave = () => {
  lol.forEach((el) => {
    el.classList.toggle('stars');
  })
  };
 
main.onmouseover = function(){
  lol.forEach((el) => {
    el.classList.toggle('stars');
  })
  };