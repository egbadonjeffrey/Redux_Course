import { ProductActionTypes } from "../constants/product-action-types";

const initialState = {
  productList: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ProductActionTypes.ALL_PRODUCTS:
      return { ...state, productList: action.payload };
    default:
      return state;
  }
};

export const selectedProductReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ProductActionTypes.SELECTED_PRODUCTS:
      return { ...state, ...payload };
    case ProductActionTypes.REMOVE_PRODUCTS:
      return {};
    default:
      return state;
  }
};
