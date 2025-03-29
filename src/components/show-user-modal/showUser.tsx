import { UserDetailsModalProps } from '../../interfaces/userDataInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './showUser.css';
import User from '../../assets/image/userImage.png';

const UserDetailsModal = ({
  userData,
  showModal,
  closeModal,
}: UserDetailsModalProps) => {
  if (!showModal) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <p className="modal-title">
            <h2>Detalles del Usuario</h2>
          </p>

          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={() => closeModal()}
          />
        </div>
        <br />

        <div className="user-info">
          <img src={User} alt="" />
          <div className="userText">
            <p>
              <strong>Nombre:</strong> {userData.name}
            </p>
            <p>
              <strong>Email:</strong> {userData.email}
            </p>
            <p>
              <p>
                <strong>Teléfono: </strong>
                {userData.phones
                  ?.map(
                    (phone) =>
                      `(${phone.countrycode}) ${phone.citycode} ${phone.number}`
                  )
                  .join(', ')}
              </p>
            </p>
            <p>
              <strong>Estado:</strong>{' '}
              {userData.isactive ? 'Activo' : 'Inactivo'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsModal;
