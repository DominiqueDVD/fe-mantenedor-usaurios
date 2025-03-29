
import { deleteUser, getUserDetails, addUser } from '../config/services/userService';
import { User } from '../interfaces/userDataInterface';
import { Alert } from '../interfaces/reduxInterface';

export const handleDelete = async (
  userIdToDelete: string | null, 
  setUsersList: React.Dispatch<React.SetStateAction<User[]>>, 
  setAlerts: React.Dispatch<React.SetStateAction<Alert[]>>, 
  setShowDeleteModal: React.Dispatch<React.SetStateAction<boolean>>
): Promise<void> => {
  if (!userIdToDelete) return;

  try {
    await deleteUser(userIdToDelete);
    setUsersList((prevUsers) =>
      prevUsers.filter((user) => user.id !== userIdToDelete)
    );
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      { message: 'Usuario eliminado correctamente', type: 'success' },
    ]);
    setShowDeleteModal(false);
  } catch (error: unknown) {
      console.log(error)
    setAlerts((prevAlerts) => [
      ...prevAlerts,
      { message: "No es posible eliminar este usuario", type: 'errorAlert' },
    ]);
  }
};

export const handleUserView = async (
    userId: string,
    setUserData: React.Dispatch<React.SetStateAction<User | null>>,
    setShowUserDetailsModal: React.Dispatch<React.SetStateAction<boolean>>,
    setAlerts: React.Dispatch<React.SetStateAction<Alert[]>>
  ): Promise<void> => {
    try {
      const data = await getUserDetails(userId);
      setUserData(data);
      setShowUserDetailsModal(true);
  
   
    } catch (error) {
      console.error('Error al obtener los detalles del usuario:', error);
  
      const errorMessage =
        error instanceof Error ? error.message : 'Error desconocido al cargar el usuario';
  
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        { message: errorMessage, type: 'errorAlert' },
      ]);
    }
  };
  

export const handleSubmit = async (
    values: User, 
    setAlerts: React.Dispatch<React.SetStateAction<Alert[]>>, 
    closeModal: () => void
  ): Promise<void> => {
    try {
      const response = await addUser(values);
      console.log('Valores enviados:', values);
  
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        { message: 'Usuario agregado exitosamente', type: 'success' },
      ]);
  
      console.log('Usuario agregado correctamente:', response);
    } catch (error) {
      console.log(error);
  
      setAlerts((prevAlerts) => [
        ...prevAlerts,
        { message: 'Error al agregar el usuario', type: 'errorAlert' },
      ]);
    }
  
    closeModal();
  };
  