function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}


// drink details
function getDrinkIdFromLink(link) {
    const queryString = link.split('?')[1] || '';
    return new URLSearchParams(queryString).get('drink');
}

function loadDrinkDetails() {
    const drinkId = getQueryParam('drink'); 
    const drink = drinks.find(d => getDrinkIdFromLink(d.link) === drinkId);

    if (drink) {
        document.getElementById('drink-details').innerHTML = `
            <img src="${drink.image}" alt="${drink.name}">
            <h1>${drink.name}</h1>
            <p>${drink.description}</p><br><br><p></p>
            <h3>Base:</h3>
            <p>${drink.base.join(', ')}</p><br><br><p></p>
            <h3>Ingredients:</h3>
            <p>${drink.ingredients.join(', ')}</p><br><br><p></p>
            <h3>Flavour:</h3>
            <p>${drink.flavour.join(', ')}</p><br><br>
            <h3>Strength:</h3>
            <p>${drink.strength}</p>
        `;
    }
    
    //wrong pathway
    else {
        document.getElementById('drink-details').innerHTML = `
            <h1>Drink not found</h1>
            <p>Please select a valid drink.</p>
        `;
    }
}

loadDrinkDetails();
