const facebook = document.querySelector(".fa-facebook-square");
const instagram = document.querySelector(".fa-instagram-square");
const linkedin = document.querySelector(".fa-linkedin");
const twitter = document.querySelector(".fa-twitter-square");
const gmail = document.querySelector(".fa-envelope");
const projects = document.getElementById("projects");
const blogs = document.getElementById("blogs");
const github = document.querySelector(".fa-github");

gmail.addEventListener("click", function () {
  location.href =
    "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=guruhp999@gmail.com";
  target = "_blank";
});

facebook.addEventListener("click", function () {
  location.href = "https://www.facebook.com/gurudatt.puranik.25";
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

projects.addEventListener("click", function () {
  location.href = "project.html";
});

blogs.addEventListener("click", function () {
  location.href = "blog.html";
});
