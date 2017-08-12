import React from 'react';

class QuizItem extends React.Component {

  render() {
    return(
      <div>
        <p>{ this.props.item.question }</p>
        <input ref='user_answer' type='text'
          placeholder='Enter your answer.' />
      </div>
    )
  }
}

export default QuizItem;
