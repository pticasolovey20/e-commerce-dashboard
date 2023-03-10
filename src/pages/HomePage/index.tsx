import { FC, useEffect, useRef, useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { fetchCoins } from "../../store/slices/coinsSlice";

import { LayoutPageComponent } from "../../components/layout-page";
import { Grid } from "@mui/material";
import { TemplateComponent } from "../../components/template";
import { LineGraphComponent } from "../../components/line-graph";
import { TopPriceComponent } from "../../components/top-price";
import { NewsListComponent } from "../../components/news/news-list";
import { CoinsListComponent } from "../../components/coins/coins-list";

export const HomePage: FC = (): JSX.Element => {
	const dispatch = useAppDispatch();
	const fetchDataRef = useRef(false);

	const fetchData = useCallback(() => dispatch(fetchCoins()), [dispatch]);

	useEffect(() => {
		if (fetchDataRef.current) return;
		fetchDataRef.current = true;
		fetchData();
		return;
	}, [fetchData]);

	return (
		<LayoutPageComponent>
			<Grid container spacing={4} sx={{}}>
				<Grid item lg={8}>
					<Grid container>
						<TemplateComponent lg={12} sm={12}>
							<CoinsListComponent />
						</TemplateComponent>
						<TemplateComponent lg={12} sm={12}>
							<LineGraphComponent />
						</TemplateComponent>
						<TemplateComponent lg={12} sm={12}>
							<TopPriceComponent />
						</TemplateComponent>
					</Grid>
				</Grid>
				<Grid item lg={4}>
					<Grid container>
						<TemplateComponent lg={12}>
							<NewsListComponent />
						</TemplateComponent>
					</Grid>
				</Grid>
			</Grid>
		</LayoutPageComponent>
	);
};
