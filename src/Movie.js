import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Movie({ id, posterURL }) {
    return (
        <Film>
            <Link to={`/sessoes/${id}`}>
                <img src={posterURL} alt=""/>
            </Link>
        </Film>
    );
}

const Film = styled.div`
    width: 145px;
    height: 209px;
    margin: 0 13px 10px 13px;
    padding: 8px;

    border-radius: 3px;
    box-shadow: 0px 2px 4px 2px #0000001A;

    img{
        width: 100%;
        height: 100%;
    }
`