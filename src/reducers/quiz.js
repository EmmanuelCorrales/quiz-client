export function quizReducers(state={ items: [] }, action) {
  switch(action.type){
    case 'GET_ITEMS':
      state = { items: action.items }
      break;

    case 'GET_TEMS_FAILED':
      break;

    default:
      break;
  }
  return state;
}
