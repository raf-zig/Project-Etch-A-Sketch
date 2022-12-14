let user_choice = prompt('Enter the desired grid size no more than 100', '');
const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item ";
  };
};

makeRows(user_choice, user_choice);

function get_rand_color(){
  let color = Math.floor(Math.random() * Math.pow(256, 3)).toString(16);
  while(color.length < 6) {
      color = "0" + color;
  };
  return "#" + color ;
};

let color = '';
let black_color_choice = () => color = 'black';
let multicolored_color_choice = () => color = 'multicolored';

function clear_color(){
  const clean = document.querySelectorAll(".grid-item");
  clean.forEach(el => el.style.background = 'white');
};

[...document.querySelectorAll(".grid-item")].forEach((round) => {
  round.addEventListener("mouseover", function() {
    if(color == 'multicolored'){
      round.style.background = get_rand_color();
    } else if(color == 'black') {
      round.style.background = 'black';
    };
  });
});

 