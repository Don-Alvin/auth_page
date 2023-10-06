import * as yup from "yup";

export const myDetailsSchema = yup.object().shape({
	first_name: yup
		.string()
		.required("Please enter your first"),
    second_name: yup
		.string()
		.required("Please enter your second name"),
    phone_number: yup
		.string()
		.required("Please enter your your phone number"),
    second: yup
		.string()
		.required("Please enter your email"),
    first_name: yup
		.string()
		.required("Please enter your email"),
    first_name: yup
		.string()
		.required("Please enter your email"),
});
