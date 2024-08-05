import {useState} from 'react'
function App() {
  const [color,setColor]=useState("olive")
  return (
    <>
    <div className='w-full h-screen  duration-200' style={{backgroundColor:color}}></div>
<div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'> 
  <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-xl px-3 py-2'>
    <button onClick={()=>setColor("red")} className='border-2 border-black outline-none px-4 rounded-xl text-xl font-bold py-1 hover:tracking-wider' style={{backgroundColor:"red"}}>Red</button>
    <button onClick={()=>setColor("green")}className='border-2 border-black outline-none px-4 rounded-xl text-xl font-bold py-1 hover:tracking-wider' style={{backgroundColor:"green"}}>Green</button>
    <button onClick={()=>setColor("blue")}className='border-2 border-black outline-none px-4 rounded-xl text-xl font-bold py-1 hover:tracking-wider' style={{backgroundColor:"blue"}}>Blue</button>
    <button onClick={()=>setColor("yellow")}className='border-2 border-black outline-none px-4 rounded-xl text-xl font-bold py-1 hover:tracking-wider' style={{backgroundColor:"yellow"}}>yellow</button>
    <button onClick={()=>setColor("white")} className='border-2 border-black outline-none px-4 rounded-xl text-xl font-bold py-1 hover:tracking-wider' style={{backgroundColor:"while"}}>white</button>
    </div>
</div>
    </>
  )
}

export default App
