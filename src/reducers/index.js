import { combineReducers } from 'redux';
import { quizReducers } from './quiz';

export default combineReducers({
  quizReducers: quizReducers
});
