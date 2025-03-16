import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../../home/Home";
import List from "../../movies/list/List";
import New from "../../movies/new/New";
import NotFound from "../not-found/NotFound";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<Home />} />
            <Route path="/movies" element={<List />} />
            <Route path="/add-movie" element={<New />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default Routing;