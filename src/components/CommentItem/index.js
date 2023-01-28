// Write your code here

import './index.css'

const like =
  'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
const liked =
  'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'

const CommentItem = props => {
  const {commentItem, onLike, onDelete, postedTime} = props

  const {name, comment, id, isLike, initialClassName} = commentItem
  const imgUrl = isLike ? liked : like
  const className = isLike ? 'liked' : 'like'
  const click = () => {
    onLike(id)
  }

  const remove = () => {
    onDelete(id)
  }

  return (
    <li className="item">
      <div className="comments-container ">
        <div className={initialClassName}>
          <p>{name[0].toUpperCase()}</p>
        </div>
        <div className="username-time-container">
          <h1 className="username">{name}</h1>
          <p className="time">{postedTime}</p>
        </div>
      </div>
      <p className="comment">{comment}</p>
      <div className="buttons-container">
        <div className="like-container">
          <img className="like" src={imgUrl} alt="like" />

          <button
            type="button"
            className={`button1 ${className}`}
            onClick={click}
          >
            Like
          </button>
        </div>

        <button
          type="button"
          onClick={remove}
          data-testid="delete"
          className="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default CommentItem
