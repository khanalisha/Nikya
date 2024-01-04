import { PRODUCTFAIL, PRODUCTLOADING, PRODUCTSUCESS } from "./actionType";

const initState = {
  isLoading: false,
  isError: false,
  products: [],
};

export const reducer = (state = initState, action) => {
  switch (action.type) {
    case PRODUCTLOADING:
      return { ...state, isLoading: true, isError: false };
    case PRODUCTSUCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        products: action.payload,
      };

    case PRODUCTFAIL:
      return { ...state, isLoading: false, isError: false };
  }
};
