import { FC } from "react";
import { Outlet, Navigate } from "react-router-dom";

export const PrivateRouteComponent: FC = (): JSX.Element => {
	const auth = true;

	return auth ? <Outlet /> : <Navigate to="/login" />;
};
