let data = JSON.parse(localStorage.getItem("news-data"));
let title = document.getElementById("title");
let aurthor = document.getElementById("aurthor");
let desc = document.getElementById("desc");
let next = document.getElementById("next");
let img = document.getElementById("img");

function DOM(data) {
  title.innerText = data.title;
  aurthor.textContent = "Aurthor:- " + data.author;
  desc.textContent = data.description;
  next.addEventListener("click", () => {
    window.location.href = data.url;
  });
  img.style.background = `url(${data.urlToImage})`;
  img.style.backgroundSize = "cover";

  console.log(data);
}
DOM(data);
