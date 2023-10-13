import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../../apis/Users";

const useUsers = () => {
	const {
		isInitialLoading: isLoading,
		error,
		isError,
		data: users,
	} = useQuery({
		queryKey: ["users"],
		queryFn: getAllUsers,
	});

	return { isLoading, error, isError, users };
};

export default useUsers
