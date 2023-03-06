import Header from "./Header"
import Footer from "./Footer"
import Questions from "./Questions"
import styled from "styled-components"
import { useState } from "react"
import mock from "../mock"

export default function Body() {

    const [cont, setCont] = useState(0)

    function contarJogada() {
        setCont(cont+1)
    }

    return (
        <>
            <DivBody>
                <Header/>
                <DivBodyQuestions>
                    {mock.map((o)=> <Questions key={o.Index} mock={o} contarJogada={contarJogada}/>)}
                </DivBodyQuestions>
                <Footer cont={cont} mock={mock}/>
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
`

const DivBodyQuestions = styled.div`
    margin-bottom: 15vh;
    overflow-y: auto;
`