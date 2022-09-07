const ribbon = document.querySelector(".ribbon_active");
const ribbons = document.querySelectorAll(".ribbon");



let current_index = 0;

let interval_id;



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
  
};

const onRibbonClick = (event) => {
  event.target.parentElement.style.pointerEvents = "none";
  interval_id = setInterval(changeImage, 400);
  
};

ribbon.addEventListener("pointerdown", onRibbonClick);


function checkTimeAndPlay() {
  var x = document.getElementById("myVideo");
  x.play();
}
setTimeout(checkTimeAndPlay, 4900);

/*
function myFunction() {
  var x = document.getElementById("myVideo");
  x.play();
}
*/