import { FC, useRef, useCallback, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import { fetchNews } from "../../../store/slices/newsSlice";
import { INewsData } from "../../../types/news";
import { useStyles } from "./styles";

import { Box } from "@mui/material";
import { NewsItemComponent } from "../news-item";

export const NewsListComponent: FC = (): JSX.Element => {
	const fetchDataRef = useRef(false);
	const classes = useStyles();
	const dispatch = useAppDispatch();
	const news: INewsData[] = useAppSelector((state) => state.newsReducer.news);

	const fetchData = useCallback(() => dispatch(fetchNews()), [dispatch]);

	useEffect(() => {
		if (fetchDataRef.current) return;
		fetchDataRef.current = true;
		fetchData();
		return;
	}, [fetchData]);

	return (
		<Box className={classes.root}>
			{news.slice(0, 7).map((item: INewsData) => (
				<NewsItemComponent key={item.id} item={item} />
			))}
		</Box>
	);
};
