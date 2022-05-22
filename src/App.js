import { BrowserRouter, Routes, Route} from "react-router-dom";
import Catalog from "./Catalog";

export default function App() {
    return (
        <BrowserRouter>
            <div className="header">
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Catalog />} />
            </Routes>
        </BrowserRouter>
    )
}