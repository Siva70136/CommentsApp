import {Component} from 'react'
import './index.css'
import {v4} from 'uuid'
import {formatDistanceToNow} from 'date-fns'
import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {nameInput: '', commentInput: '', commentList: []}

  addComment = event => {
    event.preventDefault()

    const {nameInput, commentInput} = this.state

    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLike: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onCommentChange = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onNameChange = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  onLike = id => {
    const {commentList} = this.state
    const filtered = commentList.map(each => {
      if (each.id === id) {
        return {
          ...each,
          isLike: !each.isLike,
        }
      }
      return each
    })
    this.setState({
      commentList: filtered,
    })
  }

  onDelete = id => {
    const {commentList} = this.state

    const filterSet = commentList.filter(each => each.id !== id)

    this.setState({
      commentList: filterSet,
    })
  }

  render() {
    const {commentList, nameInput, commentInput} = this.state

    return (
      <div className="app-container">
        <div className="comment-container">
          <h1 className="head">Comments</h1>
          <div className="data-container">
            <div className="">
              <form className="comments-form" onSubmit={this.addComment}>
                <p className="description">
                  Say something about 4.0 Technologies
                </p>
                <input
                  type="text"
                  className="name-box"
                  placeholder="Your Name"
                  onChange={this.onNameChange}
                  value={nameInput}
                />
                <textarea
                  rows="4"
                  cols="30"
                  type="textarea"
                  className="comment-box"
                  placeholder="Your Comment"
                  onChange={this.onCommentChange}
                  value={commentInput}
                />
                <button type="submit" className="button">
                  Add Comments
                </button>
              </form>
            </div>
            <img
              className="img"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="total-comments">
            <span className="count">{commentList.length}</span>Comments
          </p>

          <ul className="comment-items">
            {commentList.map(each => (
              <CommentItem
                commentItem={each}
                key={each.id}
                postedTime={formatDistanceToNow(new Date())}
                onLike={this.onLike}
                onDelete={this.onDelete}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Comments
