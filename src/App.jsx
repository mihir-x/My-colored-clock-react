
import { useState } from 'react'
import './App.css'
import ColorOption from './components/color/ColorOption'
import Time from './components/time/Time'

function App() {
  const [selectedColor, setSelectedColor] = useState('black')
  const handleColor = (event) =>{
    setSelectedColor(event.target.value)
  }
  return (
    <>
      <div className='flex flex-col h-screen justify-center items-center space-y-4'>
          <ColorOption selectedColor={selectedColor} handleColor={handleColor}></ColorOption>
          <Time selectedColor={selectedColor}></Time>
      </div>
    </>
  )
}

export default App
