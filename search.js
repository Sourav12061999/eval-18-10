// https://newsapi.org/v2/everything?q=bitcoin&apiKey=e74abd980fed42fcb3eccc9b5a54f0b0
let inp = document.getElementById("inp");
let cont = document.getElementById("cont");
let result = document.getElementById("result");
let interval;
let title = document.getElementById("title");
let aurthor = document.getElementById("aurthor");
let desc = document.getElementById("desc");
let next = document.getElementById("next");
let img = document.getElementById("img");

function Fetch(query) {
  if (query == null || query == "") {
    return;
  }
  interval = setTimeout(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${query}&apiKey=e74abd980fed42fcb3eccc9b5a54f0b0`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        searchresult(data.articles);
      });
  }, 1000);
}
function searchresult(data) {
  result.innerHTML = null;
  data.forEach((element) => {
    let div = document.createElement("div");
    let img = document.createElement("div");
    img.style.background = `url(${element.urlToImage})`;
    if (element.urlToImage == null || element.urlToImage == undefined) {
      img.style.background = `url(no.png)`;
    }
    img.style.backgroundSize = "cover";
    div.appendChild(img);
    let text = document.createElement("div");
    let p = document.createElement("p");
    p.textContent = element.title;
    text.appendChild(p);
    div.appendChild(text);
    div.addEventListener("click", () => {
      result.style.display = "none";
      DOM(element);
    });
    result.appendChild(div);
  });
}
function DOM(data) {
  cont.style.display = "flex";
  title.innerText = data.title;
  aurthor.textContent = "Aurthor:- " + data.author;
  desc.textContent = data.description;
  next.addEventListener("click", () => {
    window.location.href = data.url;
  });
  img.style.background = `url(${data.urlToImage})`;
  if (data.urlToImage == null || data.urlToImage == undefined) {
    img.style.background = `url(no.png)`;
  }
  img.style.backgroundSize = "cover";
  //   console.log(data.urlToImage);
}
inp.addEventListener("input", () => {
  result.style.display = "block";
  clearTimeout(interval);
  Fetch(inp.value);
});
