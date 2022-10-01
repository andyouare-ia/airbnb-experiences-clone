import star from '../assets/star.png'

export default function Card(props) {
  let badgeText;
  if (props.item.openSpots === 0) {
    badgeText = "SOLD OUT"
  } else if (props.item.location.toLowerCase() === 'online') {
    badgeText = "ONLINE"
  }
  return (
      <div className="card">
        {badgeText && <div className="card--badge">{badgeText}</div>}
        <img className="card--image" src={props.item.coverImg} />
        <div className="card--info">
          <img className="card--star" src={star} alt="star" />
          <span>{props.item.stats.rating}</span>
          <span className="gray">({props.item.stats.reviewCount}) • {props.item.location}</span>
        </div>
        <p>{props.item.title}</p>
        <p><strong>From ${props.item.price}</strong> / person</p>
      </div>
  )
}
