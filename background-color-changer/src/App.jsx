import { useState } from "react"

function App() {

  const [color, setColor] = useState("")

  const changeColor=(e)=>{
      setColor(e.target.textContent)
  }
  return (
    <>
    <div style={{backgroundColor:color}} className="w-full h-screen flex justify-center ">
      <div className="w-auto h-20 bg-red-300 mt-10 flex justify-evenly">
      <button onClick={changeColor} className="w-32 h-10 bg-orange-500 rounded m-5">Orange</button>
      <button onClick={changeColor} className="w-32 h-10 bg-pink-600 rounded m-5">Pink</button>
      <button onClick={changeColor} className="w-32 h-10 bg-amber-400 rounded m-5">Yellow</button>
      <button onClick={changeColor} className="w-32 h-10 bg-emerald-600 rounded m-5">Green</button>
      <button onClick={changeColor} className="w-32 h-10 bg-yellow-600 rounded m-5">Brown</button>
      <button onClick={changeColor} className="w-32 h-10 bg-cyan-500 rounded m-5">Blue</button>
      <button onClick={changeColor} className="w-32 h-10 bg-violet-500 rounded m-5">Purple</button>
      </div>
    </div>
      
    </>
  )
}

export default App
