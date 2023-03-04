export const formatDate = (value: number): string => {
	const date = new Date(value);

	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const format = (value: number): string | number => (value < 10 ? "0" + value : value);

	return `${format(day)}.${format(month)}.${format(year)} | ${format(hours)}:${format(minutes)}`;
};
