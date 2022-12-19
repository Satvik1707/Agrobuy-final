import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAILS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAILS,
} from "../constants/productConstant";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };
    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAILS:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const addProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_REQUEST":
      return { eloading: true, products: [] };
    case "UPDATE_PRODUCT_SUCCESS":
      return { eloading: false, products: action.payload };
    case "UPDATE_PRODUCT_FAILS":
      return { eloading: false, eerror: action.payload };
    default:
      return state;
  }
};
export const editProductReducer = (state = {}, action) => {
  switch (action.type) {
    case "UPDATE_PRODUCT_REQUEST":
      return { loading: true, ...state };
    case "UPDATE_PRODUCT_SUCCESS":
      return { updatesuccess: true, updateloading: false };
    case "UPDATE_PRODUCT_FAILS":
      return { updateloading: false, updateerror: action.payload };
    default:
      return state;
  }
};

export const getProductByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_PRODUCTBYID_REQUEST":
      return { loading: true, ...state };
    case "GET_PRODUCTBYID_SUCCESS":
      return { loading: false, product: action.payload };
    case "GET_PRODUCTBYID_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const addSeedsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_SEEDS_REQUEST":
      return { loading: true, ...state };
    case "ADD_SEEDS_SUCCESS":
      return { loading: false, product: action.payload };
    case "ADD_SEEDS_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const listMySeedsReducer = (state = { seeds: [] }, action) => {
  switch (action.type) {
    case "SEEDS_LIST_MY_REQUEST":
      return {
        loading: true,
      };
    case "SEEDS_LIST_MY_SUCCESS":
      return {
        loading: false,
        seeds: action.payload,
      };
    case "SEEDS_LIST_MY_FAIL":
      return {
        loading: false,
        error: action.payload,
      };
    case "SEEDS_LIST_MY_RESET":
      return { seeds: [] };
    default:
      return state;
  }
};

export const getAllSeedReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ALL_SEEDS_REQUEST":
      return {
        users: [],
        loading: true,
      };
    case "ALL_SEEDS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "ALL_SEEDS_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const seedListReducer = (state = { seeds: [] }, action) => {
  switch (action.type) {
    case "SEEDS_LIST_REQUEST":
      return {
        seeds: [],
        loading: true,
      };
    case "SEEDS_LIST_SUCCESS":
      return {
        seeds: action.payload,
        loading: false,
      };
    case "SEEDS_LIST_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const allSeedReducer = (state = { seeds: [] }, action) => {
  switch (action.type) {
    case "ALL_APPROVED_SEEDS_REQUEST":
      return {
        seeds: [],
        loading: true,
      };
    case "ALL_APPROVED_SEEDS_SUCCESS":
      return {
        ...state,
        seeds: action.payload,
        loading: false,
      };
    case "ALL_APPROVED_SEEDS_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const createBidReducer = (state = { bid: [] }, action) => {
  switch (action.type) {
    case "CREATE_BID_REQUEST":
      return {
        bid: [],
        loading: false,
      };
    case "CREATE_BID_SUCCESS":
      return {
        bid: action.payload,
        loading: false,
      };
    case "CREATE_BID_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const openBidListReducer = (state = { bids: [] }, action) => {
  switch (action.type) {
    case "LIST_BID_REQUEST":
      return {
        bids: [],
        loading: false,
      };
    case "LIST_BID_SUCCESS":
      return {
        bids: action.payload,
        loading: false,
      };
    case "LIST_BID_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const closedBidListReducer = (state = { bids: [] }, action) => {
  switch (action.type) {
    case "LIST_CLOSEDBID_REQUEST":
      return {
        bids: [],
        loading: false,
      };
    case "LIST_CLOSEDBID_SUCCESS":
      return {
        bids: action.payload,
        loading: false,
      };
    case "LIST_CLOSEDBID_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
