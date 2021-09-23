import { categoriesListGridView } from "../ActionTypes";


export const listGridViewReducer = (state = false, action) => {
  switch (action.type) {
    case categoriesListGridView.SHOW_GRID_VIEW:
      return true;
    case categoriesListGridView.HIDE_GRID_VIEW:
      return false;
    default:
      return state;
  }
}