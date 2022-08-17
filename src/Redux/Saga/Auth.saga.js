import { all, call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import Api from '...'

function* fetchUser(action) {
   try {
      const user = yield call(Api.signUpApi, action.payload.userId);
      yield put({type: "USER_FETCH_SUCCEEDED", user: user});
   } catch (e) {
      yield put({type: "USER_FETCH_FAILED", message: e.message});
   }
}


function* watchsignup() {
  yield takeEvery("USER_FETCH_REQUESTED", fetchUser);
}

export function* authsaga() {
    yield all({
        watchsignup
    })
}

export default mySaga;