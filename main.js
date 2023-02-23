let data;

fetch("data.json").then((response) => {
    return response.json();
  })
  .then((getData) => {
    renderData(getData.data);
    data = getData.data;
  });

function renderData(data) {
  const main = window.document.querySelector("#block-cards");
  main.innerHTML = "";

  data.forEach((block) => {
    const container = document.createElement("div"); //card-container

    const card = document.createElement("div"); //card

    const blockTitle = document.createElement("h3");

    const blockDescription = document.createElement("p");

    const blockLocation = document.createElement("p")

    const blockImage = document.createElement("img")

    const location = document.createElement("div")

    const locationImage = document.createElement("img")

    container.setAttribute(
      "class",
      `card-container mx-auto ${block.blockTitle} ${block.blockLocation}`
    );

    container.appendChild(card);

    card.setAttribute(
      "class",
      `card bg-slate-100 rounded-lg w-[35rem] max-sm:w-[20rem]`
    );

    container.setAttribute(
      "id",
      `${block.blockTitle} ${block.blockLocation}`
    );

    location.setAttribute(
      "class",
      "flex flex-row pl-3"
    );

    card.appendChild(blockImage);

    card.appendChild(blockTitle);

    card.appendChild(blockDescription);

    location.appendChild(locationImage)

    location.appendChild(blockLocation)

    card.appendChild(location);

    locationImage.src = ("./assets/location.svg")

    blockImage.src = ("./assets/card-images/" + block.blockImage)
    
    blockImage.setAttribute("class", "w-full");

    blockTitle.setAttribute("class", "title font-bold text-[1.5rem] px-3 py-3");

    blockDescription.setAttribute("class", "text-[1.2rem] break-all px-3 py-3");

    blockLocation.setAttribute("class", "text-[1.2rem] break-all px-3 py-3");

    blockImage.setAttribute("class", "rounded-t-lg w-full");

    blockDescription.innerHTML = block.blockDescription;

    blockTitle.innerHTML = block.blockTitle;

    blockLocation.innerHTML = block.blockLocation;

    main.appendChild(container);
  });
}


function filterByName() {
  let input, cards, filter, cardTitles, a, i, txtValue;
  input = document.getElementById('input-search');
  filter = input.value.toUpperCase();
  cardTitles = document.getElementsByTagName("h3");
  cards = document.getElementsByClassName("card-container")
  for (i = 0; i < cardTitles.length; i++) {
    a = cardTitles[i];
    txtValue = a.innerHTML
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      cards[i].style.display = "";
      cards[i].style.position = "";
    } else {
      cards[i].style.display = "none";
      cards[i].style.position = "fixed";
    }
  }

}

function filterByCity(){
  const filterSelect = document.getElementById('select');
  const itemsList = document.querySelectorAll(".card-container")
  const selectedFilter = filterSelect.value;
  console.log(selectedFilter)
  for (i = 0; i < itemsList.length; i++) {
    if (itemsList[i].id.indexOf(selectedFilter) > -1) {
      itemsList[i].style.display = "";
      itemsList[i].style.position = '';
    } else if (itemsList[i].id.indexOf(selectedFilter) == -1) {
      itemsList[i].style.display = 'none';
      itemsList[i].style.position = 'fixed';
    }
  }
  for (i=0; i<itemsList.length; i++){
    if (selectedFilter === "volvo"){
      itemsList[i].style.display = "";
      itemsList[i].style.position = '';
    }
  }
}

