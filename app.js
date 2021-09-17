//.......//
//.......//
//.......//
let colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "D", "C", "E", "F"];
const colorname = document.getElementById("colorname");
const btn = document.querySelector(".change-color");
// let displaycolor = document.querySelector')
btn.addEventListener("click", function () {
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += colors[random()];
  }
  document.body.style.backgroundColor = color;
  colorname.innerHTML = color;
});

function random() {
  return Math.floor(Math.random() * colors.length);
}

let socialIcons = [
  "#4267B2",
  "#1DA1F2",
  "#8a3ab9",
  "#0077b5",
  "#ff0000",
  "#0088cc",
  "#05E573",
  "#34526f",
  "#FFFC00",
  "#053eff",
  "#00aff0",
  "#BB001B",
];

let facebook = document.getElementById("facebook");
let twitter = document.getElementById("twitter");
let instagram = document.getElementById("instagram");
let linkiein = document.getElementById("linkiein");
let youtube = document.getElementById("youtube");
let telegram = document.getElementById("telegram");
let whatsapp = document.getElementById("whatsapp");
let tumblr = document.getElementById("tumblr");
let snapchat = document.getElementById("snapchat");
let behance = document.getElementById("behance");
let skype = document.getElementById("skype");
let gmail = document.getElementById("gmail");

facebook.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[0];
  colorname.innerHTML = socialIcons[0];
});

twitter.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[1];
  colorname.innerHTML = socialIcons[1];
});

instagram.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[2];
  colorname.innerHTML = socialIcons[2];
});

linkiein.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[3];
  colorname.innerHTML = socialIcons[3];
});

youtube.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[4];
  colorname.innerHTML = socialIcons[4];
});

telegram.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[5];
  colorname.innerHTML = socialIcons[5];
});

whatsapp.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[6];
  colorname.innerHTML = socialIcons[6];
});

tumblr.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[7];
  colorname.innerHTML = socialIcons[7];
});

snapchat.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[8];
  colorname.innerHTML = socialIcons[8];
});

behance.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[9];
  colorname.innerHTML = socialIcons[9];
});

skype.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[10];
  colorname.innerHTML = socialIcons[10];
});

gmail.addEventListener("click", function () {
  document.body.style.backgroundColor = socialIcons[11];
  colorname.innerHTML = socialIcons[11];
});
