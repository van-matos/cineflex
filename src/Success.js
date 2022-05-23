import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function Success( { title, weekday, showtime, booking, setFooter }) {
    const navigate = useNavigate();
    
    function goBack(event) {
        event.preventDefault();
        setFooter({});
        navigate("/");
    }

    return (
        <div className="content">
            <Message>
                Pedido feito{'\n'}
                com sucesso!
            </Message>
            <Description>
                <p>Filme e sessão</p>
                <p>{title}</p>
                <p>{weekday} - {showtime}</p>
            </Description>
            <Description>
                <p>Ingressos</p>
                {booking.ids.map((item, i) => <p key={i}>Assento {item}</p>)}
            </Description>
            <Description>
                <p>Comprador</p>
                <p>Nome: {booking.name}</p>
                <p>CPF: {booking.cpf}</p>
            </Description>
            <Button onClick={(e) => goBack(e)}>Voltar pra Home</Button>
        </div>
    )
}

const Message = styled.div`
width: 374px;
height: 110px;

font-weight: 700;
font-size: 24px;
line-height: 28px;
letter-spacing: 0.04em;
color: #247A6B;

display: flex;
align-items: center;
justify-content: center;
`

const Description = styled.div`
    width: 100%;
    margin-bottom: 15px;
    margin-left: 30px;
    p:first-child {
        font-size: 24px;
        line-height: 28px;
        font-weight: bold;
        margin-bottom: 8px;
        margin-top: 15px;
    }
    p {
        font-size: 22px;
        line-height: 25px;
        color: #293845;
        margin: 1px;
    }
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    background-color: #E8833A;
    border-radius: 3px;
    color: #FFFFFF;
    font-size: 18px;
    line-height: 21px;
    margin: 50px 0 20px 0;
` 