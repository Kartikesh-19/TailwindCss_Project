import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Step 1: Define the state type
interface BusinessState {
  businessData: string;
}

// Step 2: Initial state with proper type
const initialState: BusinessState = {
  businessData: "",
};

// Step 3: Create slice
const DummySlice = createSlice({
  name: "business_slice",
  initialState,
  reducers: {
    setBusinessData: (state, action: PayloadAction<string>) => {
      state.businessData = action.payload;
    },
  },
});

// Step 4: Export reducer and actions
export default DummySlice.reducer;
export const { setBusinessData } = DummySlice.actions;
