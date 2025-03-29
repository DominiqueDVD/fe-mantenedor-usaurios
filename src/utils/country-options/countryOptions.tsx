import { useEffect, useState } from 'react';
import { Country } from '../../interfaces/userDataInterface';
import './countryOptions.css';

export const useCountryOptions = () => {
  const [countryCodes, setCountryCodes] = useState<Country[]>([]);

  useEffect(() => {
    fetch('/public/data/countries.json')
      .then((response) => response.json())
      .then((data) => setCountryCodes(data))
      .catch((error) => console.error('Error loading country data:', error));
  }, []);

  const countryOptions =
    Array.isArray(countryCodes) && countryCodes.length > 0
      ? countryCodes.map((country) => ({
          value: country.code,
          label: (
            <div className="country-option">
              <img
                src={country.flag}
                alt={country.label}
                className="country-flag"
              />
              {country.label} ({country.code})
            </div>
          ),
        }))
      : [];

  return countryOptions;
};
