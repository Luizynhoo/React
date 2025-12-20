import { all, takeEvery, call, put, takeLatest } from "redux-saga/effects";
import { fetchUsersSuccess, fetchUsersFail } from "./slice";

import axios from "axios";

// API USERS: https://jsonplaceholder.typicode.com/users/

//Função generator que irá escutar a action de fetchUsers
function* fetchUsers() {
  try {
    //usando o yueld call para fazer a chamada da API de forma síncrona
    const response = yield call(
        axios.get,
            "https://jsonplaceholder.typicode.com/users/")
    yield put(fetchUsersSuccess(response.data));

  } catch (error) {
    yield put(fetchUsersFail(error.message));
  }
}

function* fetchUsersById(action) {
  try {
    const userId = action.payload;
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users/${userId}`
    );
    yield put(fetchUsersSuccess([response.data])); 
  } catch (error) {
    yield put(fetchUsersFail(error.message));
  }
}

export default all([
  takeLatest("user/fetchUsers", fetchUsers)
,takeEvery("user/fetchUsersById", fetchUsersById)
]);


//takeLatest - irá pegar a última ação disparada, cancelando as anteriores
//takeEvery - irá pegar todas as ações disparadas
