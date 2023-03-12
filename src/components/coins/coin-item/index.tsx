import { FC, useState } from "react";
import { useStyles } from "./styles";
import { ICoinItem } from "../../../types/props";

import { Box, CardMedia, Grid, IconButton, Typography } from "@mui/material";
import { SvgSelectorComponent } from "../../svg-selector";

export const CoinItemComponent: FC<ICoinItem> = ({ coin }: ICoinItem): JSX.Element => {
	const [isClicked, setIsClicked] = useState(false);
	const classes = useStyles();

	return (
		<Grid key={coin.id} item className={classes.item}>
			<Box className={classes.top}>
				<Typography fontSize="25px">{coin.symbol.toUpperCase()}</Typography>
				<CardMedia className={classes.imgBlock}>
					<img src={coin.image} alt={coin.atl_date} className={classes.img} />
				</CardMedia>
			</Box>
			<Box className={classes.bottom}>
				<Box className={classes.priceBlock}>
					<Typography>Price: </Typography>
					<Typography className={classes.price}>
						{coin.current_price.toFixed(coin.current_price > 1000 ? 2 : 3)}$
					</Typography>
				</Box>
				<IconButton onClick={() => setIsClicked(!isClicked)}>
					<SvgSelectorComponent icon={isClicked ? "pinned-yes" : "pinned-no"} />
				</IconButton>
			</Box>
		</Grid>
	);
};
