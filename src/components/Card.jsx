import star from '../assets/star.png'

export default function Card(props) {
  return (
      <div className="card">
        {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
        <img className="card--image" src={props.img} />
        <div className="card--info">
          <img className="card--star" src={star} alt="star" />
          <span>{props.rating}</span>
          <span className="gray">({props.reviewCount}) • {props.country}</span>
        </div>
        <p>{props.title}</p>
        <p><strong>From ${props.price}</strong> / person</p>
      </div>
  )
}
