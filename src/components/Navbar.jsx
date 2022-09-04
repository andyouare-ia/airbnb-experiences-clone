import logo from '../assets/airbnb-logo.png'

export default function Navbar() {
  return (
      <nav>
        <img className="nav--logo" src={logo} alt="Airbnb logo" />
      </nav>
  )
}
