import styled from "styled-components"


export default function Id(props) {

    return (
        <DivId show={props.show} colorDone={props.colorDone}>
            <p>{props.index}</p>
            <img src={props.icon} onClick={props.click} alt=""/>
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
    display: ${ props => props.show === 0 ? "visible" : "none"};

    p {
    font-family: 'Recursive', sans-serif;
    color: ${props=>props.colorDone};
    font-size: 16px;
    font-weight: 700;
    line-height: 19px;
    margin-left: 30px;
    text-decoration-line:${props=>props.colorDone !== "#333333" && "line-through"};
    
    }

    img {
        margin-right:30px;
        width: 23px;
        height: 23px;
    }
    
`