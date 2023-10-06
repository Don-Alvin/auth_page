import * as yup from "yup";

export const myDetailsSchema = yup.object().shape({
	first_name: yup
		.string()
		.required("Please enter your email"),
	password: yup
		.string()
		.matches(lower, { message: "Password must include small letter" })
		.matches(upper, { message: "Password must include capital letter" })
		.matches(length, { message: "Password must have atleast 8 characters" })
		.matches(number, { message: "Password must include a number" })
		.required("Please enter a valid password"),
});
