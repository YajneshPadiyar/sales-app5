

export default (state={}, action) => {

  switch (action.type){
    case "A":
    return {...state};
    default:
    return state;
  }
}
