const background = document.querySelector('.background');
const loadingText = document.querySelector('.loading-text');

let load = 0;
let int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  background.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

function scale(number, inMin, inMax, outMin, outMax) {
  return ((number - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
}

let newArray = [];
for (let i = 0; i <= 100; i++) {
  newArray.push(i);
}
