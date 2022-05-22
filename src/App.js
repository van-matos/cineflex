import { BrowserRouter, Routes, Route} from "react-router-dom";

import Catalog from "./Catalog";
import Showtimes from './Showtimes';
import Theater from './Theater';

export default function App() {
    return (
        <BrowserRouter>
            <div className="header">
                CINEFLEX
            </div>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/sessoes/:movieId" element={<Showtimes />} />
                <Route path="/assentos/:showtimeId" element={<Theater />} />
            </Routes>
        </BrowserRouter>
    )
}