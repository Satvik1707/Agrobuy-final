import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGOUT,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_SUCCESS,
  USER_DETAILS_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_DETAILS_RESET,
} from "../constants/userContants";

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
    case USER_LOGOUT:
      return {};
    default:
      return state;
  }
};
export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true };
    case USER_REGISTER_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export const userDetailsReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case USER_DETAILS_REQUEST:
      return { ...state, loading: true };
    case USER_DETAILS_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    case USER_DETAILS_RESET:
      return { user: {} };
    default:
      return state;
  }
};

export const userUpdateProfileReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPDATE_PROFILE_REQUEST:
      return { loading: true };
    case USER_UPDATE_PROFILE_SUCCESS:
      return { loading: false, success: true, userInfo: action.payload };
    case USER_UPDATE_PROFILE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
export const getAllUserReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ALL_USERS_REQUEST":
      return {
        users: [],
        loading: true,
      };
    case "ALL_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "ALL_USERS_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const createBreederReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "CREATE_BREEDER_REQUEST":
      return { ...state, loading: true };
    case "CREATE_BREEDER_SUCCESS":
      return { loading: false, user: action.payload, success: true };
    case "CREATE_BREEDER_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getBreederByIdReducer = (state = {}, action) => {
  switch (action.type) {
    case "GET_BREEDER_REQUEST":
      return { loading: true, ...state };
    case "GET_BREEDER_SUCCESS":
      return { loading: false, user: action.payload };
    case "GET_BREEDER_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const createTransportReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "CREATE_TRANSPORT_REQUEST":
      return { ...state, loading: true };
    case "CREATE_TRANSPORT_SUCCESS":
      return { loading: false, user: action.payload, success: true };
    case "CREATE_TRANSPORT_FAILS":
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const breederListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_BREEDER_LIST_REQUEST":
      return {
        users: [],
        loading: true,
      };
    case "GET_BREEDER_LIST_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_BREEDER_LIST_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const transportListReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "GET_TRANSPORT_LIST_REQUEST":
      return {
        users: [],
        loading: true,
      };
    case "GET_TRANSPORT_LIST_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "GET_TRANSPORT_LIST_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export const getAllBreederReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ALL_USERS_REQUEST":
      return {
        users: [],
        loading: true,
      };
    case "ALL_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "ALL_USERS_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};
export const getAllTransportReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case "ALL_USERS_REQUEST":
      return {
        users: [],
        loading: true,
      };
    case "ALL_USERS_SUCCESS":
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case "ALL_USERS_FAILS":
      return {
        error: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};