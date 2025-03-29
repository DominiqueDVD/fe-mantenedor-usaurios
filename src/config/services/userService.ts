import axios from 'axios';
import { User } from '../../interfaces/userDataInterface';

const API_URL = import.meta.env.VITE_API_URL;

export const addUser = async (userData: User): Promise<User> => {
  try {
    const response = await axios.post(API_URL, {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      token: 'defaultToken',
      phones: userData.phones,
    });
    return response.data;
  } catch (error) {
    console.error('Error al agregar el usuario:', error);
    throw new Error('Error al agregar el usuario');
  }
};

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    throw new Error('Error al obtener los usuarios');
  }
};

export const getUserDetails = async (userId: string) => {
  const response = await fetch(`${API_URL}/${userId}`);

  if (!response.ok) {
    throw new Error('Error al obtener los detalles del usuario');
  }

  return await response.json();
};

interface ApiError {
  mensaje: string;
}

interface ApiResponse {
  mensaje: string;
}

export const deleteUser = async (userId: string): Promise<ApiResponse> => {
  try {
    const response = await fetch(`${API_URL}/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      const errorData: ApiError = await response.json();
      throw new Error(errorData.mensaje || 'Error al eliminar el usuario');
    }

    return await response.json();
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error('❌ Error al eliminar el usuario:', error.message);
      throw error;
    }
    throw new Error('Ocurrió un error desconocido');
  }
};
