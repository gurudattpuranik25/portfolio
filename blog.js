const home = document.getElementById("home");
const projects = document.getElementById("projects");

const instagram = document.querySelector(".fa-instagram-square");
const linkedin = document.querySelector(".fa-linkedin");
const twitter = document.querySelector(".fa-twitter-square");
const gmail = document.querySelector(".fa-envelope");
const github = document.querySelector(".fa-github");

home.addEventListener("click", function () {
  location.href = "index.html";
});

projects.addEventListener("click", function () {
  location.href = "project.html";
});

gmail.addEventListener("click", function () {
  location.href =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=guruhp999@gmail.com";
  target = "_blank";
});

instagram.addEventListener("click", function () {
  location.href = "https://www.instagram.com/gurudatt_puranik/";
});

twitter.addEventListener("click", function () {
  location.href = "https://twitter.com/PuranikGurudatt";
});

linkedin.addEventListener("click", function () {
  location.href = "https://www.linkedin.com/in/gurudatt-puranik-0933b0195/";
});

github.addEventListener("click", function () {
  location.href = "https://github.com/gurudattpuranik25";
});
