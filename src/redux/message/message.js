import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Action Thunk
export const retrieveMessage = createAsyncThunk('get-message', async () => {
  const res = fetch('http://localhost:5000/api/v1/message');

  const data = (await res).json();
  return data;
});

// Reducers
const messageSlice = createSlice({
  name: 'message',
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(
      retrieveMessage.fulfilled,
      (state, action) => action.payload,
    );
  },
});

export default messageSlice.reducer;
