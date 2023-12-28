import { createSlice } from "@reduxjs/toolkit";
import {
  companyDetail,
  deleteCompany,
  getBicycles,
  updateStatus,
} from "./bicyclesOperations";

const bicyclesInitialState = {
  bicycles: null,
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

    builder.addCase(companyDetail.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.companyDetail = payload;
    });
    builder.addCase(companyDetail.rejected, (state, { payload }) => {
      state.isLoading = false;
    });
    builder.addCase(companyDetail.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(deleteCompany.fulfilled, (state) => {
      state.isLoading = false;
      state.companyDetail = null;
    });
    builder.addCase(deleteCompany.rejected, (state) => {
      state.isLoading = false;
    });
    builder.addCase(deleteCompany.pending, (state) => {
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
