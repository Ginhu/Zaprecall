import styled from "styled-components"
import Answer from "./Answer"
import Id from "./Id"
import Question from "./Question"

export default function Questions() {
    return (
        <>
            <DivQuestions>
                <Id/>
                <Question />
                <Answer />
            </DivQuestions>
        </>
    )
}

const DivQuestions = styled.div`
    display:flex;
    width: 80vw;
    height: auto;
    background-color: blue;
    display:flex;
    flex-direction: column;
`