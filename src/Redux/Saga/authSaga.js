// import { takeLatest, call, put, select } from "@redux-saga/core/effects"
// import ActionTypes from "../Constant/ActionType";
// import { loginSuccessful, loginFailed } from "../Action/authAction";
// import Auth from "../Service/auth";

// const getCredentials = state => state.credentials;

// export default function* sagaLogin() {
//   yield takeLatest([ActionTypes.LOGIN, ActionTypes.TRY_AGAIN], function*() {
//     try {
//       const credentials = yield select(getCredentials);
//       const userData = yield call(Auth.login, credentials);
//       yield put(loginSuccessful(userData));
//     } catch (error) {
//       yield put(loginFailed(error));
//     }
//   });
// }

// export{
//     sagaLogin
// }