import { useState } from "react"
import styled from "styled-components"
import Answer from "./Answer"
import Id from "./Id"
import Question from "./Question"
import Play from "../assets/seta_play.png"
import Zap from "../assets/icone_certo.png"
import Almost from "../assets/icone_quase.png"
import Wrong from "../assets/icone_erro.png"

export default function Questions(props) {

    const [show, setShow] = useState(0)
    const [icon, setIcon] = useState(Play)
    const [colorDone, setColorDone] = useState("#333333")
    const [dataTest, setDataTest] = useState("play-btn")

    function clickShowNext() {
        if(icon === Play) {
            setShow(show+1)
        }
    }

    function chooseIcon(el) {
        if (el === 1) {
            setIcon(Wrong)
            setColorDone("#FF3030")
            setDataTest("no-icon")
            props.setIconsAnswer([...props.iconsAnswer, Wrong])
            props.contarJogada()
            props.setDataTestIcon("no-icon")
        } else if (el === 2) {
            setIcon(Almost)
            setColorDone("#FF922E")
            setDataTest("partial-icon")
            props.setIconsAnswer([...props.iconsAnswer, Almost])
            props.contarJogada()
            props.setDataTestIcon("partial-icon")
        } else {
            setIcon(Zap)
            setColorDone("#2FBE34")
            setDataTest("zap-icon")
            props.setIconsAnswer([...props.iconsAnswer, Zap])
            props.contarJogada()
            props.setDataTestIcon("zap-icon")
        }
        setShow(0)
    }


    
    return (
        <>
            <DivQuestions>
                <div data-test="flashcard" >
                <Id index={props.mock.Index} icon={icon} colorDone={colorDone} click={clickShowNext} show={show} dataTest={dataTest}/>
                <Question question={props.mock.Question} click={clickShowNext} show={show}/>
                <Answer answer={props.mock.Answer} show={show} chooseIcon={chooseIcon}/>
                </div>
            </DivQuestions>
        </>
    )
}

const DivQuestions = styled.div`
    display:flex;
    width: 80vw;
    height: auto;
    display:flex;
    flex-direction: column;
`