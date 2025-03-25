import { createContext, PropsWithChildren, useEffect, useState } from "react";
import { io } from "socket.io-client";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addComment, addPost } from "../../redux/profileSlice";
import { addComment as addCommentFeed, needReload } from "../../redux/feedSlice";
import Post from "../../models/post/Post";
import { v4 } from "uuid";
import SocketMessages from "socket-enums-shaihey";
import Comment from "../../models/comment/Comment";
import useUserId from "../../hooks/useUserId";

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
    const userId = useUserId()
    const following = useAppSelector(state => state.following.following)
    const myPosts = useAppSelector(state => state.profile.posts)

    useEffect(() => {
        const socket = io(import.meta.env.VITE_IO_SERVER_URL);

        socket.onAny((eventName, payload) => {
            if (!payload?.data || payload.from === xClientId) return;

            switch (eventName) {
                case SocketMessages.NEW_POST:
                    const newPost = payload.data as Post;
                    if (newPost.userId === userId) {
                        dispatch(addPost(newPost));
                    }
                    
                    console.log(following.find(f => f.id === newPost.userId))
                    if (following.find(f => f.id === newPost.userId)) {
                        dispatch(needReload(true));
                    }
                break;

                case SocketMessages.NEW_COMMENT: {
                    const newComment = payload.data as Comment;
                    console.log(myPosts.find(p => p.id === newComment.postId))
                    if(myPosts.find(p => p.id === newComment.postId)) {
                        dispatch(addComment(newComment));
                    }
                    
                    console.log(following.find(f => f.id === newComment.userId))
                    if (following.find(f => f.id === newComment.userId)) {
                        dispatch(addCommentFeed(newComment));
                    }
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