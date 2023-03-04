import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";

const BASE_URL = "https://api.coingecko.com/api/v3/";

interface CoinData {
	name: string;
	data: any;
}

interface CoinsState {
	coins: [];
	favoriteCoins: any;
	loading: boolean;
	error: string | unknown;
}

export const fetchFavoriteCoins = createAsyncThunk("coins/fetchFavoriteCoins", async (params: string, thunkAPI) => {
	try {
		const { data } = await axios.get(BASE_URL + `coins/${params}/market_chart?vs_currency=usd&days=1`);
		return {
			name: params,
			data,
		} as CoinData;
	} catch (error) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
});

const initialState = {
	coins: [],
	favoriteCoins: [],
	loading: false,
	error: "",
} as CoinsState;

const coinsSlice = createSlice({
	name: "coins",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchFavoriteCoins.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchFavoriteCoins.fulfilled, (state, action) => {
			state.favoriteCoins.push(action.payload);
			state.error = "";
		});
		builder.addCase(fetchFavoriteCoins.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload;
		});
	},
});

export default coinsSlice.reducer;
