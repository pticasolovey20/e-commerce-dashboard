import { FC } from "react";
import { useStyles } from "./styles";
import { INewsItem } from "../../../types/props";

import { Box, Button, CardMedia, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const NewsItemComponent: FC<INewsItem> = ({ item }: INewsItem): JSX.Element => {
	const classes = useStyles();

	return (
		<Box className={classes.item}>
			<Grid container>
				<Grid item lg={2.5} className={classes.imgBlock}>
					<CardMedia>
						<img src={item.imageurl} alt={item.source} className={classes.img} />
					</CardMedia>
				</Grid>
				<Grid
					item
					lg={9}
					sx={{
						display: "flex",
						flexDirection: "column",
						justifyContent: "space-between",
					}}
				>
					<Typography className={classes.title}>{item.title}</Typography>
					<Link to={item.url} target="_blank" className={classes.buttonBlock}>
						<Button className={classes.button}>read more</Button>
					</Link>
				</Grid>
			</Grid>
		</Box>
	);
};
