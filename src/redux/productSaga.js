import { takeEvery } from "redux-saga/effects";
import { PRODUCT_LIST } from "./constant.js";

function* getProducts() {
  let data = yield fetch("https://admin.naxa.com.np/api/projects");
  data = yield data.json();
  console.warn("action is called ");
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
}

export default productSaga;
