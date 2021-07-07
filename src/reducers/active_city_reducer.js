const activeCityReducer = (state, action) => {
  
  if (state === undefined)
  {
    return [];
  }

  if (action.type === "SET_ACTIVE_CITY")
  {
    return action.payload;
  }
  else
  {
    return state;
  }
}

export default activeCityReducer;