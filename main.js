var elList = document.querySelector(".list");



for (const poce of pokemons) {
  var poceItem = document.createElement("li");
  poceItem.style.marginBottom = "15px"
  var pokeTitle = document.createElement("h3");
  pokeTitle.style.padding = "20px"
  pokeTitle.style.backgroundColor = "aquamarine"
  pokeTitle.style.textAlign = "center"
  var pokeNumb = document.createElement("span");
  pokeNumb.style.marginLeft = "auto"
  pokeNumb.style.backgroundColor = "yellow"
  pokeNumb.style.borderRadius = "2px"
  pokeNumb.style.padding = "5px"
  var pokeImg = document.createElement("img");
  pokeImg.style.margin = "auto"
  var pokeWeight = document.createElement("p");
  pokeWeight.style.textAlign = "center"
  pokeWeight.style.backgroundColor = "green"
  var pokeTime = document.createElement("time")
  pokeTime.style.marginLeft = "auto"
  pokeTime.style.backgroundColor = "yellow"
  pokeTime.style.borderRadius = "2px"
  pokeTime.style.padding = "6px"
  var pokeText = document.createElement("p");
  pokeText.style.padding = "20px"
  pokeText.style.backgroundColor = "aqua"
  pokeText.style.textAlign = "center"

  poceItem.classList.add("pokemon-item")

  pokeTitle.textContent = poce.name;
  pokeNumb.textContent = poce.num;
  pokeImg.src = poce.img;
  pokeImg.width = "130";
  pokeImg.height = "130";
  pokeImg.alt = poce.name;
  pokeWeight.textContent = poce.weight;
  pokeTime.textContent = poce.spawn_time;
  pokeText.textContent = poce.weaknesses.join(" , ");

  poceItem.append(pokeTitle, pokeNumb, pokeImg, pokeWeight, pokeTime, pokeText);

  elList.appendChild(poceItem)
}