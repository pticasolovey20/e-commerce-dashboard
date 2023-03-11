import { FC, useEffect, useRef, useCallback } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { fetchCoins } from "../../store/slices/coinsSlice";

import { LayoutPageComponent } from "../../components/layout-page";
import { Grid } from "@mui/material";
import { TemplateComponent } from "../../components/template";
import { LineGraphComponent } from "../../components/line-graph";
import { TopPriceComponent } from "../../components/top-price";

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
			<Grid container spacing={4}>
				<Grid item lg={8.5}>
					<Grid container>
						<TemplateComponent lg={12} sm={12}>
							<LineGraphComponent />
						</TemplateComponent>
						<TemplateComponent lg={12} sm={12}>
							<TopPriceComponent />
						</TemplateComponent>
					</Grid>
				</Grid>
				<Grid item lg={3.5}>
					<Grid container>
						<TemplateComponent lg={12} height={855}></TemplateComponent>
					</Grid>
				</Grid>
			</Grid>
		</LayoutPageComponent>
	);
};
