import { all } from 'redux-saga/effects';
import user from './user/saga';

//Aonde eu importo todos os sagas da aplicação
//function* = função geradora = async/await
export default function* rootSaga() {
    return yield all([
        user,
    ])
}