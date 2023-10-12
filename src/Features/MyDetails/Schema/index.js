import * as yup from "yup";

export const myDetailsSchema = yup.object().shape({
	first_name: yup
		.string()
		.required("Please enter your first name"),
    last_name: yup
		.string()
		.required("Please enter your last name"),
    phone_number: yup
		.string()
		.required("Please enter your your phone number"),
    gender: yup
		.string()
		.required("Please select your gender"),
    age_bracket: yup
		.string()
		.required("Please select your age bracket"),
    professional: yup
		.string()
		.required("Please enter your profession"),
    current_location: yup
		.string()
		.required("Please enter your current location"),
    home_sub_county: yup
		.string()
		.required("Please enter your home sub county"),
    home_ward: yup
		.string()
		.required("Please enter your home ward"),    
});
