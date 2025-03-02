import User from "../../models/user"
import Comment from "../../models/comment"

const postIncludes = {
    include: [
        {
            model: Comment,
            include: [ User ]
        },
        User
    ]
}

export default postIncludes