const container = document.getElementById('country-data');
const searchInput = document.getElementById('search-input');
const searchBtn = document.getElementById('search-btn');

// Replace YOUR_API_KEY with the actual API key
const url = 'https://restcountries.com/v3.1/independent?status=true&fields=name,capital,flags,population';

let countriesData = [];

fetch(url)
  .then(response => response.json())
  .then(data => {
    countriesData = data;
    renderCountriesData(countriesData);
  })
  .catch(error => {
    console.error(error);
  });

function renderCountriesData(data) {
  container.innerHTML = '';
  data.forEach(country => {
    const card = document.createElement('div');
    card.classList.add('card');

    const img = document.createElement('img');
    img.src = country.flags.svg;
    img.alt = `${country.name.common} Flag`;

    const name = document.createElement('h2');
    name.textContent = country.name.common;

    const capital = document.createElement('p');
    capital.textContent = `Capital: ${country.capital}`;
    capital.style.marginTop='5px';

    const population = document.createElement('p');
    population.textContent = `Population: ${country.population}`;
    population.style.marginTop='0px';

    card.appendChild(img);
    card.appendChild(name);
    card.appendChild(capital);
    card.appendChild(population);

    container.appendChild(card);
  });
}

searchBtn.addEventListener('click', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredCountries = countriesData.filter(country => {
    const countryName = country.name.common.toLowerCase();
    return countryName.includes(searchTerm);
  });
  renderCountriesData(filteredCountries);
});

searchInput.addEventListener('keydown', event => {
  if (event.code === 'Enter') {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCountries = countriesData.filter(country => {
      const countryName = country.name.common.toLowerCase();
      return countryName.includes(searchTerm);
    });
    renderCountriesData(filteredCountries);
  }
});
