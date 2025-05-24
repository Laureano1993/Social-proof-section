import starImg from '../assets/images/icon-star.svg';


export const Card = ({text}) => {
  return (
    <div className="card">
        <div className="card__stars">
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
          <img src={starImg} alt="" />
        </div>
        <p className='card-text dark-magenta'>{text}</p>
    </div>
  )
}
