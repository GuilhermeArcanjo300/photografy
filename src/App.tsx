import './App.css'
import About from './components/about'
import Home from './components/home'
import Navbar from './components/navbar'
import Shoots from './components/shoots'

function App() {
  return (
    <div className='flex flex-col bg-black min-h-screen w-screen'>
      <Navbar />
      <Home/>
      <Shoots />
      <About />
    </div>
  )
}

export default App
