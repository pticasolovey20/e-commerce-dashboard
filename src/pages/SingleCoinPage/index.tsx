import { FC, useMemo } from "react";
import { useStyles } from "./styles";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/redux";
import { ICoin } from "../../types/coins";

import { LayoutPageComponent } from "../../components/layout-page";
import { TemplateComponent } from "../../components/template";
import { Avatar, Grid, Typography } from "@mui/material";
import { TrendComponent } from "../../components/trend";

export const SingleCoinPage: FC = (): JSX.Element => {
	const classes = useStyles();
	const navigate = useNavigate();
	const { id } = useParams();
	const coins: ICoin[] = useAppSelector((state) => state.coinsReducer.coins);

	const coin = useMemo(() => {
		return coins.find((item: ICoin) => item.name === (id as string));
	}, [coins, id]);

	return (
		<LayoutPageComponent>
			{coin && (
				<>
					<Grid item xs={12} className={classes.nameBlock}>
						<Typography variant="h1" className={classes.name}>
							{coin.name}
						</Typography>
					</Grid>
					<TemplateComponent>
						<Grid item sm={6} xs={12} className={classes.symbolBlock}>
							<Avatar src={coin.image} />
							<Typography variant="h2">{coin.symbol.toUpperCase()}</Typography>
						</Grid>
						<Grid item sm={6} xs={12} className={classes.priceBlock}>
							<Typography variant="body1" className={classes.beforePrice}>
								Price: $
							</Typography>
							<Typography className={classes.price}>{coin.current_price}</Typography>
						</Grid>
					</TemplateComponent>
					<Grid container spacing={4}>
						<Grid item sm={6} xs={12}>
							<TemplateComponent>
								<Typography className={classes.changePrice}>Change Price:</Typography>
								<TrendComponent value={coin.price_change_24h} symbol={"$"} />
							</TemplateComponent>
						</Grid>
						<Grid item sm={6} xs={12}>
							<TemplateComponent>
								<Typography className={classes.changePrice}>Change Price:</Typography>
								<TrendComponent value={coin.price_change_percentage_24h.toFixed(0)} symbol={"%"} />
							</TemplateComponent>
						</Grid>
					</Grid>
				</>
			)}
		</LayoutPageComponent>
	);
};
