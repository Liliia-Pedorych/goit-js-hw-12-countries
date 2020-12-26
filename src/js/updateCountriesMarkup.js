import countriesTpl from '../templates/countries.hbs';
import countryTpl from '../templates/country.hbs';

import refs from './refs';

function updateCountriesMarkup(data) {
  const countElementsObj = Object.keys(data).length;

  if (countElementsObj === 1) {
    countryInformation(data);
  } else counryList(data);
}

function counryList(data) {
  const markup = countriesTpl(data);
  refs.countriesName.insertAdjacentHTML('beforeend', markup);
}

function countryInformation(data) {
  const markup = countryTpl(data);
  refs.countriesName.insertAdjacentHTML('beforeend', markup);
}

export default updateCountriesMarkup;

// function updateCountriesMarkup(data) {
//   const markup = countriesTpl(data);
//   refs.countriesName.insertAdjacentHTML('beforeend', markup);
// }

// function updateCountriesMarkup(data) {
//   const markup = countryTpl(data);
//   refs.countriesName.insertAdjacentHTML('beforeend', markup);
// }
