import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  name: string;
  email: string;
}

const initialState: UserState = {
  name: '',
  email: '',
};

const loginReducer  = (state: UserState, action: PayloadAction<UserState>) => {
  state.name = action.payload.name;
  state.email = action.payload.email;
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: loginReducer 
  },
});

export const { login } = userSlice.actions;
export const userReducer =userSlice.reducer;