import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faTimes,
  faTrash,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { User } from '../../interfaces/userDataInterface';
import { formatDate } from '../../utils/dateUtils';
import AlertComponent from '../alert-component/alertComponent';
import ConfirmDeleteModal from '../delete-user-modal/deleteModalComponent';
import { handleDelete } from '../../handlers/userHandlers';
import AddUserModal from '../add-user-modal/addUserComponent';
import { UserTableProps } from '../../interfaces/userDataInterface';
import './userTableComponent.css';

const UserTableComponent = ({
  users,
  showAddUserModal,
  setShowAddUserModal,
}: UserTableProps) => {
  const [alerts, setAlerts] = useState<
    {
      message: string;
      type: 'success' | 'errorAlert' | 'info' | 'warning';
    }[]
  >([]);
  const [editingContact, setEditingContact] = useState<User | null>(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [userIdToDelete, setUserIdToDelete] = useState<string | null>(null);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [usersList, setUsersList] = useState<User[]>(users);

  useEffect(() => {
    setUsersList(users);
  }, [users]);

  const handleEdit = (contact: User) => {
    setEditingContact(contact);
    setShowAddUserModal(true);
  };

  const closeAddUserModal = () => {
    setEditingContact(null);
    setShowAddUserModal(false);
  };

  const openDeleteModal = (userId: string, user: User) => {
    setUserIdToDelete(userId);
    setUserToDelete(user);
    setShowDeleteModal(true);
  };

  const closeDeleteModal = () => {
    setShowDeleteModal(false);
    setUserIdToDelete(null);
  };

  return (
    <div className="table-container">
      {alerts.map((alert, index) => (
        <AlertComponent key={index} type={alert.type} message={alert.message} />
      ))}

      <br />

      <table className="contact-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Email</th>
            <th>Último Ingreso</th>
            <th>Contacto</th>
            <th>Activo</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usersList.length > 0 ? (
            usersList.map((contact, index) => (
              <tr
                key={contact.id}
                className={`contact-row ${
                  contact.isactive ? 'active' : 'inactive'
                } ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}
              >
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>
                  {contact.last_login
                    ? formatDate(contact.last_login)
                    : 'Fecha no disponible'}
                </td>
                <td>
                  {contact.phones.map((phone) => (
                    <div key={phone.id}>
                      ({phone.countrycode}) {phone.citycode} {phone.number}
                    </div>
                  ))}
                </td>
                <td className="status-icon">
                  <FontAwesomeIcon
                    icon={contact.isactive ? faCheck : faTimes}
                    className={
                      contact.isactive ? 'active-icon' : 'inactive-icon'
                    }
                  />
                </td>
                <td className="action-icons">
                  <FontAwesomeIcon
                    icon={faEye}
                    className="edit-icon"
                    onClick={() => handleEdit(contact)}
                  />
                  <FontAwesomeIcon
                    icon={faTrash}
                    className="delete-icon"
                    onClick={() => openDeleteModal(contact.id, contact)}
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={6}>No hay datos disponibles</td>
            </tr>
          )}
        </tbody>
      </table>
      {showAddUserModal && (
        <AddUserModal
          closeModal={closeAddUserModal}
          contact={editingContact}
          alerts={alerts}
          setAlerts={setAlerts}
        />
      )}

      {showDeleteModal && (
        <ConfirmDeleteModal
          show={showDeleteModal}
          onClose={closeDeleteModal}
          onConfirm={() =>
            handleDelete(
              userIdToDelete,
              setUsersList,
              setAlerts,
              setShowDeleteModal
            )
          }
          userName={userToDelete?.name || ''}
        />
      )}
    </div>
  );
};

export default UserTableComponent;
