import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { furniture_api } from "../../utilrs/axiosInterceptors";

const getFurniture = createAsyncThunk(
  "furniture/getAll",
  async (_, { rejectWithValue }) => {
    const res = await furniture_api.get("/");
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);
const getFurnitureTop5 = createAsyncThunk(
  "furniture/getCategory-top5",
  async (id, { rejectWithValue }) => {
    const res = await furniture_api.get("/category-top5/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const getFurnitureByCategoryId = createAsyncThunk(
  "furniture/getAll",
  async (id, { rejectWithValue }) => {
    const res = await furniture_api.get("/category/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);
const getFurnitureBySetId = createAsyncThunk(
  "furniture/getBySetId",
  async (id, { rejectWithValue }) => {
    const res = await furniture_api.get("/furniture-set-info/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);
const getFurnitureByCategoryIdOnHover = createAsyncThunk(
  "furniture/getAllByCategoryId",
  async (id, { rejectWithValue }) => {
    const res = await furniture_api.get("/category/" + id);
    if (res.status === 200) {
      return res.data;
    } else {
      rejectWithValue(res.data);
    }
  }
);

const getFurnitureById = createAsyncThunk(
  "furniture/getById",
  async (id, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.get("/" + id);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);
const deleteFurniture = createAsyncThunk(
  "furniture/delete",
  async (id, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.delete("/" + id);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);

const updateFurnitures = createAsyncThunk(
  "furniture/update",
  async (data, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.put("/" + data.id, data.data);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);

const postFurniture = createAsyncThunk(
  "furniture/add",
  async (data, { rejectWithValue, dispatch }) => {
    let furniture_res = await furniture_api.post("/", data);
    if (furniture_res.status === 200) {
      return furniture_res.data;
    } else {
      rejectWithValue(furniture_res.data);
    }
  }
);

const initialState = {
  isLoading: false,
  furnitures: [],
  furniture: null,
  furnitureOnHover: [],
  error: null,
};

export const FurnitureSlice = createSlice({
  name: "furniture",
  initialState,
  reducers: {},
  extraReducers: {
    [getFurnitureBySetId.fulfilled]: (state, action) => {
      state.furnitures = action.payload;
    },
    [getFurnitureBySetId.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurnitureTop5.fulfilled]: (state, action) => {
      state.furnitureOnHover = action.payload;
    },
    [getFurnitureTop5.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurnitureByCategoryIdOnHover.fulfilled]: (state, action) => {
      state.furnitureOnHover = action.payload;
    },
    [getFurnitureByCategoryId.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurnitureByCategoryId.fulfilled]: (state, action) => {
      state.furnitures = action.payload;
    },
    [getFurnitureByCategoryId.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurnitureById.fulfilled]: (state, action) => {
      state.furniture = action.payload;
    },
    [getFurnitureById.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [getFurniture.fulfilled]: (state, action) => {
      state.furnitures = action.payload;
    },
    [getFurniture.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [postFurniture.fulfilled]: (state, action) => {},
    [postFurniture.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [updateFurnitures.fulfilled]: (state, action) => {},
    [updateFurnitures.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
    [deleteFurniture.fulfilled]: (state, action) => {},
    [deleteFurniture.rejected]: (state, action) => {
      console.log("Furniture err : ", action.payload);
    },
  },
});

export {
  getFurniture,
  postFurniture,
  updateFurnitures,
  getFurnitureTop5,
  deleteFurniture,
  getFurnitureById,
  getFurnitureByCategoryId,
  getFurnitureByCategoryIdOnHover,
  getFurnitureBySetId,
};

export default FurnitureSlice.reducer;
