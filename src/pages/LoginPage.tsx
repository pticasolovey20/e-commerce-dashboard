import { FormComponent } from "../components/FormComponent";
import { RedirectAuthButton } from "../components/RedirectAuthButton";

export const LoginPage = () => {
	const handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<FormComponent
				handleSubmit={handleLogin}
				typographyText="Welcome back!"
				buttonText="Sign In"
			/>
			<RedirectAuthButton
				typographyText="You dont have an account?"
				route="/register"
				buttonText="Register"
			/>
		</>
	);
};
