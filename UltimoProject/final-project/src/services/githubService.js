import api from "./api";

export async function getRepository(repoName) {
  try {
    const response = await api.get(`repos/${repoName}`);
    return {
      name: response.data.full_name,
    };
  } catch (error) {
    throw new Error("Repositório não encontrado ou erro na API.");
  }
}
