
import { useState } from 'react'
import './App.css'
import ColorOption from './components/color/ColorOption'
import Time from './components/time/Time'

function App() {
  const [selectedColor, setSelectedColor] = useState('black')
  const handleColor = (event) =>{
    setSelectedColor(event.target.value)
  }
  //handle onclick background change
  const [bgColor, setBgColor] = useState('white')
  const handleClick = () =>{
      setBgColor('yellow')
    
  }

  // const handlePageClick = () =>{
  //   setBgColor('white')
  // } not working
  // document.addEventListener('click', () => setBgColor('white'))

  
  return (
    <>
      <div className='flex flex-col h-screen justify-center items-center space-y-4' style={{backgroundColor: bgColor}}>
      <h1 className="text-4xl font-semibold p-2 bg-slate-400 " onClick={handleClick}>Lets See The Colorful Time</h1>
          <ColorOption selectedColor={selectedColor} handleColor={handleColor} handleClick={handleClick}></ColorOption>
          <Time selectedColor={selectedColor}></Time>
      </div>
    </>
  )
}

export default App
