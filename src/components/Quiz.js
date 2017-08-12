import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getQuizItems } from '../actions/quiz';
import QuizItem from './QuizItem';

class Quiz extends React.Component {

  componentDidMount() {
    this.props.getQuizItems();
  }

  onClick() {
    Object.values(this.refs).forEach(key => {
      key.checkAnswer();
    });
  }

  render() {
    var items = this.props.quizReducers.items.map(function(item) {
      return <QuizItem ref={ item.id } key={ item.id } item={ item } />
    });

    return(
      <div>
        <h1>Quiz</h1>
        { items }
        <button onClick={ this.onClick.bind(this) }>
          Check Answer
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { quizReducers: state.quizReducers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getQuizItems: getQuizItems
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);
