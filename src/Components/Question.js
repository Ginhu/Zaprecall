import styled from "styled-components"
import Virar from "../assets/seta_virar.png"
export default function Question(props) {
    return (
        <DivQuestion show={props.show}>
           <p>{props.question}</p>
           <div>
            <img src={Virar} onClick={props.click} alt=""/>
           </div>
        </DivQuestion>
    )
}

const DivQuestion = styled.div`
    width:100%;
    height:131px;
    background-color:#ffffd4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    margin-bottom: 20px;
    display: ${ props => props.show === 1 ? "visible" : "none"};

    p {
        margin: 20px 30px;
        font-family: 'Recursive', sans-serif;
        color: #333333;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }

    div {
        display:flex;
        justify-content:flex-end;
        margin: 20px 30px;
    }

    img {
        width: 30px;
        height: 20px;
    }
`