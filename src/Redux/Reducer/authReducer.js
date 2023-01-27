// import ActionTypes from "../Constant/ActionType";

// const initialState = {
//     status: LOGOUT,
//     user: null,
//     error: null,
//     credentials: null
//   };
  
//   export default (state = initialState, { type, payload }) => {
//     switch (type) {
//       case LOGIN: {
//         return {
//           ...state,
//           status: type,
//           credentials: payload
//         };
//       }
  
//       case LOGIN_SUCCESSFUL: {
//         return {
//           ...state,
//           status: type,
//           user: payload
//         };
//       }
  
//       case LOGIN_FAILED: {
//         return {
//           ...state,
//           status: type,
//           error: payload
//         };
//       }
  
//       case TRY_AGAIN: {
//         return {
//           ...state,
//           status: type
//         };
//       }
  
//       case LOGOUT:
//       default: {
//         return initialState;
//       }
//     }
//   };