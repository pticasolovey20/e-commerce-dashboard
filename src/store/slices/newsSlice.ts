import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ISliceState } from "../../types/news";

const BASE_URL = "https://min-api.cryptocompare.com/data/v2/";

export const fetchNews = createAsyncThunk("news/fetchNews", async (params, thunkAPI) => {
	try {
		const { data } = await axios.get(BASE_URL + `news/?lang=EN`);
		return data.Data;
	} catch (error) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
});

const initialState: ISliceState = {
	news: [],
	loading: false,
	error: "",
};

const newsSlice = createSlice({
	name: "news",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchNews.pending, (state, action) => {
			state.loading = false;
		});
		builder.addCase(fetchNews.fulfilled, (state, action) => {
			state.news = action.payload;
		});
		builder.addCase(fetchNews.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},
});

export default newsSlice.reducer;
