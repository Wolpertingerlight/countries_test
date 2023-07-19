import React from 'react';
import './Country.css';

function Country(country) {
    const {object} = country;

    function openGoogleMaps(country) {
        const url = `https://www.google.com/maps/place/${encodeURIComponent(country.name.official ? country.name.official : country.name.common)}`;
        window.open(url, '_blank');
    }

    return (
        <div className='cardN' onClick={() => openGoogleMaps(object)}>
            <img src={object.flags.png} alt=""/>
            <div className='CountryInfo'>
                <p>{object.name.common}</p>
                <p>{object.capital}</p>
            </div>
        </div>
    );
};

export default Country;