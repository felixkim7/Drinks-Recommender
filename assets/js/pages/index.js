// DOM container for displaying drinks
const drinksContainer = document.getElementById('drinks-container');
const resultCountElement = document.getElementById('result-count');
const clearFiltersBtn = document.getElementById('clear-filters-btn');
const selectedFilterChips = document.getElementById('selected-filter-chips');
const searchBarNav = document.getElementById('search-bar');
const searchBarHeader = document.getElementById('search-bar-header');

const STORAGE_KEY = 'drinkFilterState';
const MOBILE_BREAKPOINT = 1000;

const FILTER_GROUPS = [
    {
        key: 'bases',
        label: 'Base',
        listClass: 'filter-base',
        drinkField: 'base',
        orderKey: 'base'
    },
    {
        key: 'ingredients',
        label: 'Ingredient',
        listClass: 'filter-ingredient',
        drinkField: 'ingredients',
        orderKey: 'ingredients'
    },
    {
        key: 'flavours',
        label: 'Flavour',
        listClass: 'filter-flavour',
        drinkField: 'flavour',
        orderKey: 'flavour'
    },
    {
        key: 'strengths',
        label: 'Strength',
        listClass: 'filter-strength',
        drinkField: 'strength',
        orderKey: 'strength'
    }
];

function createDrinkCardHTML(drink) {
    return `
        <div class="column">
            <a href="${drink.link}" class="item">
                <img src="${drink.image}" alt="${drink.name}">
                <div class="drink">${drink.name}</div>
                <p>${drink.description}</p>
            </a>
        </div>
    `;
}

// all drinks
function displayDrinks(drinksToDisplay) 
{
    drinksContainer.innerHTML = '';

    updateResultCount(drinksToDisplay.length);
    updateClearButtonVisibility();
    updateSelectedFilterChips();

    if (drinksToDisplay.length === 0) {
        drinksContainer.innerHTML = `
            <div class="no-results">
                <h2>No drinks found</h2>
                <p>Try removing some filters or searching for something else.</p>
            </div>
        `;
        return;
    }

    drinksContainer.innerHTML = drinksToDisplay
        .map(drink => createDrinkCardHTML(drink))
        .join('');
}


// checkboxes inside dropdown
function getSelectedDropdownValues(listClass) 
{
    return Array.from(document.querySelectorAll(`.${listClass} .checked .item-text`)).map(el => el.textContent);
}

function getCurrentSearchText() {
    const isSmallScreen = window.innerWidth <= 1000;

    if (isSmallScreen && searchBarHeader) {
        return searchBarHeader.value.trim();
    }

    if (!isSmallScreen && searchBarNav) {
        return searchBarNav.value.trim();
    }

    return '';
}

function hasActiveFilters() {
    const hasSelectedFilters = FILTER_GROUPS.some(group => {
        return getSelectedDropdownValues(group.listClass).length > 0;
    });

    return hasSelectedFilters || getCurrentSearchText() !== '';
}

function createFilterChip(label, value, listClass) {
    const chip = document.createElement('button');
    chip.type = 'button';
    chip.className = 'filter-chip';
    chip.textContent = `${label}: ${value} ×`;
    chip.dataset.listClass = listClass;
    chip.dataset.value = value;

    return chip;
}

function updateSelectedFilterChips() {
    if (!selectedFilterChips) return;

    selectedFilterChips.innerHTML = '';

    FILTER_GROUPS.forEach(group => {
        const selectedValues = getSelectedDropdownValues(group.listClass);

        selectedValues.forEach(value => {
            selectedFilterChips.appendChild(
                createFilterChip(group.label, value, group.listClass)
            );
        });
    });

    const searchText = getCurrentSearchText();

    if (searchText !== '') {
        selectedFilterChips.appendChild(
            createFilterChip('Search', searchText, 'search')
        );
    }
}

function updateResultCount(count) {
    if (!resultCountElement) return;

    if (hasActiveFilters()) {
        resultCountElement.textContent = `${count} drink${count === 1 ? '' : 's'} found`;
    } else {
        resultCountElement.textContent = `Showing all ${drinks.length} drinks`;
    }
}

function updateClearButtonVisibility() {
    if (!clearFiltersBtn) return;

    clearFiltersBtn.style.display = hasActiveFilters() ? 'inline-block' : 'none';
}

