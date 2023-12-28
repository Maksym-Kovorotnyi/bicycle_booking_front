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

export const companyDetail = createAsyncThunk(
  "companies/detail",
  async (id, { rejectWithValue, getState }) => {
    const { accessToken } = getState().auth;
    try {
      const response = await axios.get(`companies/detail/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const deleteCompany = createAsyncThunk(
  "companies/delete",
  async (id, { rejectWithValue, getState }) => {
    const { accessToken } = getState().auth;
    try {
      const response = await axios.delete(`companies/delete/${id}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const updateStatus = createAsyncThunk(
  "bicycles_update",
  async ({ id, body }, { rejectWithValue }) => {
    try {
      const response = await axios.patch(`bicycles/${id}`, body);
      return response.data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
