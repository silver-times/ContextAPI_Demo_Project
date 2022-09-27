const shopReducers = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        items: [...state.items, action.payload],
        count: state.count + 1,
      };
    case "DELETE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
        count: state.count - 1,
      };
    default:
      return state;
  }
};

export default shopReducers;
