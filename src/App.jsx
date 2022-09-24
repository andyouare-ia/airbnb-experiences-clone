import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Photo from './assets/Katie-Zaferes.png'

import './App.css'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Card
        img={Photo}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
      <Card
        img={Photo}
        rating={5.0}
        reviewCount={6}
        country="USA"
        title="Life lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
