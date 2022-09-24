import star from '../assets/star.png'

export default function Card(props) {
  let badgeText;
  if (props.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.country.toLowerCase() === 'online') {
    badgeText = "ONLINE"
  }
  return (
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
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
