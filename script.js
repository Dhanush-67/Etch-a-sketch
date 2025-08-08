for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const div = document.createElement("div");
    div.classList.add("square");
    div.style.width = "25px";
    div.style.height = "25px";
    div.style.border = "1px solid black";
    const container = document.querySelector(".container");
    container.appendChild(div);
  }
}

const squares = document.querySelectorAll(".square");
squares.forEach((square) => {
  square.addEventListener("mouseover", () => {
    square.style.backgroundColor = "black";
  });
});
