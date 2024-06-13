let count = 0;
const rules = document.querySelector(".rules_overlay");
const rulesBtn = document.querySelector(".rulesBtn");
const paper1 = document.querySelector(".paper");
const rock1 = document.querySelector(".rock");
const scissors1 = document.querySelector(".scissors");
const choice = document.querySelector(".choice-triangle");
const game = document.querySelector(".game");
const playBtn = document.querySelector(".playBtn");
const options = document.querySelectorAll(".options");

const pchoice = document.getElementById("picker_choice");
const hchoice = document.getElementById("hchoice");
const message = document.getElementById("msg");
const score = document.getElementById("score");

const option = ["paper", "rock", "scissors"];

rulesBtn.addEventListener("click", function () {
  rules.classList.add("open");
});

rules.addEventListener("click", function () {
  rules.classList.remove("open");
});

// function HouseChoice(){

// };

function score1() {
  score.innerHTML = count;
}

function WinMsg() {
  message.innerHTML = "YOU WON";
  count++;
  score1();
}

function LoseMsg() {
  message.innerHTML = "YOU LOSE";
  if (count > 0) {
    count--;
  }
  score1();
}

function DrawMsg() {
  message.innerHTML = "DRAW!";
}

options.forEach((optional) => {
  optional.addEventListener("click", (event) => {
    console.log(event.currentTarget);
    const house = Math.floor(Math.random() * option.length);
    hchoice.innerHTML =
      "<div class='" +
      option[house] +
      "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
      option[house] +
      ".svg'/> </div> </div>";

    if (event.currentTarget === paper1) {
      console.log("Paper")
      pchoice.innerHTML =
        "<div class='" +
        option[0] +
        "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
        option[0] +
        ".svg'/> </div> </div>";
      if (house == 0) {
        DrawMsg();
      } else if (house == 1) {
        WinMsg();
      } else {
        LoseMsg();
      }
    } else if (event.currentTarget === rock1) {
      console.log("Rock")
      pchoice.innerHTML =
        "<div class='" +
        option[1] +
        "_border choice-cont1'> <div class='bg-white rounded-full w-[90px] h-[90px] flex items-center justify-center border-2 border-solid border-white '> <img src='images/icon-" +
        option[1] +
        ".svg'/> </div> </div>";
      if (house == 0) {
        LoseMsg();
      } else if (house == 1) {
        DrawMsg();
      } else {
        WinMsg();
      }
    } else  {
      console.log("Scissors")
      pchoice.innerHTML =
        "<div class='" +
        option[2] +
        "_border choice-cont1'> <div class='bg-white rounded-full w-[90px] h-[90px] flex items-center justify-center border-2 border-solid border-white'> <img src='images/icon-" +
        option[2] +
        ".svg'/> </div> </div>";
      if (house == 0) {
        WinMsg();
      } else if (house == 1) {
        LoseMsg();
      } else {
        DrawMsg();
      }
    }
  });
});

// paper1.addEventListener("click", function (event) {
//   let house = Math.floor(Math.random() * option.length);
//   hchoice.innerHTML =
//     "<div class='" +
//     option[house] +
//     "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
//     option[house] +
//     ".svg'/> </div> </div>";
//   pchoice.innerHTML =
//     "<div class='" +
//     option[0] +
//     "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
//     option[0] +
//     ".svg'/> </div> </div>";
//   if (house == 0) {
//     DrawMsg();
//   } else if (house == 1) {
//     WinMsg();
//   } else {
//     LoseMsg();
//   }
// });

// rock1.addEventListener("click", function () {
//   let house = Math.floor(Math.random() * option.length);
//   hchoice.innerHTML =
//     "<div class='" +
//     option[house] +
//     "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
//     option[house] +
//     ".svg'/> </div> </div>";
//   pchoice.innerHTML =
//     "<div class='" +
//     option[1] +
//     "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
//     option[1] +
//     ".svg'/> </div> </div>";
//   if (house == 0) {
//     LoseMsg();
//   } else if (house == 1) {
//     DrawMsg();
//   } else {
//     WinMsg();
//   }
// });

// scissors1.addEventListener("click", function () {
//   let house = Math.floor(Math.random() * option.length);
//   hchoice.innerHTML =
//     "<div class='" +
//     option[house] +
//     "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
//     option[house] +
//     ".svg'/> </div> </div>";
//   pchoice.innerHTML =
//     "<div class='" +
//     option[2] +
//     "_border choice-cont1'> <div class='choice-wrapper'> <img src='images/icon-" +
//     option[2] +
//     ".svg'/> </div> </div>";
//   if (house == 0) {
//     WinMsg();
//   } else if (house == 1) {
//     LoseMsg();
//   } else {
//     DrawMsg();
//   }
// });

playBtn.addEventListener("click", function (event) {
  event.preventDefault();
  choice.classList.remove("hide");
  game.classList.remove("open");
});

options.forEach((option) => {
  option.addEventListener("click", function () {
    choice.classList.add("hide");
    game.classList.add("open");
  });
});
