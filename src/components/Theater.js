import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Seat from './Seat';

export default function Theater({ footer, setFooter }) {
    const { showtimeId } = useParams();
    const [seats, setSeats] = useState([]);
    const [selection, setSelection] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");
    const navigate = useNavigate();

    function response(data) {
        setSeats(data.seats);
        setFooter({...footer, weekday: data.day.weekday, showtime: data.name});
    }

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${showtimeId}/seats`);
        promise.then((r) => response(r.data));
    }, []);

    function booking(event) {
        event.preventDefault();
        
        if (selection.length) {
            const booking = {ids: selection, name, cpf}
            setFooter({...footer, booking: booking})
            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", booking);
            promise.then(navigate('/sucesso'));
        }
    }

    return (
        <div className="content">
            <div className="instruction">Selecione os assentos</div>
            <Seating>
                {seats.map((seat, i) => <Seat key={i} id={seat.id} name={seat.name} available={seat.isAvailable} selection={selection} setSelection={setSelection} />)}
            </Seating>
            <Legend>
                <div>
                    <SeatLegend color={"#8DD7CF"} border={"#1AAE9E"} ></SeatLegend>
                    <p>Selecionado</p>
                </div>
                <div>
                    <SeatLegend color={"#C3CFD9"} border={"#7B8B99"} ></SeatLegend>
                    <p>Disponível</p>
                </div>
                <div>
                    <SeatLegend color={"#FBE192"} border={"#F7C52B"} ></SeatLegend>
                    <p>Indisponível</p>
                </div>
            </Legend>
            <Form onSubmit={(e) => booking(e)}>
                <label htmlFor="NameId">Nome do Comprador:</label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Digite seu nome..." id="NameId" required></input>
                <label htmlFor="CpfId">CPF do Comprador:</label>
                <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} placeholder="Digite seu nome..." id="CpfId" required></input>
                <button type="submit">Reservar assento(s)</button>
            </Form>
        </div>
    )
}

const Seating = styled.div`
    width: 375px;
    padding: 0 24px;

    display: grid;
    justify-content: center;
    grid-template-columns: repeat(10, auto);
    column-gap: 7px;
    row-gap: 18px;
`

const Legend = styled.div`
    width: 375px;
    margin-top: 16px;

    display: flex;
    justify-content: space-evenly;

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    p {
        margin: 7px 0;

        font-size: 13px;
        line-height: 15px;
        color: #4E5A65;
    }
`

const SeatLegend = styled.div`
    width: 24px;
    height: 24px;

    background: ${props => props.color};
    border: solid 1px ${props => props.border};
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`

const Form = styled.form`
    margin: 41px 24px 0 24px;
    
    display: flex;
    flex-direction: column;

    input {
        width: 324px;
        height: 51px;
        margin-bottom: 7px;
        padding-left: 18px;
    }

    input::placeholder {
        color: #AFAFAF;
        font-style: italic;
        font-size: 18px;
    }

    label {
        color: #293845;
        font-size: 18px;
        line-height: 21px;
    }

    button {
        width: 225px;
        height: 42px;
        margin-top: 50px;

        background: #E8833A;
        color: #FFFFFF;
        font-size: 18px;
        line-height: 21px;

        align-self: center;
    }
`