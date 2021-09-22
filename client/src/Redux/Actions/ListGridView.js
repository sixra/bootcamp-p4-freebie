import { categoriesListGridView } from "../ActionTypes"

export const showGridView = () => {
  return {
    type: categoriesListGridView.SHOW_GRID_VIEW,
  };
};
export const hideGridView = () => {
  return {
    type: categoriesListGridView.HIDE_GRID_VIEW,
  };
};