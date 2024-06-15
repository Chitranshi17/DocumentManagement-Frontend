import documentService from "./documentService";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  document: {},
  documents: [],
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "",
  edit: {
    document: {},
    isEdit: false,
  },
};

const documentSlice = createSlice({
  name: "document",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(getAllDocuments.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getAllDocuments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.documents = action.payload;
        state.message = "";
      })
      .addCase(getAllDocuments.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getSingleDocument.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getSingleDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.document = action.payload;
        state.message = "";
      })
      .addCase(getSingleDocument.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getCreateDocument.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getCreateDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.document = action.payload;
        state.message = "";
      })
      .addCase(getCreateDocument.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      .addCase(getDeleteDocument.pending, (state, action) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.isError = false;
        state.message = "";
      })
      .addCase(getDeleteDocument.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.document = action.payload;
        state.message = "";
      })
      .addCase(getDeleteDocument.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.isError = true;
        state.message = action.payload;
      })

      // Edit Doc
      .addCase(editDoc.fulfilled, (state, action) => {
        state.edit = { edit: action.payload, isEdit: true };
        state.isLoading = false;
        state.isSuccess = true;
        state.isError = false;
        state.message = "";
      });
  },
});

// Get All Document

export const getAllDocuments = createAsyncThunk(
  "GET_DOCUMENTS",
  async (_, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.getDocuments(token);
    } catch (error) {
      const message = response.data.error.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Single Document

export const getSingleDocument = createAsyncThunk(
  "GET/SINGLEDOCUMENT",
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.getDocument(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Create Document

export const getCreateDocument = createAsyncThunk(
  "CREATE/DOCUMENT",
  async (formData, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.createDocument(formData, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Delete Document

export const getDeleteDocument = createAsyncThunk(
  "DELETE/DOCUMENT",
  async (id, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.deleteDocument(id, token);
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getUpdateDocument = createAsyncThunk(
  "UPDATE/DOCUMENT",
  async (document, thunkAPI) => {
    try {
      const token = await thunkAPI.getState().auth.user.token;
      return await documentService.updateDocument(
        document._id,
        document,
        token
      );
    } catch (error) {
      const message = error.response.data.message;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Edit Documents
export const editDoc = createAsyncThunk("EDIT/DOC", async (data) => {
  return data;
});

export default documentSlice.reducer;
