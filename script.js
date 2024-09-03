let a = "";
let b=0;
let score = 0;
let c=0;
function newbubble() {
  for (let i = 1; i < 113; i++) {
    b = Math.floor(Math.random() * 10);
    if (b == 1) {
      a += `<div class="bubble">${b}</div>`;
    }
    else if (b == 2) {
      a += `<div class="bubble2">${b}</div>`;
    }
    else if (b == 3) {
      a += `<div class="bubble3">${b}</div>`;
    }
    else if (b == 4) {
      a += `<div class="bubble4">${b}</div>`;
    }
    else if (b == 5) {
      a += `<div class="bubble5">${b}</div>`;
    }
    else if (b == 6) {
      a += `<div class="bubble6">${b}</div>`;
    }
    else if (b == 7) {
      a += `<div class="bubble7">${b}</div>`;
    }
    else if (b == 8) {
      a += `<div class="bubble8">${b}</div>`;
    }
    else if (b == 9) {
      a += `<div class="bubble9">${b}</div>`;
    }
    else (b == 0) 
      a += `<div class="bubble0">${b}</div>`;
  }
  document.querySelector("#pbtm").innerHTML = a;
}
newbubble();
let timer = 60;
function settimer() {
  setInterval(() => {
    timer--;
    if(timer>=0)
    document.querySelector(".timer").textContent = timer;
  }, 1000);
}
settimer();
let newHit = () => {
  c = Math.floor(Math.random() * 10);
  document.querySelector(".hit").innerHTML = c;
};
newHit();
let increaseScore = () => {
  score += 10;
  document.querySelector(".score").textContent = score;
};
let bottom = document
  .querySelector("#pbtm")
  .addEventListener("click", (text) => {
    if (Number(text.target.textContent) === c) {
      increaseScore();
      newHit();
      a="";
      newbubble();
    }
});