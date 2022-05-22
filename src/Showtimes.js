import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import Showtime from "./Showtime";

export default function Showtimes() {

    const { movieId } = useParams();
    const [days, setDays] = useState([]);

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${movieId}/showtimes`);
        promise.then(response => setDays(response.data.days));
    });

    return (
        <div className="content">
            <div className="instruction">Selecione o horário</div>
            {days.map((day) => <Showtime key={day.id} weekday={day.weekday} date={day.date} showtimes={day.showtimes} />)}
        </div>
    );
}