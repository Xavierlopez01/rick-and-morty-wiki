import React from 'react'

const LocationInfo = ({ location }) => {

console.log(location)

    return (
        <article className='location'>
            <section className='location__card'>
            <h2>Name: <br />{location?.name}</h2>
            <h2>Type: <br />{location?.type}</h2>
            <h2>Dimension: <br />{location?.dimension}</h2>
            <h2>Population: <br />{location?.residents.length}</h2>
            </section>
        </article>
    )
}

export default LocationInfo