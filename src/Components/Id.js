import styled from "styled-components"
import Play from "../assets/seta_play.png"
export default function Id() {
    return (
        <DivId>
            <p>Pergunta 1</p>
            <img src={Play}/>
        </DivId>
    )
}

const DivId = styled.div`

    width: 100%;
    height: 65px;
    background-color: #ffffff;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin-bottom: 20px;
    display: visible;

    p {
    font-family: 'Recursive', sans-serif;
    color: #333333;
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-left: 30px;
    
    }

    img {
        margin-right:30px;
        width: 23px;
        height: 23px;
    }
    
`