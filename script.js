const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item ";
  };
};

makeRows(20, 20);

function get_rand_color(){
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while(color.length < 6) {
      color = "0" + color;
  };
  return "#" + color ;
};

function get_black_color(){
  let color = 'rgb(0, 0, 0)';
  return color;
};

[...document.querySelectorAll(".grid-item")].forEach((round) => {
  round.addEventListener("mouseover", function() {
  round.style.background = 'rgb(0, 0, 0)';
  });
});

 