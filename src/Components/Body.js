import Header from "./Header"
import Footer from "./Footer"
import Questions from "./Questions"
import styled from "styled-components"
import { useState } from "react"
import mock from "../mock"
import LogoPng from "../assets/logo.png"
import {DivBody , DivBodyQuestions, DivWelcomeScreen, Logo} from "./bodyComponents"

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