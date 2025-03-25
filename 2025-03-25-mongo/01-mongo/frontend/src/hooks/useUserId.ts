import { useContext, useMemo } from "react"
import { AuthContext } from "../components/auth/auth/Auth"
import { jwtDecode } from "jwt-decode"
import User from "../models/user/User"

function useUserId() {
    const authContext = useContext(AuthContext)

    const userId = useMemo(() => {
        if (!authContext?.jwt) return null
        try {
            const { id } = jwtDecode<User>(authContext.jwt)
            return id
        } catch (error) {
            console.error("Invalid JWT", error)
            return null
        }
    }, [authContext?.jwt])

    return userId
}

export default useUserId