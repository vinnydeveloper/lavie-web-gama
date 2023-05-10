import { AxiosResponse } from "axios";
import api from "./api";

export interface PsicologoPayload {
  nome: string
  email: string
  senha: string
  apresentacao: string
}
 async function cadastrarPsicologo(payload:PsicologoPayload): Promise<AxiosResponse>{
    try {
      const response = await api.post('/psicologos', payload)

      return response
    } catch (error) {
      console.error(error)
       throw error
    }
}

export interface LoginPayload{
  email: string
  senha: string
}

async function login(payload: LoginPayload): Promise<AxiosResponse>{
  try {
    const response = await api.post('/login', payload)

    return response
  } catch (error) {
    console.error(error)
     throw error
  }
}


export const servicePsicologo = {
  cadastrarPsicologo,
  login
}