import './index.css'
import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {cmntDetails, isCmntLiked, onDeleteCmnt} = props
  const {name, comment, id, isLiked, bgColor} = cmntDetails

  const onLikeClicked = () => {
    isCmntLiked(id)
  }

  const onDeleteClicked = () => {
    onDeleteCmnt(id)
  }

  const likedImg = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedText = isLiked ? 'like-el' : ''

  const cmntTime = formatDistanceToNow(new Date())
  return (
    <li className="list-element">
      <div>
        <div className="hd-con">
          <p className={`logo ${bgColor}`}>{name[0]}</p>
          <h1 className="name">{name}</h1>
          <p>{cmntTime}</p>
        </div>
        <p className="cmnt">{comment}</p>
        <div className="icon-con">
          <div className="like-con" onClick={onLikeClicked}>
            <img src={likedImg} alt="like" />
            <button className={`btn ${likedText}`}>Like</button>
          </div>
          <button
            className="btn"
            data-testid="delete"
            onClick={onDeleteClicked}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
              alt="delete"
            />
          </button>
        </div>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem
