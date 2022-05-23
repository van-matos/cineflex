import { BrowserRouter, Routes, Route} from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";

import Catalog from './Catalog';
import Showtimes from './Showtimes';
import Theater from './Theater';
import Footer from './Footer';
import Success from './Success';

export default function App() {
    const [footer, setFooter] = useState( {
        posterURL: "",
        title: "",
        weekday: "",
        date: "",
        showtime: "",
        seats: [],
        booking: {}
    });
    
    return (
        <BrowserRouter>
            <Header>
                CINEFLEX
            </Header>
            <Routes>
                <Route path="/" element={<Catalog />} />
                <Route path="/sessoes/:movieId" element={<Showtimes footer={footer} setFooter={setFooter} />} />
                <Route path="/assentos/:showtimeId" element={<Theater footer={footer} setFooter={setFooter} />} />
                <Route path="/sucesso" element={<Success footer={footer} setFooter={setFooter} />} />
            </Routes>
            <Footer posterUrl={footer.posterURL} title={footer.title} weekday={footer.weekday} showtime={footer.showtime} />
        </BrowserRouter>
    )
}

const Header = styled.div`
    width: 100%;
    height: 67px;

    background: #C3CFD9;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;

    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
`