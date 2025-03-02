import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../home/Home";
import NotFound from "../not-found/NotFound";
import Gifts from "../../gifts/gifts/Gifts";
import NewGift from "../../gifts/new/NewGift";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/gifts" element={<Gifts />} />
            <Route path="/new" element={<NewGift />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default Routing;