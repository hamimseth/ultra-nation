import React from 'react';

const Country = (props) => {
   const {name, population, region, flag}=props.country; 
   const flagStyle={height:"50px"};
   const countryStyle = {border:'1px solid red', margin:'10px', padding:'10px'}
   const handleAddCountry=props.handleAddCountry
    return (
        <div style={countryStyle}>
            <h4>this is {name}</h4>
            <img style={flagStyle} src={flag} alt=''/>
            <p> Population: {population} </p>
            <p><samall>Region: {region}</samall></p>
            <button onClick={() =>handleAddCountry(props.country)}>add country</button>

        </div>
    );
};

export default Country;