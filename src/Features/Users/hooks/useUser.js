import { useQuery } from "@tanstack/react-query";
import { getUser } from "../../../apis/Users";

export const useUser = (id) => {
	const {
		isInitialLoading: isLoading,
		error,
		isError,
		data: user,
	} = useQuery({
		queryKey: ["user"],
		queryFn:() => getUser(id),
	});

	return { isLoading, error, isError, user };
};
