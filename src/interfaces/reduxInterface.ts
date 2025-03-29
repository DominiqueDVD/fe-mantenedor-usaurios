export interface User {
  id: string;
  name: string;
}

export interface Alert {
  message: string;
  type: 'success' | 'errorAlert' | 'warning' | 'info'; 
  
}

export interface UserState {
  users: User[];
  alerts: Alert[];
  showAddUserModal: boolean;
  showUserDetailsModal: boolean;
  showDeleteModal: boolean;
  userIdToDelete: string | null;
  userToDelete: User | null;
}
