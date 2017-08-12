import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getQuizItems } from '../actions/quiz';
import QuizItem from './QuizItem';

class Quiz extends React.Component {

  componentDidMount() {
    this.props.getQuizItems();
  }

  render() {
    var items = this.props.quizReducers.items.map(function(item) {
      return <QuizItem key={ item.id } item={ item } />
    });

    return(
      <div>
        <h1>Quiz</h1>
        { items }
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
