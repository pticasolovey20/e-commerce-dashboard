import { FC, useRef, useEffect } from "react";
import { useAppSelector } from "../../../hooks/redux";
import { ICoin } from "../../../types/coins";
import { useStyles } from "./styles";

import { Box, Grid } from "@mui/material";
import { CoinItemComponent } from "../coin-item";

export const CoinsListComponent: FC = (): JSX.Element => {
	const slider = useRef<HTMLDivElement>();

	const classes = useStyles();
	const coins: ICoin[] = useAppSelector((state) => state.coinsReducer.coins);

	useEffect(() => {
		const element = slider.current;
		if (element) {
			const onWheel = (event: WheelEvent) => {
				event.preventDefault();
				element.scrollTo({
					left: element.scrollLeft + event.deltaY * 4,
					behavior: "smooth",
				});
			};

			element.addEventListener("wheel", onWheel);

			return () => element.removeEventListener("wheel", onWheel);
		}
	}, []);

	return (
		<Grid container>
			<Box ref={slider} className={classes.slider}>
				{coins.map((coin) => (
					<CoinItemComponent key={coin.id} coin={coin} />
				))}
			</Box>
		</Grid>
	);
};
