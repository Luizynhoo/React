import { all, takeEvery } from 'redux-saga/effects';

//Função generator que irá escutar a action de fetchUsers
function* fetchUsers() {
    console.log("Saga: Buscando usuários...");
}

export default all ([
    takeEvery("user/fetchUsers", fetchUsers)
])