import { PropsWithChildren, useEffect } from "react";
import { io } from "socket.io-client";
import { useAppDispatch } from "../../redux/hooks";
import { addPost } from "../../redux/profileSlice";
import Post from "../../models/post/Post";

function Io({ children }: PropsWithChildren): JSX.Element {

    const dispatch = useAppDispatch()

    useEffect(() => {
        const socket = io(import.meta.env.VITE_IO_SERVER_URL);

        socket.onAny((eventName, payload) => {
            switch (eventName) {
                case 'newPost':
                    const newPostPayload = payload as Post
                    dispatch(addPost(newPostPayload))
                break;
            }
        })
    }, [])

    return (
        <>
            {children}
        </>
    )
}

export default Io;