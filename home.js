//e74abd980fed42fcb3eccc9b5a54f0b0
let cont = document.getElementById("cont");

async function FetchPopular() {
  let res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=us&apiKey=e74abd980fed42fcb3eccc9b5a54f0b0`
  );
  let data = await res.json();
  console.log(data);
  DOM(data.articles);
}
function DOM(data) {
  cont.innerHTML = null;
  data.forEach((element) => {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    let img = document.createElement("div");
    img.style.background = `url(${element.urlToImage})`;
    img.style.backgroundSize = "cover";
    card.appendChild(img);
    let h1 = document.createElement("p");
    h1.textContent = element.title;
    card.appendChild(h1);
    card.addEventListener("click", function () {
      localStorage.setItem("news-data", JSON.stringify(element));
      window.location.href = "news.html";
      console.log("ok");
    });
    cont.appendChild(card);
  });
}
FetchPopular();
