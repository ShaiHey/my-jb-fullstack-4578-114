import { useContext, useMemo } from "react"
import { AuthContext } from "../components/auth/auth/Auth"
import { jwtDecode } from "jwt-decode"
import User from "../models/user/User"

function useProfilePic() {
    const { jwt } = useContext(AuthContext)!

    const picUrl = useMemo(() => {
        const { picUrl } = jwtDecode<User>(jwt)
        return picUrl
    }, [jwt])

    return picUrl
}

export default useProfilePic;