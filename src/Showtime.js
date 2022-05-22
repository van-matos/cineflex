import { Link } from "react-router-dom";


export default function Showtime( { weekday, date, showtimes} ) {
    return (
        <div className="showtime-date">
            <p>{ weekday } - { date }</p>
            <div className="showtime-times">
                {showtimes.map((time) =>
                    <Link key={time.id} to={`/assentos/${time.id}`}>
                        <div className="button">{time.name}</div>
                    </Link>
                )}
            </div>
        </div>
    )
}