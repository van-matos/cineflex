import { useState } from "react";
import styled from "styled-components";

function selectSeat(isAvaliable, color, setColor, setBorder, id, selection, setSelection) {
    if (isAvaliable) {
        if (color === "#C3CFD9") {
            setColor("#8DD7CF");
            setBorder("#45BDB0");
            setSelection([...selection, id].sort());
        } else {
            setColor("#C3CFD9");
            setBorder("#808F9D");
            setSelection(selection.filter((i) => id !== i));

        }
    } else {
        alert("Assento indisponível!");
    }
}

export default function Seat({ id, name, available, selection, setSelection }) {

    const [color, setColor] = useState(available ? "#C3CFD9" : "#FBE192");
    const [border, setBorder] = useState(available ? "#808F9D" : "#F7C52B")

    return (
        <SeatNum onClick={() => selectSeat(available, color, setColor, setBorder, id, selection, setSelection)} color={color} border={border} >
            { name }
        </SeatNum>
    );
}

const SeatNum = styled.div`
    width: 26px;
    height: 26px;

    color: #000000;
    font-size: 11px;
    line-height: 13px;
    
    background: ${props => props.color};
    border: solid 1px ${props => props.border};
    border-radius: 50%;
    
    display: flex;
    justify-content: center;
    align-items: center;
`