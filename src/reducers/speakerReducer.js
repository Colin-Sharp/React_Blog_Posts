export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_SPEAKER":
      return action.payload;
    default:
      return state;
  }
};
