const countrySelect = document.getElementById("country");
const citySelect = document.getElementById("cities");
const selectedCountryElem = document.getElementById("selectedCountry");
const selectedCityElem = document.getElementById("selectedCity");
const citiesByCountry = {
    ukr: ['Kyiv', 'Lviv', 'Kharkiv', 'Dnipro'],
    usa: ['New-York', 'Washington', 'Boston', 'Chikago'],
    ger: ['Berlin', 'Munich', 'Hamburg', 'Nünberg']
};

function populateCities() {
    const selectedCountry = countrySelect.value;
    const cities = citiesByCountry[selectedCountry];
    
    citySelect.innerHTML = "";
    
    for (let city of cities) {
        const option = document.createElement("option");
        option.text = city;
        option.value = city;
        citySelect.add(option);
    }
};
countrySelect.addEventListener("change", populateCities);

citySelect.addEventListener("change", () => {
    selectedCountryElem.textContent = countrySelect.options[countrySelect.selectedIndex].text;
    selectedCityElem.textContent = citySelect.options[citySelect.selectedIndex].text;
});