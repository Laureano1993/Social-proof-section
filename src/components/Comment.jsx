

export const Comment = ({name,job,description,img}) => {
  return (
    <div className="comment">
        <div className="comment__top">
            <div className="comment__top__img">
                <img className="person-img" src={img} alt={'image of '+name} />
            </div>
            <div className="comment__top__info">
                <p className="name">{name}</p>
                <p className="job">{job}</p>
            </div>
        </div>
        <div className="comment__bottom">
            <p className="description">{description}</p>
        </div>
    </div>
  )
}
