import { FormComponent } from "../components/FormComponent";
import { RedirectAuthButton } from "../components/RedirectAuthButton";

export const RegisterPage = () => {
	const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<FormComponent
				handleSubmit={handleRegister}
				typographyText="Welcome there!"
				buttonText="Sign Up"
			/>
			<RedirectAuthButton
				typographyText="Do you have an account?"
				route="/login"
				buttonText="Login"
			/>
		</>
	);
};
