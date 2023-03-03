import styled from "styled-components"

export default function Answer() {
    return (
        <DivAnswer>
            <p>Meu nome é</p>
           <div>
            <NaoLembrei>Não lembrei</NaoLembrei>
            <QuaseNaoLembrei>Quase não lembrei</QuaseNaoLembrei>
            <Zap>Zap!</Zap>
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
    display: none;

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
        justify-content: space-between;
        margin: 20px 10px;
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
