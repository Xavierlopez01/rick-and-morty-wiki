import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import CardComponent from './components/CardComponent'
import LocationInfo from './components/LocationInfo'


function App() {
  const [location, setLocation] = useState()
  const [searchImput, setSearchImput] = useState('')

  useEffect(() => {
    let numberLocation
    if (searchImput === '') {
      numberLocation = Math.floor(Math.random() * (126 - 1) + 1)
    } else {
      numberLocation = searchImput
    }

    const URL = `https://rickandmortyapi.com/api/location/${numberLocation}`
    axios.get(URL)
      .then(res => setLocation(res.data))
      .catch(err => console.log(err))
  }, [searchImput])

  const handdleSubmit = e => {
    e.preventDefault(
      setSearchImput(e.target.search.value)
    )
  }




  return (
    <div className="App">
      <article >
        <img className='img__header' src="https://www.sky-angebote.info/wp-content/uploads/2021/07/rick-morty-sky-ticket-stream.jpg" alt="" />
      </article>
      <h1 className='title'>Rick and Morty Wiki</h1>
      <div className='input'>
      <form  onSubmit={handdleSubmit}>
        <input id='search' type="Number" placeholder='               1 -126' />
        <button className='input-btn'>Search</button>
      </form>
      </div>
      <LocationInfo key={location?.id} location={location} />
      <div className='contain__resident'>
        {
          location?.residents.map(URL => (
            <div className='resident'>
              <CardComponent
                key={URL}
                URL={URL}
              />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App
