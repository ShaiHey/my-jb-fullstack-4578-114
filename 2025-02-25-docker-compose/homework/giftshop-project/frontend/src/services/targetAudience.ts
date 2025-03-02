import axios from "axios";
import TargetAudience from "../models/TargetAudience";

class TargetAudienceService {
    async getTargetAudience(): Promise<TargetAudience[]> {
        const response = await axios.get<TargetAudience[]>(`${import.meta.env.VITE_REST_SERVER_URL}/audiences`);
        return response.data;
    }
}

const audiencesService = new TargetAudienceService();
export default audiencesService;