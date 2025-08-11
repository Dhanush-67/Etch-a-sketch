for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = "25px";
    div.style.height = "25px";
    div.style.border = "1px solid black";
    div.style.backgroundColor = "white";
    const container = document.querySelector(".container");
    container.appendChild(div);
  }
}

let isMouseDown = false;

window.addEventListener("mousedown", (e) => {
  if (e.button !== 0) return;
  isMouseDown = true;
  if (e.target && e.target.classList && e.target.classList.contains("square")) {
    const c = e.target.style.backgroundColor;
    e.target.style.backgroundColor = c === "black" ? "white" : "black";
  }
});

window.addEventListener("mouseup", () => {
  isMouseDown = false;
});

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", (e) => {
    if (!isMouseDown) return;
    if (e.target.classList.contains("square")) {
      const c = e.target.style.backgroundColor;
      e.target.style.backgroundColor = c === "black" ? "white" : "black";
    }
  });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  squares.forEach((square) => {
    square.style.backgroundColor = "white";
  });
});

const size = document.querySelector(".size");
size.addEventListener("click", () => {
  let newSize = 0;
  do {
    newSize = Number(prompt("Enter new size (1-64)"));
  } while (newSize < 1 || newSize > 64);
  const remove = document.querySelectorAll(".square");
  remove.forEach((square) => {
    square.remove();
  });
  for (let i = 0; i < newSize; i++) {
    for (let j = 0; j < newSize; j++) {
      const div = document.createElement("div");
      div.classList.add("square");
      div.style.width = `${400 / newSize}px`;
      div.style.height = `${400 / newSize}px`;
      div.style.border = "1px solid black";
      div.style.backgroundColor = "white";
      const container = document.querySelector(".container");
      container.appendChild(div);
    }
  }
});
