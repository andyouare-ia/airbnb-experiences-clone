import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Data from './data'

import './App.css'

function App() {
  const cards = Data.map(item => {
    return <Card
            key={item.id}
            // Pass the entire object:
            item={item}
            // Or spread the item into the Card props
            // {...item} ==> it passes: id={item.id} title={item.title} ...
          />
  })

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
          {cards}
      </section>
    </div>
  )
}

export default App
