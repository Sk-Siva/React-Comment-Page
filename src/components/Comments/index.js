import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import CommentItem from '../CommentItem'
import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

class Comments extends Component {
  state = {count: 0, commentsList: [], name: '', comment: '', bgColor: ''}

  onNameChange = event => {
    const {name} = this.state
    this.setState({name: event.target.value})
  }

  onTextareaChange = event => {
    const {comment} = this.state
    this.setState({comment: event.target.value})
  }

  isCmntLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  onDeleteCmnt = id => {
    const {commentsList, count} = this.state

    const filteredCmntList = commentsList.filter(each => each.id !== id)

    this.setState(prevState => ({
      commentsList: filteredCmntList,
      count: prevState.count - 1,
    }))
  }

  onSubmitComment = event => {
    event.preventDefault()
    const {name, comment, count} = this.state

    const bgContainerColor =
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]

    const newComment = {
      id: uuidv4(),
      name,
      comment,
      isLiked: false,
      bgColor: bgContainerColor,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      count: prevState.count + 1,
      name: '',
      comment: '',
    }))
  }

  render() {
    const {count, commentsList, name, comment} = this.state
    return (
      <div className="bg-con">
        <div className="card-con">
          <div className="input-con">
            <h1>Comments</h1>
            <p>Say something about 4.0 Technologies</p>
            <form className="form-con">
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={this.onNameChange}
              />
              <textArea
                className="textAreaEl"
                value={comment}
                rows="5"
                cols="50"
                placeholder="Your Comment"
                onChange={this.onTextareaChange}
              ></textArea>
              <button
                type="submit"
                className="add-btn"
                onClick={this.onSubmitComment}
              >
                Add Comment
              </button>
            </form>
          </div>
          <img
            className="cmnt-img"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
            alt="comments"
          />
        </div>
        <hr />
        <div className="cmnt-count-con">
          <p className="cmnt-count-el">{count}</p>
          <p>Comments</p>
        </div>
        <ul className="list-con">
          {commentsList.map(eachCmnt => (
            <CommentItem
              key={eachCmnt.id}
              cmntDetails={eachCmnt}
              isCmntLiked={this.isCmntLiked}
              onDeleteCmnt={this.onDeleteCmnt}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments
