import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { AxiosError } from "axios";
import { ICoinsData, ISliceState } from "../../types/coins";

const BASE_URL = "https://api.coingecko.com/api/v3/";

export const fetchCoins = createAsyncThunk("coins/fetchCoins", async (params, thunkAPI) => {
	try {
		const { data } = await axios.get(
			BASE_URL + `coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`
		);
		return data;
	} catch (error) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
});

export const fetchPricesFirst = createAsyncThunk("pricesFirst/fetchPricesFirst", async (params: string, thunkAPI) => {
	try {
		const { data } = await axios.get(BASE_URL + `coins/${params}/market_chart?vs_currency=usd&days=90`);
		return {
			name: params,
			price_chart: data.prices.slice(data.prices.length - 45, data.prices.length - 1),
		};
	} catch (error) {
		if (error instanceof AxiosError) {
			return thunkAPI.rejectWithValue(error.message);
		}
	}
});

export const fetchPricesSecond = createAsyncThunk(
	"pricesSecond/fetchPricesSecond",
	async (params: string, thunkAPI) => {
		try {
			const { data } = await axios.get(BASE_URL + `coins/${params}/market_chart?vs_currency=usd&days=90`);
			return {
				name: params,
				price_chart: data.prices.slice(data.prices.length - 45, data.prices.length - 1),
			};
		} catch (error) {
			if (error instanceof AxiosError) {
				return thunkAPI.rejectWithValue(error.message);
			}
		}
	}
);

const initialState: ISliceState = {
	coins: [],
	pricesFirst: {} as ICoinsData,
	pricesSecond: {} as ICoinsData,
	loading: false,
	error: "",
};

const coinsSlice = createSlice({
	name: "coins",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(fetchCoins.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchCoins.fulfilled, (state, action) => {
			state.coins = action.payload;
			state.error = "";
		});
		builder.addCase(fetchCoins.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});

		builder.addCase(fetchPricesFirst.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchPricesFirst.fulfilled, (state, action) => {
			if (action.payload) {
				state.pricesFirst = action.payload;
			}
			state.error = "";
		});
		builder.addCase(fetchPricesFirst.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});

		builder.addCase(fetchPricesSecond.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchPricesSecond.fulfilled, (state, action) => {
			if (action.payload) {
				state.pricesSecond = action.payload;
			}
			state.error = "";
		});
		builder.addCase(fetchPricesSecond.rejected, (state, action) => {
			state.loading = false;
			state.error = action.payload as string;
		});
	},
});

export default coinsSlice.reducer;
