import { useState, useEffect } from 'react';
import { getUsers } from '../../config/services/userService';
import { User } from '../../interfaces/userDataInterface';
import PaginationComponent from '../../components/pagination-component/paginationComponent';
import UserTableComponent from '../../components/user-table/usertableComponent';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './home.css';

const HomePageComponent = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const [showAddUserModal, setShowAddUserModal] = useState(false);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers();
        console.log('Usuarios obtenidos:', data);

        const sortedUsers = data.sort((a, b) => {
          const dateA = new Date(a.created || new Date()).getTime();  
          const dateB = new Date(b.created || new Date()).getTime(); 
          return dateB - dateA; 
        });
        
        setUsers(sortedUsers);
      } catch (error) {
        console.error('Error al cargar los usuarios:', error);
      }
    };

    fetchUsers();
  }, []);

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const currentUsers = users.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleAddContact = () => {
    setShowAddUserModal(true);
  };

  return (
    <div className="home-container">
      <div className="header-container">
        <p className="home-title">Mantenedor de usuarios</p>
        <button className="add-btn" onClick={handleAddContact}>
          <FontAwesomeIcon icon={faPlus} /> Añadir Contacto
        </button>
      </div>

      <UserTableComponent
        users={currentUsers}
        showAddUserModal={showAddUserModal}
        setShowAddUserModal={setShowAddUserModal}
      />

      <PaginationComponent
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default HomePageComponent;
