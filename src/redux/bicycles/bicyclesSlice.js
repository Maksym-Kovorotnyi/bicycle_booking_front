import { createSlice } from "@reduxjs/toolkit";
import { deleteBicycle, getBicycles, updateStatus } from "./bicyclesOperations";

const bicyclesInitialState = {
  bicycles: [],
  isLoading: false,
};

export const bicyclesSlice = createSlice({
  name: "bicycles",
  initialState: bicyclesInitialState,
  extraReducers: (builder) => {
    builder.addCase(getBicycles.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getBicycles.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getBicycles.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.bicycles = payload;
    });

    builder.addCase(deleteBicycle.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteBicycle.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteBicycle.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(updateStatus.fulfilled, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateStatus.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(updateStatus.pending, (state) => {
      state.isLoading = true;
    });
  },
  reducers: {
    toggleModal: (state) => {
      state.isModal = !state.isModal;
    },
  },
});

export const { toggleModal } = bicyclesSlice.actions;
export const bicyclesReducer = bicyclesSlice.reducer;