// create filtered drinks based on selected filters and search query
const preferredFilterOrder = {
    base: [
        'Vodka',
        'Rum',
        'White Rum',
        'Gold Rum',
        'Dark Rum',
        'Overproof Rum',
        'Malibu',
        'Gin',
        'Tequila',
        'Whisky',
        'Bourbon',
        'Scotch',
        'Rye',
        'Cognac',
        'Liqueur'
    ],

    ingredients: [
        'St. Germain',
        'Malibu',
        'Campari',
        'Sweet Vermouth',
        'Dry Vermouth',
        'Amaretto',
        'Crème de Cassis',
        'Grand Marnier',
        'Cointreau',
        'Blue Curaçao',
        'Peachtree',
        'Kahlúa',
        'Angostura Bitters',
        'Orange Bitters',

        'White Wine',
        'Red Wine',
        'Champagne',

        'Lemon',
        'Lime',
        'Orange',
        'Grapefruit',
        'Cranberry',
        'Apple',
        'Pineapple',
        'Pear',
        'Coconut',
        'Tomato',

        'Olive',

        'Club Soda',
        'Tonic Water',
        'Ginger Ale',
        'Ginger Beer',
        'Coke',
        'Sprite',
        'Water',

        'Tabasco',
        'Salt',
        'Pepper',

        'Milk',
        'Cream',
        'Mint',
        'Egg White',
        'Black Tea',

        'Grenadine',
        'Sweet and Sour Mix',
        'Honey',
        'Simple Syrup',
        'Sugar',
        'Brown Sugar'
    ],

    flavour: [
        'Sweet',
        'Sour',
        'Bitter',
        'Savory',
        'Fruity',
        'Spicy',
        'Mild'
    ],

    strength: [
        'Light',
        'Medium',
        'Strong'
    ]
};

function getUniqueValuesFromDrinks(field) {
    return [...new Set(drinks.flatMap(drink => drink[field]))];
}

function getOrderedFilterValues(field, preferredOrder) {
    const valuesFromData = getUniqueValuesFromDrinks(field);

    const newValuesNotInPreferredOrder = valuesFromData
        .filter(value => !preferredOrder.includes(value))
        .sort();

    return [...preferredOrder, ...newValuesNotInPreferredOrder];
}

function createFilterItemHTML(value) {
    return `
        <li class="item1">
            <span class="checkbox">
                <i class="fa-solid fa-check check-icon"></i>
            </span>
            <span class="item-text">${value}</span>
        </li>
    `;
}

function createFilterItems(listClass, values) {
    const list = document.querySelector(`.${listClass}`);
    if (!list) return;

    list.innerHTML = '';

    values.forEach(value => {
        list.innerHTML += createFilterItemHTML(value);
    });
}

function initializeFilterOptions() {
    FILTER_GROUPS.forEach(group => {
        const values =
            group.drinkField === 'strength'
                ? preferredFilterOrder.strength
                : getOrderedFilterValues(group.drinkField, preferredFilterOrder[group.orderKey]);

        createFilterItems(group.listClass, values);
    });
}

