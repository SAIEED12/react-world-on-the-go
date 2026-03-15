import React, { use, useState } from 'react';
import Country from '../../Country/Country';
import "./Countries.css"

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([])

    const handleVisitedCountries = (country) =>{
        const newVisitedCountries = [...visitedCountries,country] //add countrie to the array
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) =>{ //parameter will detect which flag is clicked
        const newvVisitedFlags = [...visitedFlags,flag]
        setVisitedFlags(newvVisitedFlags)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries
    return (
        <div>
            <h1>In the countries: {countries.length}</h1>
            <h3>Countries Visited: {visitedCountries.length}</h3>
            <h3>Flags Visited: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country=> <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>

            <div className='visited-flags-container'>
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag}></img>)
                }
            </div>

            <div className='countries'>
                {
                    countries.map(country => <Country country={country} key={country.cca3.cca3} handleVisitedCountries={handleVisitedCountries}
                    handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;