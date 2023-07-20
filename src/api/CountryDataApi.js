import React, {useEffect, useState} from 'react';

const CountryDataApi = (language) => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                let filter = language === 'all' ? 'all' : 'lang/' + language
                let url = 'https://restcountries.com/v3.1/' + filter.toLowerCase();
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return data;
};

export default CountryDataApi;

