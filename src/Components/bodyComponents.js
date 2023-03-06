import styled from "styled-components"

export const DivBody = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;
    display:flex;
    align-items:center;
    flex-direction: column;
    display: ${props => props.welcome ? "none" : "visible"};
`

export const DivBodyQuestions = styled.div`
    margin-bottom: 15vh;
    overflow-y: auto;
`

export const DivWelcomeScreen = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: #fb6b6b;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: ${props => props.welcome ? "visible" : "none"};

    p {
        width: 257px;
        height:59px;
        font-family: 'Righteous', cursive;
        font-size: 36px;
        color: #ffffff;
        line-height: 45px;
        text-align: center;
        align-items: center;
        padding: 15px 25px;
        margin: 5vh 0 5vh
    }

    button {
        width: 246px;
        height: 54px;
        background-color: #ffffff;
        color: #d70900;
        border: 1px solid #D70900;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
    }
`

export const Logo = styled.img`
width:136px;
height: 161px;
`