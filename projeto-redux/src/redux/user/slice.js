//configurando o slice do usuário

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  error: null,
  users: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  // definindo as ações
  reducers: {
    createUser: (state, action) => {
      const { name, email } = action.payload;

      if (name.length <= 2 || !email.includes("@")) {
        state.error = "Dados inválidos";
        return;
      }

      state.user = {
        name,
        email,
        address: null,
      };
      state.error = null;
    },

    // ações do logout
    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },

    // ação para adicionar endereço
    addAddress: (state, action) => {
      if (action.payload === "" || action.payload.number === "") {
        alert("Preencha todos os campos de endereço!");
        return { ...state };
      }

      if (state.user === null) {
        alert("Nenhum usuário logado!");
        return { ...state };
      }

      console.log({
        location: action.payload.location,
        number: action.payload.number,
      });

      alert("Endereço adicionado com sucesso!");

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          },
        },
      };
    },

    // ação para deletar endereço
    deleteAddress: (state) => {
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        },
      };
    },

    // ação para buscar usuários
    fetchUsers: (state) => {
      console.log("Buscando usuários...");
    }
  },
});

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers } = userSlice.actions;
export default userSlice.reducer;
