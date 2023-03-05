import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

export const SingleCoinPage: FC = (): JSX.Element => {
	const navigate = useNavigate();
	const { id } = useParams();

	return (
		<div>
			<h1>{id}</h1>
			<button onClick={() => navigate(-1)}>BACK</button>
		</div>
	);
};
