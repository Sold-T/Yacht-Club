let mainPage = document.querySelector(".page");
let themeButtons = document.querySelectorAll(".theme-switcher button");
let fontButtons = document.querySelectorAll(".fonts button");

for (const button of themeButtons) {
  button.onclick = function () {
    let activeButton = document.querySelector(".theme-switcher button.active");
    activeButton.classList.remove("active");
    button.classList.add("active");
    mainPage.classList.toggle("dark");
  };
}
for (const button of fontButtons) {
  button.onclick = function () {
    let activeFont = document.querySelector(".fonts button.active");
    activeFont.classList.remove("active");
    button.classList.add("active");
    mainPage.classList.toggle("serif");
  };
}

let shortBlogArticles = document.querySelectorAll(".blog-article.short");
for (const articles of shortBlogArticles) {
  let moreButton = articles.querySelector(".more");
  moreButton.onclick = function () {
    articles.classList.remove("short");
  };
}

let viewsButtons = document.querySelectorAll(".card-view-buttons button");
let cads = document.querySelector(".cards");

for (const button of viewsButtons) {
  button.onclick = function () {
    let activeButton = document.querySelector(
      ".card-view-buttons button.active"
    );
    activeButton.classList.remove("active");
    button.classList.add("active");
    cads.classList.toggle("list");
  };
}

let activePhoto = document.querySelector(".active-photo");
let photos = document.querySelectorAll(".preview-list a");

for (const photo of photos) {
  photo.onclick = function (e) {
    e.preventDefault();
    let activeItem = document.querySelector(".preview-list a.active-item");
    activeItem.classList.remove("active-item");
    photo.classList.add("active-item");
    activePhoto.src = photo.href;
  };
}
//