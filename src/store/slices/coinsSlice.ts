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
		const coins = await axios.get(BASE_URL + `coins/${params}/market_chart?vs_currency=usd&days=90`);
		const singleCoin = await axios.get(
			BASE_URL +
				`coins/markets?vs_currency=usd&ids=${params}&order=market_cap_desc&per_page=100&page=1&sparkline=false`
		);
		return {
			name: params,
			data: coins.data.prices.slice(coins.data.prices.length - 45, coins.data.prices.length - 1),
			singleCoin: singleCoin.data,
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
