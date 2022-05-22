import { BrowserRouter, Routes, Route} from "react-router-dom";

import Catalog from "./Catalog";
import Showtimes from './Showtimes';

export default function App() {
    return (
        <BrowserRouter>
            <div className="header">
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/sessoes/:movieId" element={<Showtimes />} />
            </Routes>
        </BrowserRouter>
    )
}