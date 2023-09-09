import { apiMain } from "./apis";


export const getStudents = async () => {
    const pokemonData  = await apiMain.get(`/estudiantes`)
    return pokemonData.data;
}