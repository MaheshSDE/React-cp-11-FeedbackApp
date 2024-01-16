// Write your React code here.
import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onClickEmoji = () => {
    this.setState({isFeedbackSelected: true})
  }

  render() {
    const {resources} = this.props
    const {emojis} = resources
    const {loveEmojiUrl} = resources
    const {isFeedbackSelected} = this.state

    return (
      <div className="bg-container">
        <div className="card-container">
          {!isFeedbackSelected && (
            <>
              <h1 className="heading">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="unOrderList">
                {emojis.map(eachItem => (
                  <li className="list" key={eachItem.id}>
                    <button
                      className="button"
                      type="button"
                      onClick={this.onClickEmoji}
                    >
                      <img
                        src={eachItem.imageUrl}
                        alt={eachItem.name}
                        className="image"
                      />
                      <p className="name">{eachItem.name}</p>
                    </button>
                  </li>
                ))}
              </ul>
            </>
          )}
          {isFeedbackSelected && (
            <>
              <img src={loveEmojiUrl} alt="love emoji" className="image" />
              <h1>Thank You</h1>
              <p>
                We will use your feedback to improve our support performance.
              </p>
            </>
          )}
        </div>
      </div>
    )
  }
}
export default Feedback
