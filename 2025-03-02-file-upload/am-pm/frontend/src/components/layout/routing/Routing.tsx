import { Navigate, Route, Routes } from "react-router-dom";
import List from "../../products/list/List";
import NotFound from "../not-found/NotFound";
import AddProduct from "../../products/add/AddProduct";

function Routing(): JSX.Element {
    return (
        <Routes>
            <Route path="/" element={<Navigate to={"/products/list"} />} />
            <Route path="/products/list" element={<List />} />
            <Route path="/products/add" element={<AddProduct />} />
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}

export default Routing;