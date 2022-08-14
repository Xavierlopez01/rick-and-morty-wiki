import React from 'react'

const Residents = ({ residents }) => {

    return (
        <article >
            <header>
                <img className='resident__img' src={residents?.image} alt={residents?.name} />

            </header>
            <section>
                <ul className='resident__text'>
                    <li><h1>Name:  {residents?.name}</h1></li>
                    <li><h3>Species:  {residents?.species}</h3></li>
                    <li><h3>Type:  {residents?.type}</h3></li>
                    <li><h3>Gender:  {residents?.gender}</h3></li>
                    <li><h3>Birthplace:  {residents?.location.name}</h3></li>
                    <li><h3>Status: {residents?.status}</h3></li>
                    <li><h3>Episodes:  {residents?.episode.length}</h3></li>
                </ul>
            </section>
        </article>
    )
}

export default Residents