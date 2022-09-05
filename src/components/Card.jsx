import image from '../assets/Katie-Zaferes.png'
import star from '../assets/star.png'

export default function Card() {
  return (
      <div className="card">
        <img className="card--image" src={image} alt="Katie Zaferes" />
        <div className="card--info">
          <img className="card--star" src={star} alt="star" />
          <span>5.0</span>
          <span className="gray">(6) • USA</span>
        </div>
        <p>Life lessons with Katie Zaferes</p>
        <p><strong>From $316</strong> / person</p>
      </div>
  )
}
