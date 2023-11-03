import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loadData = createAsyncThunk(
  "data/loadData",
  async (_, { extra: { client } }) => {
    const { data } = await client.get(
      "https://portfolio-70328-default-rtdb.firebaseio.com/data.json"
    );
    return data;
  }
);

const initialState = {
  status: "pending",
  person: {},
  projects: [],
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadData.pending, (state) => {
      state.status = "loading";
      state.person = {};
      state.projects = [];
    });
    builder.addCase(loadData.fulfilled, (state, { payload }) => {
      state.status = "success";
      state.person = payload.person;
      state.projects = payload.projects;
    });
    builder.addCase(loadData.rejected, (state) => {
      state.status = "error";
      state.person = {};
      state.projects = [];
    });
  },
});

export default dataSlice.reducer;
