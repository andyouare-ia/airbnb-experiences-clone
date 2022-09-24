import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

import './App.css'

function App() {
  const cardElement = Data.map(exp => {
    return <Card
            img={exp.coverImg}
            rating={exp.stats.rating}
            reviewCount={exp.stats.reviewCount}
            country={exp.location}
            title={exp.title}
            price={exp.price}
          />
  })
  console.log(cardElement)
  return (
    <div className="App">
      <Navbar />
      <Hero />
      {cardElement}
    </div>
  )
}

export default App
