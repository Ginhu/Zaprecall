import styled from "styled-components"

export default function IconsAnswers(props) {

    return (
        <>
            <DivIcons>
                <img src={props.el} alt=""></img>
            </DivIcons>
        </>
    )
}

const DivIcons = styled.div`
    display: flex;
    margin-right: 5px;
`