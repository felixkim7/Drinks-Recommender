class Drink 
{
    constructor(name, image, description, base = [], ingredients = [], flavour = [], strength, link) {
        this.name = name;
        this.image = image;
        this.description = description;
        this.base = base;
        this.ingredients = ingredients;
        this.flavour = flavour;
        this.strength = strength;
        this.link = link;
    }

    // generateHTML() {
    //     return `
    //         <div class="column">
    //             <div class="item">
    //                 <img src="${this.image}" alt="${this.name}">
    //                 <div class="drink">${this.name}</div>
    //             </div>
    //         </div>
    //     `;
    // }

    generateHTML() {
        return `
            <div class="column">
                <a href="${this.link}" class="item">
                    <img src="${this.image}" alt="${this.name}">
                    <div class="drink">${this.name}</div>
                    <p>${this.description}</p>
                </a>
            </div>
        `;
    }
}

// List of drinks
const drinks = [
new Drink('Martini',
        './drinks/martini.jpg',
        'A classic dry cocktail.',
        ['Gin'],
        ['Dry Vermouth'],
        ['Bitter'],
        'Strong',
        'drink.html?drink=martini'
    ),
new Drink('Dirty Martini',
        './drinks/dirtymartini.jpg',
        'A savory twist on the classic martini.',
        ['Gin'],
        ['Dry Vermouth', 'Olive'],
        ['Savory', 'Bitter'],
        'Strong',
        'drink.html?drink=dirtymartini'
    ),
new Drink('Elderflower Martini',
        './drinks/elderflowermartini.jpg',
        'A floral and bittersweet martini.',
        ['Vodka'],
        ['St. Germain', 'Dry Vermouth', 'Angostura Bitters', 'Orange Bitters'],
        ['Sweet', 'Bitter'],
        'Medium',
        'drink.html?drink=elderflowermartini'
    ),
new Drink('Sweet Martini',
        './drinks/sweetmartini.jpg',
        'A sweeter variation of the classic martini.',
        ['Gin'],
        ['Sweet Vermouth'],
        ['Sweet', 'Bitter'],
        'Medium',
        'drink.html?drink=sweetmartini'
    ),
new Drink('Parisian Martini',
        './drinks/parisianmartini.jpg',
        'A floral and sophisticated martini.',
        ['Vodka'],
        ['St. Germain', 'Dry Vermouth'],
        ['Sweet', 'Bitter'],
        'Medium',
        'drink.html?drink=parisianmartini'
    ),
new Drink('Perfect Martini',
        './drinks/perfectmartini.jpg',
        'A balanced martini with sweet and dry notes.',
        ['Gin'],
        ['Dry Vermouth', 'Sweet Vermouth'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=perfectmartini'
    ),
new Drink('Vodka Martini',
        './drinks/vodkamartini.jpg',
        'A smooth and simple vodka martini.',
        ['Vodka'],
        ['Dry Vermouth'],
        ['Bitter'],
        'Strong',
        'drink.html?drink=vodkamartini'
    ),
new Drink('Long Island Iced Tea',
        './drinks/longislandicedtea.jpg',
        'A strong and refreshing mix of spirits with a hint of citrus.',
        ['Gin', 'Vodka', 'Rum', 'Tequila'],
        ['Cointreau', 'Lemon', 'Coke'],
        ['Sweet'],
        'Strong',
        'drink.html?drink=longislandicedtea'
    ),
new Drink('Long Beach Iced Tea',
        './drinks/longbeachicedtea.jpg',
        'A fruity twist on the Long Island Iced Tea.',
        ['Gin', 'Vodka', 'Rum', 'Tequila'],
        ['Cointreau', 'Lemon', 'Cranberry'],
        ['Sweet', 'Sour', 'Fruity'],
        'Strong',
        'drink.html?drink=longbeachicedtea'
    ),
new Drink('A.M.F',
        './drinks/amf.jpg',
        'A vibrant and citrusy cocktail.',
        ['Gin', 'Vodka', 'Rum', 'Tequila'],
        ['Blue Curaçao', 'Lemon', 'Sprite'],
        ['Sweet', 'Sour', 'Fruity'],
        'Strong',
        'drink.html?drink=amf'
    ),
new Drink('Aquamarine',
        './drinks/aquamarine.jpg',
        'A fruity and colorful cocktail.',
        ['Vodka'],
        ['Peachtree', 'Blue Curaçao', 'Apple'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=aquamarine'
    ),
new Drink('Balalaika',
        './drinks/balalaika.jpg',
        'A tangy and refreshing vodka cocktail.',
        ['Vodka'],
        ['Cointreau', 'Lemon'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=balalaika'
    ),
new Drink('Black Russian',
        './drinks/blackrussian.jpg',
        'A bold and smooth coffee-flavored cocktail.',
        ['Vodka'],
        ['Kahlúa'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=blackrussian'
    ),
new Drink('Bloody Mary',
        './drinks/bloodymary.jpg',
        'A savory and spicy classic cocktail.',
        ['Vodka'],
        ['Lemon', 'Tomato', 'Tabasco', 'Salt', 'Pepper'],
        ['Savory'],
        'Medium',
        'drink.html?drink=bloodymary'
    ),
new Drink('Blue Andy',
        './drinks/blueandy.jpg',
        'A fruity cocktail with a vibrant blue hue.',
        ['Vodka'],
        ['Blue Curaçao', 'Lemon', 'Apple'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=blueandy'
    ),
new Drink('Blue Lagoon',
        './drinks/bluelagoon.jpg',
        'A bright and citrusy blue cocktail.',
        ['Vodka'],
        ['Blue Curaçao', 'Lemon'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=bluelagoon'
    ),
new Drink('Blue Sky',
        './drinks/bluesky.jpg',
        'A creamy and fruity cocktail.',
        ['Vodka'],
        ['Blue Curaçao', 'Peachtree', 'Milk'],
        ['Sweet', 'Fruity'],
        'Strong',
        'drink.html?drink=bluesky'
    ),
new Drink('Cosmopolitan',
        './drinks/cosmopolitan.jpg',
        'A stylish and fruity cocktail.',
        ['Vodka'],
        ['Cointreau', 'Lime', 'Cranberry'],
        ['Sweet', 'Sour', 'Fruity'],
        'Medium',
        'drink.html?drink=cosmopolitan'
    ),
new Drink('Electric Lemonade',
        './drinks/electriclemonade.jpg',
        'A zesty and refreshing blue cocktail.',
        ['Vodka'],
        ['Blue Curaçao', 'Lemon', 'Simple Syrup', 'Sprite'],
        ['Sweet', 'Sour', 'Fruity'],
        'Medium',
        'drink.html?drink=electriclemonade'
    ),
new Drink('God Mother',
        './drinks/godmother.jpg',
        'A smooth and nutty vodka cocktail.',
        ['Vodka'],
        ['Amaretto'],
        ['Sweet'],
        'Strong',
        'drink.html?drink=godmother'
    ),
new Drink('Milano',
        './drinks/milano.jpg',
        'A bitter and aromatic cocktail.',
        ['Vodka'],
        ['Campari', 'Sweet Vermouth'],
        ['Bitter', 'Sweet'],
        'Medium',
        'drink.html?drink=milano'
    ),
new Drink('Moscow Mule',
        './drinks/moscowmule.jpg',
        'A tangy and spicy cocktail served in a copper mug.',
        ['Vodka'],
        ['Lime', 'Ginger Beer'],
        ['Sour'],
        'Medium',
        'drink.html?drink=moscowmule'
    ),
new Drink('Orchid Breeze',
        './drinks/orchidbreeze.jpg',
        'A floral and fruity cocktail.',
        ['Vodka'],
        ['St. Germain', 'Apple', 'Lime', 'White Wine'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=orchidbreeze'
    ),
new Drink('Polar Bear Vo.2',
        './drinks/polarbearvo2.jpg',
        'A vibrant and refreshing cocktail.',
        ['Vodka'],
        ['Blue Curaçao', 'Sprite'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=polarbearvo2'
    ),
new Drink('Russian Spring Punch',
        './drinks/russianspringpunch.jpg',
        'A fruity and sparkling cocktail.',
        ['Vodka'],
        ['Crème de Cassis', 'Lemon'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=russianspringpunch'
    ),
new Drink('Screwdriver',
        './drinks/screwdriver.jpg',
        'A simple and tangy vodka cocktail.',
        ['Vodka'],
        ['Orange'],
        ['Sweet', 'Fruity', 'Sour'],
        'Medium',
        'drink.html?drink=screwdriver'
    ),
new Drink('Sea Breeze',
        './drinks/seabreeze.jpg',
        'A refreshing and tangy cocktail.',
        ['Vodka'],
        ['Grapefruit', 'Cranberry'],
        ['Sour', 'Fruity'],
        'Light',
        'drink.html?drink=seabreeze'
    ),
new Drink('Sex on the Beach',
        './drinks/sexonthebeach.jpg',
        'A fruity and tropical cocktail.',
        ['Vodka'],
        ['Peachtree', 'Cranberry', 'Orange'],
        ['Sweet', 'Fruity'],
        'Light',
        'drink.html?drink=sexonthebeach'
    ),
new Drink('Sledgehammer',
        './drinks/sledgehammer.jpg',
        'A simple and tangy vodka cocktail.',
        ['Vodka'],
        ['Lime'],
        ['Sour'],
        'Strong',
        'drink.html?drink=sledgehammer'
    ),
new Drink('White Russian',
        './drinks/whiterussian.jpg',
        'A creamy and smooth coffee-flavored cocktail.',
        ['Vodka'],
        ['Kahlúa', 'Cream'],
        ['Sweet'],
        'Medium',
        'drink.html?drink=whiterussian'
    ),
new Drink('Bacardi',
        './drinks/bacardi.jpg',
        'A fruity and refreshing rum cocktail.',
        ['Rum', 'White Rum'],
        ['Lime', 'Grenadine'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=bacardi'
    ),
new Drink('Barbados Surprise',
        './drinks/barbadossurprise.jpg',
        'A tropical and vibrant cocktail.',
        ['Malibu'],
        ['Blue Curaçao', 'Orange', 'Grenadine'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=barbadossurprise'
    ),
new Drink('Between the Sheets',
        './drinks/betweenthesheets.jpg',
        'A citrusy and smooth classic cocktail.',
        ['Rum', 'White Rum', 'Cognac'],
        ['Cointreau', 'Lemon'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=betweenthesheets'
    ),
new Drink('Blue Hawaii',
        './drinks/bluehawaii.jpg',
        'A tropical and colorful cocktail.',
        ['Rum', 'White Rum', 'Vodka'],
        ['Blue Curaçao', 'Pineapple', 'Sweet and Sour Mix'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=bluehawaii'
    ),
new Drink('Blue Hawaiian',
        './drinks/bluehawaiian.jpg',
        'A creamy and tropical cocktail.',
        ['Rum', 'White Rum', 'Malibu'],
        ['Blue Curaçao', 'Pineapple'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=bluehawaiian'
    ),
new Drink('Blue Heaven',
        './drinks/blueheaven.jpg',
        'A fruity and vibrant cocktail.',
        ['Rum', 'White Rum'],
        ['Amaretto', 'Blue Curaçao', 'Lime', 'Pineapple'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=blueheaven'
    ),
new Drink('Catharsis',
        './drinks/catharsis.jpg',
        'A bold and tangy rum cocktail.',
        ['Rum', 'Overproof Rum'],
        ['Amaretto', 'Lime'],
        ['Sour', 'Sweet', 'Bitter'],
        'Strong',
        'drink.html?drink=catharsis'
    ),
new Drink('Cuba Libre',
        './drinks/cubalibre.jpg',
        'A classic rum and coke cocktail with a citrus twist.',
        ['Rum', 'White Rum'],
        ['Lime', 'Coke'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=cubalibre'
    ),
new Drink('Daiquiri',
        './drinks/daiquiri.jpg',
        'A simple and refreshing rum cocktail.',
        ['Rum', 'White Rum'],
        ['Lime', 'Sugar'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=daiquiri'
    ),
new Drink('Dark ‘n’ Stormy',
        './drinks/darknstormy.jpg',
        'A bold and spicy rum cocktail.',
        ['Rum', 'Dark Rum'],
        ['Ginger Beer'],
        ['Sweet'],
        'Medium',
        'drink.html?drink=darknstormy'
    ),
new Drink('Faust',
        './drinks/faust.jpg',
        'A bold and fruity rum cocktail.',
        ['Rum', 'Overproof Rum', 'White Rum'],
        ['Crème de Cassis'],
        ['Sweet', 'Fruity'],
        'Strong',
        'drink.html?drink=faust'
    ),
new Drink('Mojito',
        './drinks/mojito.jpg',
        'A refreshing mint and lime cocktail.',
        ['Rum', 'White Rum'],
        ['Mint', 'Lime', 'Sugar', 'Club Soda'],
        ['Sweet', 'Fruity', 'Sour'],
        'Light',
        'drink.html?drink=mojito'
    ),
new Drink('No Name',
        './drinks/noname.jpg',
        'A warm and smooth honey-flavored cocktail.',
        ['Rum', 'Dark Rum'],
        ['Honey'],
        ['Sweet'],
        'Strong',
        'drink.html?drink=noname'
    ),
new Drink('Pineapple Fizz',
        './drinks/pineapplefizz.jpg',
        'A light and fizzy tropical cocktail.',
        ['Rum', 'White Rum'],
        ['Pineapple', 'Sugar', 'Club Soda'],
        ['Sweet', 'Fruity'],
        'Light',
        'drink.html?drink=pineapplefizz'
    ),
new Drink('Piña Colada',
        './drinks/pinacolada.jpg',
        'A creamy and tropical cocktail.',
        ['Rum', 'White Rum', 'Malibu'],
        ['Pineapple'],
        ['Sweet', 'Fruity'],
        'Light',
        'drink.html?drink=pinacolada'
    ),
new Drink('Rainbow Paradise',
        './drinks/rainbowparadise.jpg',
        'A colorful and fruity tropical cocktail.',
        ['Rum', 'White Rum'],
        ['Blue Curaçao', 'Pineapple', 'Grenadine'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=rainbowparadise'
    ),
new Drink('XYZ',
        './drinks/xyz.jpg',
        'A citrusy and smooth cocktail.',
        ['Rum', 'White Rum'],
        ['Cointreau', 'Lemon'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=xyz'
    ),
new Drink('A1',
        './drinks/a1.jpg',
        'A bright and fruity gin cocktail.',
        ['Gin'],
        ['Cointreau', 'Lemon', 'Grenadine'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=a1'
    ),
new Drink('Alfonso Special',
        './drinks/alfonsospecial.jpg',
        'A rich and aromatic cocktail.',
        ['Gin'],
        ['Dry Vermouth', 'Sweet Vermouth', 'Grand Marnier', 'Angostura Bitters'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=alfonsospecial'
    ),
new Drink('Bee’s Knees',
        './drinks/beesknees.jpg',
        'A sweet and citrusy honey-flavored cocktail.',
        ['Gin'],
        ['Lemon', 'Orange', 'Honey'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=beesknees'
    ),
new Drink('Blue Lady',
        './drinks/bluelady.jpg',
        'A creamy and citrusy blue cocktail.',
        ['Gin'],
        ['Blue Curaçao', 'Lemon', 'Egg White'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=bluelady'
    ),
new Drink('Bronx',
        './drinks/bronx.jpg',
        'A fruity and smooth gin cocktail.',
        ['Gin'],
        ['Sweet Vermouth', 'Orange'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=bronx'
    ),
new Drink('English Breakfast',
        './drinks/englishbreakfast.jpg',
        'A sophisticated tea-infused cocktail.',
        ['Gin'],
        ['St. Germain', 'Black Tea', 'Lemon'],
        ['Bitter', 'Sweet'],
        'Medium',
        'drink.html?drink=englishbreakfast'
    ),
new Drink('French Gimlet',
        './drinks/frenchgimlet.jpg',
        'A floral and citrusy cocktail.',
        ['Gin'],
        ['St. Germain', 'Lime'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=frenchgimlet'
    ),
new Drink('Gimlet',
        './drinks/gimlet.jpg',
        'A classic gin and lime cocktail.',
        ['Gin'],
        ['Lime', 'Sugar'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=gimlet'
    ),
new Drink('Gin and It',
        './drinks/ginandit.jpg',
        'A sweet and aromatic gin cocktail.',
        ['Gin'],
        ['Sweet Vermouth', 'Orange Bitters'],
        ['Sweet', 'Bitter'],
        'Strong',
        'drink.html?drink=ginandit'
    ),
new Drink('Gin and Tonic',
        './drinks/ginandtonic.jpg',
        'A refreshing and crisp gin cocktail.',
        ['Gin'],
        ['Tonic Water', 'Lemon', 'Lime'],
        ['Bitter', 'Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=ginandtonic'
    ),
new Drink('Gin Fizz',
        './drinks/ginFizz.jpg',
        'A light and fizzy gin cocktail.',
        ['Gin'],
        ['Lemon', 'Simple Syrup', 'Club Soda'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=ginfizz'
    ),
new Drink('Gin Rickey',
        './drinks/ginrickey.jpg',
        'A light and refreshing gin cocktail.',
        ['Gin'],
        ['Lime', 'Club Soda'],
        ['Sour'],
        'Medium',
        'drink.html?drink=ginrickey'
    ),
new Drink('Gin Lime',
        './drinks/ginlime.jpg',
        'A simple and tangy gin cocktail.',
        ['Gin'],
        ['Lime'],
        ['Sour'],
        'Strong',
        'drink.html?drink=ginlime'
    ),
new Drink('John Collins',
        './drinks/johncollins.jpg',
        'A fizzy and citrusy gin cocktail.',
        ['Gin'],
        ['Lemon', 'Simple Syrup', 'Club Soda'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=johncollins'
    ),
new Drink('Negroni',
        './drinks/negroni.jpg',
        'A bitter and aromatic gin cocktail.',
        ['Gin'],
        ['Sweet Vermouth', 'Campari'],
        ['Bitter'],
        'Strong',
        'drink.html?drink=negroni'
    ),
new Drink('Salty Dog',
        './drinks/saltydog.jpg',
        'A tangy and savory gin cocktail.',
        ['Gin'],
        ['Grapefruit'],
        ['Sour', 'Savory'],
        'Medium',
        'drink.html?drink=saltydog'
    ),
new Drink('Parisian',
        './drinks/parisian.jpg',
        'A sophisticated and fruity gin cocktail.',
        ['Gin'],
        ['Dry Vermouth', 'Crème de Cassis'],
        ['Sweet', 'Fruity'],
        'Strong',
        'drink.html?drink=parisian'
    ),
new Drink('Pink Lady',
        './drinks/pinklady.jpg',
        'A creamy and sweet pink gin cocktail.',
        ['Gin'],
        ['Grenadine', 'Cream', 'Egg White'],
        ['Sweet'],
        'Medium',
        'drink.html?drink=pinklady'
    ),
new Drink('Pink Gin',
        './drinks/pinkgin.jpg',
        'A bold and aromatic gin cocktail.',
        ['Gin'],
        ['Angostura Bitters'],
        ['Bitter'],
        'Strong',
        'drink.html?drink=pinkgin'
    ),
new Drink('White Lady',
        './drinks/whitelady.jpg',
        'A citrusy and smooth gin cocktail.',
        ['Gin'],
        ['Cointreau', 'Lemon', 'Egg White'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=whitelady'
    ),
new Drink('Cinco de Mayo',
        './drinks/cincodeMayo.jpg',
        'A tangy and vibrant tequila cocktail.',
        ['Tequila'],
        ['Lime', 'Grenadine'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=cincodeMayo'
    ),
new Drink('El Diablo',
        './drinks/eldiablo.jpg',
        'A fruity and spicy tequila cocktail.',
        ['Tequila'],
        ['Crème de Cassis', 'Lime', 'Ginger Ale'],
        ['Sweet', 'Sour', 'Spicy'],
        'Medium',
        'drink.html?drink=eldiablo'
    ),
new Drink('Ice Breaker',
        './drinks/icebreaker.jpg',
        'A refreshing and fruity tequila cocktail.',
        ['Tequila'],
        ['Cointreau', 'Grapefruit', 'Grenadine'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=icebreaker'
    ),
new Drink('Jarana',
        './drinks/jarana.jpg',
        'A sweet and tropical tequila cocktail.',
        ['Tequila'],
        ['Pineapple', 'Sugar'],
        ['Sweet', 'Fruity'],
        'Light',
        'drink.html?drink=jarana'
    ),
new Drink('Margarita',
        './drinks/margarita.jpg',
        'A classic and tangy tequila cocktail.',
        ['Tequila'],
        ['Cointreau', 'Lime', 'Salt'],
        ['Sour', 'Savory'],
        'Medium',
        'drink.html?drink=margarita'
    ),
new Drink('Matador',
        './drinks/matador.jpg',
        'A tropical and tangy tequila cocktail.',
        ['Tequila'],
        ['Pineapple', 'Lemon'],
        ['Sour', 'Fruity'],
        'Medium',
        'drink.html?drink=matador'
    ),
new Drink('Mexicola',
        './drinks/mexicola.jpg',
        'A fizzy and tangy tequila cocktail.',
        ['Tequila'],
        ['Lime', 'Coke'],
        ['Sweet', 'Sour'],
        'Light',
        'drink.html?drink=mexicola'
    ),
new Drink('Paloma',
        './drinks/paloma.jpg',
        'A tangy and refreshing tequila cocktail.',
        ['Tequila'],
        ['Grapefruit', 'Lime', 'Salt', 'Club Soda'],
        ['Sour', 'Savory'],
        'Medium',
        'drink.html?drink=paloma'
    ),
new Drink('Sunburn',
        './drinks/sunburn.jpg',
        'A fruity and vibrant tequila cocktail.',
        ['Tequila'],
        ['Cointreau', 'Cranberry'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=sunburn'
    ),
new Drink('Tequila and Tonic',
        './drinks/tequilaandtonic.jpg',
        'A simple and fizzy tequila cocktail.',
        ['Tequila'],
        ['Tonic Water'],
        ['Bitter'],
        'Medium',
        'drink.html?drink=tequilaandtonic'
    ),
new Drink('Tequila Sour',
        './drinks/tequilasour.jpg',
        'A tangy and smooth tequila cocktail.',
        ['Tequila'],
        ['Lemon', 'Sugar'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=tequilasour'
    ),
new Drink('Tequila Stone Sour',
        './drinks/tequilastonesour.jpg',
        'A fruity and tangy tequila cocktail.',
        ['Tequila'],
        ['Cointreau', 'Orange', 'Sweet and Sour Mix'],
        ['Sweet', 'Sour', 'Fruity'],
        'Strong',
        'drink.html?drink=tequilastonesour'
    ),
new Drink('Tequila Sunrise',
        './drinks/tequilasunrise.jpg',
        'A colorful and fruity tequila cocktail.',
        ['Tequila'],
        ['Orange', 'Grenadine'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=tequilasunrise'
    ),
new Drink('Boulevardier',
        './drinks/boulevardier.jpg',
        'A bold and bitter bourbon cocktail.',
        ['Whisky', 'Bourbon'],
        ['Campari', 'Sweet Vermouth'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=boulevardier'
    ),
new Drink('Derby Fizz',
        './drinks/derbyfizz.jpg',
        'A smooth and citrusy scotch cocktail.',
        ['Whisky', 'Scotch'],
        ['Cointreau', 'Lemon', 'Simple Syrup', 'Egg White'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=derbyfizz'
    ),
new Drink('Elder Fashioned',
        './drinks/elderfashioned.jpg',
        'A floral and smooth bourbon cocktail.',
        ['Whisky', 'Bourbon'],
        ['St. Germain', 'Simple Syrup', 'Orange Bitters'],
        ['Sweet', 'Bitter'],
        'Strong',
        'drink.html?drink=elderfashioned'
    ),
new Drink('Elderflower Manhattan',
        './drinks/elderflowermanhattan.jpg',
        'A floral and aromatic bourbon cocktail.',
        ['Whisky', 'Bourbon'],
        ['St. Germain', 'Dry Vermouth', 'Angostura Bitters'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=elderflowermanhattan'
    ),
new Drink('God Father',
        './drinks/godfather.jpg',
        'A smooth and nutty scotch cocktail.',
        ['Whisky', 'Scotch'],
        ['Amaretto'],
        ['Sweet'],
        'Strong',
        'drink.html?drink=godfather'
    ),
new Drink('Manhattan',
        './drinks/manhattan.jpg',
        'A bold and classic cocktail.',
        ['Whisky', 'Bourbon', 'Rye'],
        ['Sweet Vermouth', 'Angostura Bitters'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=manhattan'
    ),
new Drink('Mint Julep',
        './drinks/mintjulep.jpg',
        'A classic bourbon cocktail with a refreshing minty flavor.',
        ['Whisky', 'Bourbon'],
        ['Mint', 'Sugar', 'Water'],
        ['Sweet'],
        'Strong',
        'drink.html?drink=mintjulep'
    ),
new Drink('New York',
        './drinks/newyork.jpg',
        'A tangy and fruity bourbon cocktail.',
        ['Whisky', 'Bourbon'],
        ['Lime', 'Sugar', 'Grenadine'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=newyork'
    ),
new Drink('Old Fashioned',
        './drinks/oldfashioned.jpg',
        'A classic whiskey cocktail with a smooth and rich flavor.',
        ['Whisky', 'Bourbon', 'Rye'],
        ['Sugar', 'Angostura Bitters', 'Water'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=oldfashioned'
    ),
new Drink('Almond Old Fashioned',
        './drinks/almondoldfashioned.jpg',
        'A nutty twist on the classic Old Fashioned.',
        ['Whisky', 'Bourbon'],
        ['Amaretto', 'Brown Sugar', 'Angostura Bitters'],
        ['Sweet', 'Bitter'],
        'Strong',
        'drink.html?drink=almondoldfashioned'
    ),
new Drink('Old Pal',
        './drinks/oldpal.jpg',
        'A bold and bitter rye whiskey cocktail.',
        ['Whisky', 'Rye'],
        ['Dry Vermouth', 'Campari'],
        ['Bitter'],
        'Strong',
        'drink.html?drink=oldpal'
    ),
new Drink('Oriental',
        './drinks/oriental.jpg',
        'A citrusy and smooth rye whiskey cocktail.',
        ['Whisky', 'Rye'],
        ['Sweet Vermouth', 'Cointreau', 'Lime'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=oriental'
    ),
new Drink('Rob Roy',
        './drinks/robroy.jpg',
        'A smooth and aromatic scotch cocktail.',
        ['Whisky', 'Scotch'],
        ['Sweet Vermouth', 'Angostura Bitters'],
        ['Bitter', 'Sweet'],
        'Strong',
        'drink.html?drink=robroy'
    ),
new Drink('Scotch Sour',
        './drinks/scotchsour.jpg',
        'A tangy and creamy scotch cocktail.',
        ['Whisky', 'Scotch'],
        ['Lemon', 'Simple Syrup', 'Egg White'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=scotchsour'
    ),
new Drink('Whisky Float',
        './drinks/whiskyfloat.jpg',
        'A light and simple whisky cocktail.',
        ['Whisky'],
        ['Water'],
        ['Mild'],
        'Medium',
        'drink.html?drink=whiskyfloat'
    ),
new Drink('Whisky Sour',
        './drinks/whiskysour.jpg',
        'A tangy and smooth bourbon cocktail.',
        ['Whisky', 'Bourbon'],
        ['Lemon', 'Simple Syrup', 'Egg White'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=whiskysour'
    ),
new Drink('Adam and Eve',
        './drinks/adamandeve.jpg',
        'A fruity and sophisticated cocktail.',
        ['Cognac', 'Gin'],
        ['Crème de Cassis', 'Lemon'],
        ['Sweet', 'Sour', 'Fruity'],
        'Medium',
        'drink.html?drink=adamandeve'
    ),
new Drink('French Connection',
        './drinks/frenchconnection.jpg',
        'A smooth and nutty cognac cocktail.',
        ['Cognac'],
        ['Amaretto'],
        ['Sweet'],
        'Strong',
        'drink.html?drink=frenchconnection'
    ),
new Drink('Horse’s Neck',
        './drinks/horsesneck.jpg',
        'A refreshing and spicy cognac cocktail.',
        ['Cognac'],
        ['Angostura Bitters', 'Ginger Ale'],
        ['Spicy', 'Sweet'],
        'Medium',
        'drink.html?drink=horsesneck'
    ),
new Drink('Pear Elderflower Collins',
        './drinks/pearelderflowercollins.jpg',
        'A floral and fruity cognac cocktail.',
        ['Cognac'],
        ['St. Germain', 'Pear', 'Lemon', 'Simple Syrup'],
        ['Sweet', 'Fruity'],
        'Medium',
        'drink.html?drink=pearelderflowercollins'
    ),
new Drink('Sidecar',
        './drinks/sidecar.jpg',
        'A citrusy and smooth cognac cocktail.',
        ['Cognac'],
        ['Cointreau', 'Lemon'],
        ['Sweet', 'Sour'],
        'Strong',
        'drink.html?drink=sidecar'
    ),
new Drink('Suffering Bastard',
        './drinks/sufferingbastard.jpg',
        'A bold and spicy cocktail with a unique mix of flavors.',
        ['Cognac', 'Gin'],
        ['Lime', 'Angostura Bitters', 'Ginger Beer'],
        ['Spicy', 'Sour'],
        'Medium',
        'drink.html?drink=sufferingbastard'
    ),
new Drink('Amaretto Sour',
        './drinks/amarettosour.jpg',
        'A tangy and creamy almond-flavored cocktail.',
        ['Liqueur'],
        ['Amaretto', 'Lemon', 'Simple Syrup', 'Egg White', 'Angostura Bitters'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=amarettosour'
    ),
new Drink('Americano',
        './drinks/americano.jpg',
        'A light and fizzy bitter cocktail.',
        ['Liqueur'],
        ['Campari', 'Sweet Vermouth', 'Club Soda'],
        ['Bitter', 'Sweet'],
        'Light',
        'drink.html?drink=americano'
    ),
new Drink('Cassis Frappe',
        './drinks/cassisfrappe.jpg',
        'A fruity and refreshing cocktail.',
        ['Liqueur'],
        ['Crème de Cassis', 'Peachtree', 'Malibu', 'Orange', 'Lemon', 'Simple Syrup'],
        ['Sweet', 'Fruity'],
        'Light',
        'drink.html?drink=cassisfrappe'
    ),
new Drink('Kahlua Milk',
        './drinks/kahluamilk.jpg',
        'A creamy and smooth coffee cocktail.',
        ['Liqueur'],
        ['Kahlúa', 'Milk'],
        ['Sweet'],
        'Light',
        'drink.html?drink=kahluamilk'
    ),
new Drink('Milano-Torino',
        './drinks/milanotorino.jpg',
        'A bitter and aromatic cocktail.',
        ['Liqueur'],
        ['Campari', 'Sweet Vermouth'],
        ['Bitter', 'Sweet'],
        'Medium',
        'drink.html?drink=milanotorino'
    ),
new Drink('Green Widow',
        './drinks/greenwidow.jpg',
        'A vibrant and citrusy cocktail.',
        ['Liqueur'],
        ['Blue Curaçao', 'Orange'],
        ['Sweet', 'Sour'],
        'Medium',
        'drink.html?drink=greenwidow'
    ),
new Drink('Peach Crush',
        './drinks/peachcrush.jpg',
        'A fruity and refreshing cocktail.',
        ['Liqueur'],
        ['Peachtree', 'Sweet and Sour Mix', 'Cranberry'],
        ['Sweet', 'Fruity'],
        'Light',
        'drink.html?drink=peachcrush'
    )

];

// DOM container for displaying drinks
const drinksContainer = document.getElementById('drinks-container');

// all drinks
function displayDrinks(drinksToDisplay) 
{
    drinksContainer.innerHTML = '';
    drinksToDisplay.forEach(drink => {
        drinksContainer.innerHTML += drink.generateHTML();
    });
}

displayDrinks(drinks);



// checkboxes inside dropdown
function getSelectedDropdownValues(listClass) 
{
    return Array.from(document.querySelectorAll(`.${listClass} .checked .item-text`)).map(el => el.textContent);
}

// filter application
function applyFilters() 
{
    const selectedBases = getSelectedDropdownValues('filter-base');
    const selectedIngredients = getSelectedDropdownValues('filter-ingredient');
    const selectedFlavours = getSelectedDropdownValues('filter-flavour');
    const selectedStrengths = getSelectedDropdownValues('filter-strength');

    let searchQuery = '';
    const isSmallScreen = window.innerWidth <= 1000; 
    // mobile mode
    if (isSmallScreen && searchBarHeader) {
        searchQuery = searchBarHeader.value.trim().toLowerCase();
    }
    
    else if (!isSmallScreen && searchBarNav) {
        searchQuery = searchBarNav.value.trim().toLowerCase();
    }

    const filteredDrinks = drinks.filter(drink => {
        const matchesBase = selectedBases.length === 0 || drink.base.some(base => selectedBases.includes(base));
        const matchesIngredient = selectedIngredients.length === 0 || drink.ingredients.some(ing => selectedIngredients.includes(ing));
        const matchesFlavour = selectedFlavours.length === 0 || drink.flavour.some(flav => selectedFlavours.includes(flav));
        const matchesStrength = selectedStrengths.length === 0 || selectedStrengths.includes(drink.strength);

        const matchesSearch = searchQuery === '' || drink.name.toLowerCase().includes(searchQuery);

        return matchesBase && matchesIngredient && matchesFlavour && matchesStrength && matchesSearch;
    });

    displayDrinks(filteredDrinks);
}

// multi select dropdown
document.querySelectorAll(".select-btn").forEach(selectBtn => {
    selectBtn.addEventListener("click", (e) => {
        // close open filters
        document.querySelectorAll(".select-btn.open").forEach(btn => {
            if (btn !== selectBtn) {
                btn.classList.remove("open");
            }
        });

        selectBtn.classList.toggle("open");
        e.stopPropagation();
    });
});

document.querySelectorAll(".list-items").forEach(list => {
    list.querySelectorAll(".item1").forEach(item => {
        item.addEventListener("click", () => {
            item.classList.toggle("checked");
            updateButtonText(item.closest('.con')?.querySelector('.btn-text') || item.closest('.navbar')?.querySelector('.btn-text'), list);
            applyFilters();
        });
    });
});

function updateButtonText(buttonTextElement, list) 
{
    if (!buttonTextElement) 
        return;
    const checkedItems = list.querySelectorAll('.checked .item-text');
    const defaultText = buttonTextElement.getAttribute("data-default-text");
    // buttonTextElement.textContent = checkedItems.length > 0
    //     ? `${checkedItems.length} Selected`
    //     : defaultText;

    if (checkedItems.length === 0) {
        // no items
        buttonTextElement.textContent = defaultText;
    } 
    
    else {
        const selectedTexts = Array.from(checkedItems).map(el => el.textContent);
        buttonTextElement.textContent = selectedTexts.join(', ');
    }
}

document.addEventListener('click', (e) => {
    const clickedInsideFilter = e.target.closest('.select-btn, .list-items');
    if (!clickedInsideFilter) {
        // close open filters
        document.querySelectorAll('.select-btn.open').forEach(btn => {
            btn.classList.remove('open');
        });
    }
});


//search bar
const searchBarNav = document.getElementById('search-bar');
const searchBarHeader = document.getElementById('search-bar-header');

if (searchBarNav) {
    searchBarNav.addEventListener('input', applyFilters);
}

if (searchBarHeader) {
    searchBarHeader.addEventListener('input', applyFilters);
}

//menu toggle logic
const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');
const overlay = document.querySelector('.overlay');


if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        if (navbar.classList.contains('open')) {
            navbar.classList.remove('open');
            overlay.classList.remove('show');
            menuIcon.classList.remove('change');
        } 
        
        else {
            navbar.classList.add('open');
            overlay.classList.add('show');
            menuIcon.classList.add('change');
        }
    });
}

if (overlay) {
    overlay.addEventListener('click', () => {
        navbar.classList.remove('open');
        overlay.classList.remove('show');
        menuIcon.classList.remove('change');
    });
}