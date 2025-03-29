import React, { useEffect, useState } from 'react';
import { AlertComponentProps } from '../../interfaces/userDataInterface';
import './alertComponent.css';

const AlertComponent: React.FC<AlertComponentProps> = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false); 
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`alert ${type}`}>
      <div className="alert-content">
        <span className="alert-message">{message}</span>
      </div>
    </div>
  );
};

export default AlertComponent;
