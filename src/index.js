import './styles.css';
import fetchCountriesName from './js/fetchCountries';
import updateCountriesMarkup from './js/updateCountriesMarkup';
import refs from './js/refs';
import { showNotificationFail } from './js/notification';

refs.searchField.addEventListener(
  'input',
  _.debounce(event => {
    const countryName = event.target.value;
    // console.log(event.target.value);

    refs.countriesName.innerHTML = '';
    if (refs.countriesName !== countryName) {
      showNotificationFail();
    }

    fetchCountriesName(countryName).then(updateCountriesMarkup);
  }, 1000),
);

//==========debouncedInputCallBack==========

// const debouncedInputCallBack = _.debounce(event => {
//   const countryName = event.target.value;
//   console.log(event.target.value);

//   const url = `https://restcountries.eu/rest/v2/name/${countryName}`;

//   fetch(url)
//     .then(res => res.json())
//     .then(data => {
//       console.log(data);
//       const markup = countriesTpl(data);
//       refs.countriesName.insertAdjacentHTML('beforeend', markup);
//     });
// }, 5000);

// refs.searchField.addEventListener('input', debouncedInputCallBack);
