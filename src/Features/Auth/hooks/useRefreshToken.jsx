import useAuth from "./useAuth"

const useRefreshToken = () => {
    const { auth } = useAuth()
    const refreshToken = auth.refresh_token
    localStorage.setItem('refreshToken', refreshToken)
}

export default useRefreshToken