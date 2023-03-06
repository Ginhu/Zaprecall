import styled from "styled-components"

export default function Answer(props) {
    return (
        <DivAnswer show={props.show}>
            <p>{props.answer}</p>
           <div>
            <NaoLembrei onClick={()=>props.chooseIcon(1)}>Não lembrei</NaoLembrei>
            <QuaseNaoLembrei onClick={()=>props.chooseIcon(2)}>Quase não lembrei</QuaseNaoLembrei>
            <Zap onClick={()=>props.chooseIcon(3)}>Zap!</Zap>
           </div>
        </DivAnswer>
    )
}

const DivAnswer = styled.div`
    width:100%;
    height:131px;
    background-color:#ffffd4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display:flex;
    justify-content: space-between;
    flex-direction:column;
    margin-bottom: 20px;
    display: ${ props => props.show === 2 ? "visible" : "none"};

    p {
        margin: 10px 10px 0;
        font-family: 'Recursive', sans-serif;
        color: #333333;
        font-size: 18px;
        font-weight: 400;
        line-height: 22px;
    }

    div {
        display:flex;
        justify-content: space-between;
        margin: 0 10px 15px;
    }

`

const NaoLembrei = styled.button`
    width: 85px;
    height: 37px;
    background-color: #ff3030;
    border-radius: 5px;
    color: #ffffff;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    border:none;
`

const QuaseNaoLembrei = styled.button`
    width: 85px;
    height: 37px;
    background-color: #ff922e;
    border-radius: 5px;
    color: #ffffff;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    border:none;
`

const Zap = styled.button`
    width: 85px;
    height: 37px;
    background-color: #2fbe34;
    border-radius: 5px;
    color: #ffffff;
    font-family: 'Recursive', sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 14px;
    border:none;
`
