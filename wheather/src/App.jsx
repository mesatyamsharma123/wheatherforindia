import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import b from '../public/back.avif'
import Home from './component/home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex flex-col bg-slate-900 items-center justify-center min-h-screen min-w-screen bg-cover' style={{backgroundImage:`url(${b})`}}>
      <Home/>
    </div>
  )
}

export default App
