import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserState, User, Alert } from '../interfaces/reduxInterface';


const initialState: UserState = {
  users: [],
  alerts: [],
  showAddUserModal: false,
  showUserDetailsModal: false,
  showDeleteModal: false,
  userIdToDelete: null,
  userToDelete: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    addAlert: (state, action: PayloadAction<Alert>) => {
      state.alerts.push(action.payload);
    },
    removeAlert: (state, action: PayloadAction<string>) => {
      state.alerts = state.alerts.filter(alert => alert.message !== action.payload);
    },
    setShowAddUserModal: (state, action: PayloadAction<boolean>) => {
      state.showAddUserModal = action.payload;
    },
    setShowUserDetailsModal: (state, action: PayloadAction<boolean>) => {
      state.showUserDetailsModal = action.payload;
    },
    setShowDeleteModal: (
      state,
      action: PayloadAction<{ show: boolean; userId?: string; user?: User }>
    ) => {
      state.showDeleteModal = action.payload.show;
      state.userIdToDelete = action.payload.userId || null;
      state.userToDelete = action.payload.user || null;
    },
  },
});

export const {
  setUsers,
  addAlert,
  removeAlert,
  setShowAddUserModal,
  setShowUserDetailsModal,
  setShowDeleteModal,
} = userSlice.actions;

export default userSlice.reducer;