// save filter state
function saveFilterState() {
    const state = {};

    FILTER_GROUPS.forEach(group => {
        state[group.key] = getSelectedDropdownValues(group.listClass);
    });

    state.searchNav = searchBarNav ? searchBarNav.value : '';
    state.searchHeader = searchBarHeader ? searchBarHeader.value : '';

    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function getDrinkSearchText(drink) {
    return [
        drink.name,
        ...drink.base,
        ...drink.ingredients,
        ...drink.flavour,
        drink.strength
    ].join(' ').toLowerCase();
}

// filter application
function applyFilters() 
{
    const selectedFilters = {};

    FILTER_GROUPS.forEach(group => {
        selectedFilters[group.key] = getSelectedDropdownValues(group.listClass);
    });

    const searchQuery = getCurrentSearchText().toLowerCase();

    const filteredDrinks = drinks.filter(drink => {
        const matchesFilters = FILTER_GROUPS.every(group => {
            const selectedValues = selectedFilters[group.key];

            if (selectedValues.length === 0) {
                return true;
            }

            const drinkValue = drink[group.drinkField];

            if (Array.isArray(drinkValue)) {
                return drinkValue.some(value => selectedValues.includes(value));
            }

            return selectedValues.includes(drinkValue);
        });

        const matchesSearch =
            searchQuery === '' || getDrinkSearchText(drink).includes(searchQuery);

        return matchesFilters && matchesSearch;
    });

    displayDrinks(filteredDrinks);
    saveFilterState();
}

//restore filter state on page load
function restoreFilterState() {
    const savedState = sessionStorage.getItem(STORAGE_KEY);
    if (!savedState) return false;

    const state = JSON.parse(savedState);

    function restoreCheckedItems(listClass, selectedValues) {
        document.querySelectorAll(`.${listClass} .item1`).forEach(item => {
            const text = item.querySelector('.item-text').textContent;

            if (selectedValues.includes(text)) {
                item.classList.add('checked');
            } else {
                item.classList.remove('checked');
            }
        });

        const list = document.querySelector(`.${listClass}`);
        if (!list) return;

        const buttonText = list.closest('.con')?.querySelector('.btn-text');
        updateButtonText(buttonText, list);
    }

    restoreCheckedItems('filter-base', state.bases || []);
    restoreCheckedItems('filter-ingredient', state.ingredients || []);
    restoreCheckedItems('filter-flavour', state.flavours || []);
    restoreCheckedItems('filter-strength', state.strengths || []);

    if (searchBarNav) {
        searchBarNav.value = state.searchNav || '';
    }

    if (searchBarHeader) {
        searchBarHeader.value = state.searchHeader || '';
    }

    applyFilters();
    return true;
}

function clearAllFilters() {
    document.querySelectorAll('.list-items .item1.checked').forEach(item => {
        item.classList.remove('checked');
    });

    document.querySelectorAll('.list-items').forEach(list => {
        const buttonText = list.closest('.con')?.querySelector('.btn-text');
        updateButtonText(buttonText, list);
    });

    if (searchBarNav) {
        searchBarNav.value = '';
    }

    if (searchBarHeader) {
        searchBarHeader.value = '';
    }

    applyFilters();
}

function removeSingleFilter(listClass, value) {
    if (listClass === 'search') {
        if (searchBarNav) {
            searchBarNav.value = '';
        }

        if (searchBarHeader) {
            searchBarHeader.value = '';
        }

        applyFilters();
        return;
    }

    const list = document.querySelector(`.${listClass}`);
    if (!list) return;

    list.querySelectorAll('.item1').forEach(item => {
        const itemText = item.querySelector('.item-text')?.textContent;

        if (itemText === value) {
            item.classList.remove('checked');
        }
    });

    const buttonText = list.closest('.con')?.querySelector('.btn-text');
    updateButtonText(buttonText, list);

    applyFilters();
}

// generate filter options before adding click events
function updateButtonText(buttonTextElement, list) {
    if (!buttonTextElement || !list) return;

    const checkedItems = Array.from(list.querySelectorAll('.checked .item-text'));
    const defaultText = buttonTextElement.dataset.defaultText;

    if (checkedItems.length === 0) {
        buttonTextElement.textContent = defaultText;
        return;
    }

    const selectedTexts = checkedItems.map(item => item.textContent);
    buttonTextElement.textContent = selectedTexts.join(', ');
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


function setupDropdownButtonEvents() {
    document.querySelectorAll('.select-btn').forEach(selectBtn => {
        selectBtn.addEventListener('click', (e) => {
            document.querySelectorAll('.select-btn.open').forEach(btn => {
                if (btn !== selectBtn) {
                    btn.classList.remove('open');
                }
            });

            selectBtn.classList.toggle('open');
            e.stopPropagation();
        });
    });
}

function setupFilterItemEvents() {
    document.querySelectorAll('.list-items').forEach(list => {
        list.addEventListener('click', (e) => {
            const item = e.target.closest('.item1');
            if (!item || !list.contains(item)) return;

            item.classList.toggle('checked');

            const buttonText = list.closest('.con')?.querySelector('.btn-text');
            updateButtonText(buttonText, list);

            applyFilters();
        });
    });
}

function setupOutsideClickEvent() {
    document.addEventListener('click', (e) => {
        const clickedInsideFilter = e.target.closest('.select-btn, .list-items');

        if (!clickedInsideFilter) {
            document.querySelectorAll('.select-btn.open').forEach(btn => {
                btn.classList.remove('open');
            });
        }
    });
}

function setupSearchEvents() {
    if (searchBarNav) {
        searchBarNav.addEventListener('input', applyFilters);
    }

    if (searchBarHeader) {
        searchBarHeader.addEventListener('input', applyFilters);
    }
}

function setupClearFilterEvent() {
    if (clearFiltersBtn) {
        clearFiltersBtn.addEventListener('click', clearAllFilters);
    }
}

function setupFilterChipEvents() {
    if (!selectedFilterChips) return;

    selectedFilterChips.addEventListener('click', (e) => {
        const chip = e.target.closest('.filter-chip');
        if (!chip) return;

        removeSingleFilter(chip.dataset.listClass, chip.dataset.value);
    });
}

function setupMobileMenuEvents() {
    const menuIcon = document.querySelector('.menu-icon');
    const navbar = document.querySelector('.navbar');
    const overlay = document.querySelector('.overlay');

    if (menuIcon) {
        menuIcon.addEventListener('click', () => {
            const isOpen = navbar.classList.contains('open');

            navbar.classList.toggle('open', !isOpen);
            overlay.classList.toggle('show', !isOpen);
            menuIcon.classList.toggle('change', !isOpen);
        });
    }

    if (overlay) {
        overlay.addEventListener('click', () => {
            navbar.classList.remove('open');
            overlay.classList.remove('show');
            menuIcon.classList.remove('change');
        });
    }
}

function init() {
    initializeFilterOptions();

    setupDropdownButtonEvents();
    setupFilterItemEvents();
    setupOutsideClickEvent();
    setupSearchEvents();
    setupClearFilterEvent();
    setupFilterChipEvents();
    setupMobileMenuEvents();

    const restored = restoreFilterState();

    if (!restored) {
        applyFilters();
    }
}

init();
