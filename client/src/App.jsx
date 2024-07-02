import { useEffect, useState } from 'react'
import axios from 'axios'

import './App.css'

function App() {
  const [shoes, setShoes] = useState([])
  useEffect(() => {
    const fetchShoes = async () => {
      try {
        const res = await axios.get('http://localhost:4000/api/shoes')
        setShoes(res.data)

      } catch (err) {
        console.error('fetching error', err)

      }
    }
    fetchShoes()
  }, [])
  return (
    <>
      <div>
        <h1>List of shoes</h1>
        {shoes.map((shoe) => (
          <div key={shoe._id} >
            {shoe.imageShoes.map((img, index) => (
              <img key={index} src={img} alt={`Image ${index + 1}`} />
            ))}
            {/* <img src={shoe.imageShoes} alt={shoe.name} /> */}
            <h3>{shoe.name}</h3>
          </div>
        ))}
      </div>
    </>
  )
}

export default App

