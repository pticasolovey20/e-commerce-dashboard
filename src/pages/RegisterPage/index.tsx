import { FormComponent } from "../../components/form";
import { RedirectAuthButton } from "../../components/redicrect-button";

export const RegisterPage = () => {
	const handleRegister = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<>
			<FormComponent handleSubmit={handleRegister} typographyText="Welcome there!" buttonText="Sign Up" />
			<RedirectAuthButton typographyText="Do you have an account?" route="/login" buttonText="Login" />
		</>
	);
};