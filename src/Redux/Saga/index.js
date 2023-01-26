import { takeEvery, all } from "@redux-saga/core/effects";
import ActionTypes from "../Constant/ActionType";
import { handleAddCust, handleCust, handleDelCust, handleUpdateCust } from "./custSaga";
function* watchAll(){
    yield all([
        takeEvery(ActionTypes.GET_CUSTOMERS,handleCust),
        takeEvery(ActionTypes.ADD_CUSTOMERS,handleAddCust),
        takeEvery(ActionTypes.UPDATE_CUSTOMERS,handleUpdateCust),
        takeEvery(ActionTypes.DEL_CUSTOMERS,handleDelCust)
    ])
}

export default watchAll