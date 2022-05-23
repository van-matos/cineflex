import styled from "styled-components";

export default function Footer({ posterUrl, title, weekday, showtime }) {

    if (posterUrl) {

        const description = `${weekday} - ${showtime}`;

        return (
            <FooterBox>
                <Poster>
                    <img src={posterUrl} alt={title}></img>
                </Poster>
                <div>
                    <p>{title}</p>
                    <p>{showtime ? description : ""}</p>
                </div>
            </FooterBox>
        );
    } else {
        return (
            <></>
        )
    }
}

const FooterBox = styled.div`
    width: 100%;
    height: 117px;

    position: fixed;
    bottom: 0;
    left: 0;
    
    background-color: #DFE6ED;
    border: solid 1px #9EADBA;

    display: flex;
    align-items: center;
    padding: 14px 10px;

    p {
        font-size: 26px;
        line-height: 30px;
        color: #293845;
    }
`

const Poster = styled.div`
    width: 64px;
    height: 89px;
    margin-right: 14px;
    padding: 8px;

    background-color: #FFFFFF;
    border-radius: 2px;
    box-shadow: 0px 2px 4px 2px #0000001A;
    
    img {
        width: 100%;
        height: 100%;
    }
` 