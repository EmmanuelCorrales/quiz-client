import React from 'react';
import { numberToEnglish } from '../utilities/utilities';

class QuizItem extends React.Component {

  constructor(state) {
    super(state);
    this.state = { user_answer: '',
                   checked: false }
  }

  checkAnswer() {
    this.setState({
      user_answer: this.refs.user_answer.value,
      checked: true
    });
  }

  evaluateAnswer() {
    var user_answer = this.state.user_answer.toLowerCase();
    if (!isNaN(user_answer)){
      user_answer = numberToEnglish(user_answer);
    }
    console.log("user_answer = " + user_answer);

    var correct_answer = this.props.item.answer.toLowerCase();
    if(!isNaN(correct_answer)) {
      correct_answer = this.numberToEnglish(correct_answer);
    }
    console.log("correct_answer = " + correct_answer);

    var status;
    if (this.state.checked){
      status = (user_answer === correct_answer)?<p>Correct</p>:<p>Incorrect</p>;
    }
    return status;
  }


  render() {
    return(
      <div>
        <p>{ this.props.item.question }</p>
        <input ref='user_answer' type='text'
          placeholder='Enter your answer.' />
        { this.evaluateAnswer() }
      </div>
    )
  }
}

export default QuizItem;
