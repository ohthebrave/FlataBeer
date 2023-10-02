

//Render beers on the DOM
function handleBeer(beer) {
    let beerList = document.createElement('li');
    beerList.addEventListener('mouseover', ()=> {
        let beerName = document.querySelector('#beer-name');
        beerName.innerHTML = `${beer.name}
        <img
          id="beer-image"
          alt="${beer.name}"
          src="${beer.image_url}"/>
        `
        let description = document.querySelector('#beer-description');
        description.innerText = `${beer.description}`
        

    })
    beerList.innerHTML = `${beer.name}`
    document.querySelector('#beer-list').appendChild(beerList)

}


function getBeer() {
    fetch("http://localhost:3000/beers")
    .then(res => res.json())
    .then(beers => beers.forEach(beer => handleBeer(beer)))
}
getBeer()