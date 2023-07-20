import './App.css';
import Languages from './app/Languages/Languages'
import CountryDataApi from "./api/CountryDataApi";

import React, {useEffect, useState} from "react";
import Country from "./components/Country/Country";
import Pagination from "./components/Pagination/Pagination";

function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [countries, setCountries] = useState([]);
    const [showAll, setShowAll] = useState(false);

   /*Коммент для проверки*/
    const getCountriesByFilter = async (language = 'all') => {
        let filter = language === 'all' ? 'all' : 'lang/' + language
        let url = 'https://restcountries.com/v3.1/' + filter.toLowerCase();
        const response = await fetch(url);
        const data = await response.json();
        setCountries(data);
    };

    if (countries.length < 1)
        getCountriesByFilter();
    const [countriesPerPage] = useState(15)


    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex);
    const paginate = pageNumber => setCurrentPage(pageNumber);
    const languageFilter = language => {paginate(1); getCountriesByFilter(language);}

    return (
        <div className="main-container">
            <div className='languages-container'>
                <Languages languageFilter={languageFilter}/>
            </div>

            <div className='content-container'>
                <div className='countries-container'>
                    {currentCountries.map((country, index) => (
                        <Country key={index} object={country}/>
                    ))}
                </div>
                <div className='pagination-container'>
                    <Pagination objPerPage={countriesPerPage} totalObjects={countries.length} paginate={paginate}/>
                </div>
            </div>

        </div>
    );
}

export default App;
