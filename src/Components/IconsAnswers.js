import { useState } from "react"
import styled from "styled-components"

export default function IconsAnswers(props) {
    
    function consoleLog() {
        consoleLog.consoleLog(props.el)
    }

    return (
        <>
            <DivIcons>
                <img src={props.el} data-test={props.dataTestIcon}></img>
            </DivIcons>
        </>
    )
}

const DivIcons = styled.div`
    display: flex;
    margin-right: 5px;
`