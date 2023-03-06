import Header from "./Header"
import Footer from "./Footer"
import Questions from "./Questions"
import styled from "styled-components"
import { useState } from "react"
import mock from "../mock"
import LogoPng from "../assets/logo.png"

export default function Body() {

    const [cont, setCont] = useState(0)
    const [welcome, setWelcome] = useState(true)
    const [iconsAnswer, setIconsAnswer] = useState([])
    const [dataTestIcon, setDataTestIcon] = useState("")

    function contarJogada() {
        setCont(cont+1)
    }

    function welcomeChanger() {
        setWelcome(false)
    }

    return (
        <>
            <DivWelcomeScreen welcome={welcome}>
                <Logo src={LogoPng}/>
                <p>ZapRecall</p>
                <button onClick={welcomeChanger} data-test="start-btn">Iniciar Recall!</button>
            </DivWelcomeScreen>
            <DivBody welcome={welcome}>
                <Header/>
                <DivBodyQuestions>
                    {mock.map((o)=> <Questions key={o.Index} mock={o} contarJogada={contarJogada} iconsAnswer={iconsAnswer} setIconsAnswer={setIconsAnswer} setDataTestIcon={setDataTestIcon}/>)}
                </DivBodyQuestions>
                <Footer cont={cont} mock={mock} iconsAnswer={iconsAnswer} dataTestIcon={dataTestIcon}/>
            </DivBody>
        </>
    )
}

const DivBody = styled.div`
    
    width: 100vw;
    height: 100vh;
    background-color: #FB6B6B;
    display:flex;
    align-items:center;
    flex-direction: column;
    display: ${props => props.welcome ? "none" : "visible"};
`

const DivBodyQuestions = styled.div`
    margin-bottom: 15vh;
    overflow-y: auto;
`

const DivWelcomeScreen = styled.div`
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

const Logo = styled.img`
    width:136px;
    height: 161px;
`