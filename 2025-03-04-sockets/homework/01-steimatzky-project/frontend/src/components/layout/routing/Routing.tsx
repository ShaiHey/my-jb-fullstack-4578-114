import { Navigate, Route, Routes } from "react-router-dom";
import NotFound from "../not-found/NotFound";
import List from "../../books/list/List";
import NewBook from "../../books/new/NewBook";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/home"} />} />
            <Route path="/home" element={<List />} />
            <Route path="/create" element={<NewBook />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default Routing;