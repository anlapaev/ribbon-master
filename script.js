const ribbon = document.querySelector(".ribbon_active");
const ribbons = document.querySelectorAll(".ribbon");



let current_index = 0;

let interval_id;

function checkTimeAndPlay() {
  var x = document.getElementById("myVideo");
  x.play();
}

const checkFirstImage = (index) => {
  if (index === -1) {
    return 0;
  }
  return index;
};

const changeImage = () => {
  if (current_index < ribbons.length + 1) {
    ribbons[checkFirstImage(current_index - 1)].classList.add("ribbon_hidden");
    ribbons[checkFirstImage(current_index - 1)].classList.remove(
      "ribbon_active"
    );

    ribbons[current_index].classList.add("ribbon_active");
    ribbons[current_index].classList.remove("ribbon_hidden");
    current_index += 1;
    
  } else {
    current_index = ribbons.length;
    
  }

  if (current_index === ribbons.length) {
    ribbon.removeEventListener("pointerdown", onRibbonClick);
    ribbons[current_index].classList.remove("ribbon_hidden");
    clearInterval(interval_id);
    
  }
  setTimeout(checkTimeAndPlay, 3800);
};

const onRibbonClick = (event) => {
  event.target.parentElement.style.pointerEvents = "none";
  interval_id = setInterval(changeImage, 400);
  
};

ribbon.addEventListener("pointerdown", onRibbonClick);





/*
function myFunction() {
  var x = document.getElementById("myVideo");
  x.play();
}
*/