import styled from "styled-components"
import {DivAnswer, NaoLembrei, QuaseNaoLembrei, Zap} from "./answerStyledComponents"

export default function Answer(props) {
    return (
        <DivAnswer show={props.show}>
            <p data-test="flashcard-text">{props.answer}</p>
           <div>
            <NaoLembrei><button onClick={()=>props.chooseIcon(1)} data-test="no-btn">Não lembrei</button></NaoLembrei>
            <QuaseNaoLembrei><button onClick={()=>props.chooseIcon(2)} data-test="partial-btn">Quase não lembrei</button></QuaseNaoLembrei>
            <Zap><button onClick={()=>props.chooseIcon(3)} data-test="zap-btn">Zap!</button></Zap>
           </div>
        </DivAnswer>
    )
}








