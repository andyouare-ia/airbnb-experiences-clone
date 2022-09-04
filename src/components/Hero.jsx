import heroImage from '../assets/photo-grid.png'

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero--image" src={heroImage} alt="Grid of people headshots" />
      <h1 className="hero--header" >Online Experiences</h1>
      <h2 className="hero--text" >Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</h2>
    </section>
  )
}
