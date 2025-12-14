//configurando o slice do usuário

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: null
}

export const userSlice = createSlice ({
    name: 'user',
    initialState,
    // definindo as ações 
    reducers: {

    }
})

export default userSlice.reducer;