import { AxiosInstance } from "axios";

abstract class AuthAware {
    constructor(
        public axiosInstance: AxiosInstance
    ) { }
}

export default AuthAware;