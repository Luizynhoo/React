//configurando o slice do usuário

import { createSlice } from "@reduxjs/toolkit";
import { act } from "react";

const initialState = {
  user: null,
  error: null,
  users: [],
  loading: false,
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
      state.loading = true;
      state.error = null;
    },

    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
      state.error = null;
    },

    fetchUsersFail: (state, action) => {
      state.loading = false;
      state.error = action.payload || "Erro ao buscar usuários";
    },

    fetchUsersById: (state, action) => {
      console.log("Ação para buscar usuário por ID");
    },

    fetchUsersByIdSuccess: (state, action) => {
      console.log("Sucesso ao buscar usuário por ID");
      console.log(action.payload);
    },

    fetchUsersByIdFail: (state, action) => {
      console.log("Falha ao buscar usuário por ID");
    },
  },
});

export const {
  createUser,
  logoutUser,
  addAddress,
  deleteAddress,
  fetchUsers,
  fetchUsersSuccess,
  fetchUsersFail,
  fetchUsersById,
} = userSlice.actions;
export default userSlice.reducer;
