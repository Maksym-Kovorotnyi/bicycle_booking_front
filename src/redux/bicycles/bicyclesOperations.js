import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

export const createBicycle = createAsyncThunk(
  "bicycles/create",
  async (body, { rejectWithValue }) => {
    try {
      const response = await axios.post("bicycles", body);
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const getBicycles = createAsyncThunk(
  "bicycles",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("bicycles");
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteBicycle = createAsyncThunk(
  "bicycles/delete",
  async (id, { rejectWithValue, getState }) => {
    try {
      await axios.delete(`bicycles/${id}`);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateStatus = createAsyncThunk(
  "bicycles/update",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      await axios.patch(`bicycles/${id}`, body);
      return;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
