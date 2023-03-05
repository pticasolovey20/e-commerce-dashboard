import { FC } from "react";
import { FormComponent } from "../../components/form";
import { RedirectAuthButtonComponent } from "../../components/redicrect-button";

export const LoginPage: FC = (): JSX.Element => {
	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<FormComponent handleSubmit={handleLogin} typographyText="Welcome back!" buttonText="Sign In" />
			<RedirectAuthButtonComponent
				typographyText="You dont have an account?"
				route="/register"
				buttonText="Register"
			/>
		</>
	);
};
