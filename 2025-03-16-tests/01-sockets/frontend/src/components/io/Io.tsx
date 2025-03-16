import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "../../redux/hooks";
import { addComment, addPost } from "../../redux/profileSlice";
import { addComment as addCommentFeed } from "../../redux/feedSlice";
import Post from "../../models/post/Post";
import { v4 } from "uuid";
import SocketMessages from "socket-enums-shaihey";
import Comment from "../../models/comment/Comment";

interface SocketContextInterface {
    xClientId: string;
}

export const SocketContext = createContext<SocketContextInterface>({
    xClientId: ''
});

function Io({ children }: PropsWithChildren): JSX.Element {

    const [ xClientId ] = useState<string>(v4())
    const value = { xClientId }

    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_IO_SERVER_URL);

        socket.onAny((eventName, payload) => {
            console.log(eventName, payload)
            if (payload.from !== xClientId) {
                switch (eventName) {
                    case SocketMessages.NEW_POST:
                        const newPostPayload = payload.data as Post
                        dispatch(addPost(newPostPayload))
                    break;
                    
                    case SocketMessages.NEW_COMMENT:
                        const newCommentPayload = payload.data as Comment
                        dispatch(addComment(newCommentPayload))
                        dispatch(addCommentFeed(newCommentPayload))
                    break;
                }
            }
        })

        return () => {
            socket.disconnect();
        }

    }, [])

    return (
        <SocketContext.Provider value={value}>
            {children}
        </SocketContext.Provider>
    )
}

export default Io;