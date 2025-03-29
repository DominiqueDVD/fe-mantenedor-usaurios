export interface Phone {
  id?: string; 
  number: string; 
  citycode: string; 
  countrycode: string; 
}

export interface User {
  password: string;
  id: string; 
  name: string; 
  email: string;
  last_login: string; 
  phones: Phone[]; 
  isactive: boolean; 
}

 export interface AddUserModalProps {
    closeModal: () => void;
    contact: User | null;
    alerts: AlertComponentProps[]; 
    setAlerts: React.Dispatch<React.SetStateAction<AlertComponentProps[]>>;
  }
  

 export interface AlertComponentProps {
    type: 'success' | 'errorAlert' | 'warning' | 'info'; 
    message: string; 

  }
  
 export interface UserDetailsModalProps {
    userData: User;
    showModal: boolean;
    closeModal: () => void;
  }

  
  export interface ConfirmDeleteModalProps {
    show: boolean;
    onClose: () => void;
    onConfirm: () => void;
    userName: string;
  }

 export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
  }
  
  export interface UserTableProps {
    users: User[];
    showAddUserModal: boolean;
    setShowAddUserModal: React.Dispatch<React.SetStateAction<boolean>>;
  }
  
 export interface Country {
    code: string;
    label: string;
    flag: string;
  }
  