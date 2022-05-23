import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Showtime( { weekday, date, showtimes} ) {
    return (
        <ShowtimeDate>
            <p>{ weekday } - { date }</p>
            <ShowtimeTimes>
                {showtimes.map((time) =>
                    <Link key={time.id} to={`/assentos/${time.id}`}>
                        <Button>{time.name}</Button>
                    </Link>
                )}
            </ShowtimeTimes>
        </ShowtimeDate>
    )
}

const ShowtimeDate = styled.div`
    width: 100%;
    margin-bottom: 20px;
    padding: 0 25px;

    p{
        margin-bottom: 20px;

        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        letter-spacing: 0.02em;
        color: #293845;
    }
`

const ShowtimeTimes = styled.div`
    width: 100%;

    display: flex;
    flex-wrap: wrap;
`

const Button = styled.div`
    width: 82px;
    height: 43px;
    margin-right: 8px;

    background: #E8833A;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
`