import React, {useEffect, useState} from 'react';

const CountryDataApi = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const language = urlParams.get('language');
        setFilter(language)
    }, []);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://restcountries.com/v3.1/all');
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);


    if (filter)
        return data.filter((c) => {
            for (let key in c.languages) {
                if (c.languages.hasOwnProperty(key) && c.languages[key] === filter) {
                    return true;
                }
            }
            return false;

        })
    else return data;
};

export default CountryDataApi;

