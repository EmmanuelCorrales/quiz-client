import axios from 'axios';

const host = 'http://localhost:3000/quiz_items';

export function getQuizItems(dispatch) {
  return function(dispatch) {
    axios.get(host)
      .then(function(response) {
        dispatch({ type: 'GET_ITEMS', items: response.data });
      })
      .catch(function(err) {
        dispatch({ type: 'GET_ITEMS_FAILED',
          msg: 'Failed to get items' });
      })
  }
}
