import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  productListReducer,
  productDetailsReducer,
  addProductReducer,
  getProductByIdReducer,
  addSeedsReducer,
  listMySeedsReducer,
  editProductReducer,
  getAllSeedReducer,
  seedListReducer,
  allSeedReducer,
  createBidReducer,
  openBidListReducer,
  closedBidListReducer,
} from "./reducers/productReducer";
import {
  userLoginReducer,
  userRegisterReducer,
  userDetailsReducer,
  userUpdateProfileReducer,
  getAllUserReducer,
  createBreederReducer,
  getBreederByIdReducer,
  createTransportReducer,
  breederListReducer,
  transportListReducer,
  getAllBreederReducer,
  getAllTransportReducer,
} from "./reducers/userReducers";
import { cartReducer } from "./reducers/cartReducer";
import {
  orderCreateReducer,
  orderDetailsReducer,
  orderPayReducer,
  orderListMyReducer,
} from "./reducers/orderReducer";

const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : {};

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];

const reducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  getAllUser: getAllUserReducer,
  addProduct: addProductReducer,
  getProductById: getProductByIdReducer,
  createBreeder: createBreederReducer,
  addSeeds: addSeedsReducer,
  listMySeeds: listMySeedsReducer,
  editProduct: editProductReducer,
  getBreederById: getBreederByIdReducer,
  createTransport: createTransportReducer,
  breederList: breederListReducer,
  transportList: transportListReducer,
  getAllBreeder: getAllBreederReducer,
  getAllTransport: getAllTransportReducer,
  seedList: seedListReducer,
  getAllSeed: getAllSeedReducer,
  allSeed: allSeedReducer,
  createBid: createBidReducer,
  openBidList: openBidListReducer,
  closedBidList: closedBidListReducer,
});
const initialState = {
  cart: {
    cartItems: cartItemsFromStorage,
    shippingAddress: shippingAddressFromStorage,
  },
  userLogin: { userInfo: userInfoFromStorage },
};
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
