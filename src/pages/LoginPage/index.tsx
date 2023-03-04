import { FC } from "react";
import { FormComponent } from "../../components/form";
import { RedirectAuthButton } from "../../components/redicrect-button";

export const LoginPage: FC = (): JSX.Element => {
	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<FormComponent handleSubmit={handleLogin} typographyText="Welcome back!" buttonText="Sign In" />
			<RedirectAuthButton typographyText="You dont have an account?" route="/register" buttonText="Register" />
		</>
	);
};
