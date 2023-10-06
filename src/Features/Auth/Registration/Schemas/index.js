import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

const lower = new RegExp("(?=.*[a-z])");
const upper = new RegExp("(?=.*[A-Z])");
const number = new RegExp("(?=.*[0-9])");
const length = new RegExp("(?=.{8,})");

export const registerSchema = yup.object().shape({
	email: yup
		.string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
	password: yup
		.string()
		.matches(lower, { message: "Password must include small letter" })
		.matches(upper, { message: "Password must include capital letter" })
		.matches(length, { message: "Password must have atleast 8 characters" })
		.matches(number, { message: "Password must include a number" })
		.required("Please enter a valid password"),
});
