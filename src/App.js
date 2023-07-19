import './App.css';
import Languages from './app/Languages/Languages'
import CountryDataApi from "./api/CountryDataApi";

import React, {useState} from "react";
import Country from "./components/Country/Country";
import Pagination from "./components/Pagination/Pagination";

function App() {
    const countries = CountryDataApi();
    const [currentPage, setCurrentPage] = useState(1)
    const [countriesPerPage] = useState(15)

    const lastCountryIndex = currentPage * countriesPerPage;
    const firstCountryIndex = lastCountryIndex - countriesPerPage;
    const currentCountries = countries.slice(firstCountryIndex, lastCountryIndex)
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <div className="main-container">
            <div className='languages-container'>
                <Languages/>
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
