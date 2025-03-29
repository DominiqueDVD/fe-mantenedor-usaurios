import React from 'react';
import { ConfirmDeleteModalProps } from '../../interfaces/userDataInterface';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const ConfirmDeleteModal: React.FC<ConfirmDeleteModalProps> = ({
  show,
  onClose,
  onConfirm,
  userName,
}) => {
  if (!show) return null;

  const handleConfirm = () => {
    onConfirm(); 
    onClose();  
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2 className="modal-title">Eliminar</h2>

          <FontAwesomeIcon
            icon={faTimes}
            className="close-icon"
            onClick={() => onClose()}
          />
        </div>
        <br />
        <p className="delete-user">
          ¿Estás seguro de que deseas eliminar el usuario 
          <strong> {userName}</strong>?
        </p>
        <br />
        <div className="modal-footer">
          <button type="submit" className="cancel-btn" onClick={onClose}>
            Cancelar
          </button>
          <button type="button" className="submit-btn" onClick={handleConfirm}>
            Confirmar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
