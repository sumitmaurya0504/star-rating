import { useState } from 'react'
import './App.css'
import { FaStar } from 'react-icons/fa'

function App({ noOfStar = 5 }) {
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  function handleClick(getCurrentIndex){
    setRating(getCurrentIndex)
  }
  function handleMouseEnter(getCurrentIndex){
    setHover(getCurrentIndex)
  }
  function handleMouseLeave(){
    setHover(rating)
  }

  return (
    <div className='bg-black h-screen w-screen text-2xl  flex flex-row justify-center' >
      {
        [...Array(noOfStar)].map((_, index) => {
          index += 1
          return<FaStar
          key={index}
          className={index <= (hover|| rating)? 'text-amber-300':'text-white'}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            size={80}
          />

        })
      }

    </div>
  )
}

export default App
